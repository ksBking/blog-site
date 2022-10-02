import fg from 'fast-glob';
import matter from 'gray-matter';
import { sideConfig } from './config';

interface group {
  name: string;
  title: string;
  menus: menu[];
}
interface menu {
  name: string;
  title: string;
  link: string;
}

function title(path: string, groupName: string): string {
  if (sideConfig[path]) {
    // 存在此 path
    for (const groupItem of sideConfig[path]) {
      if (groupItem.name === groupName) {
        // 找到此 group
        return groupItem.title;
      }
    }
  }
  // 没有此 path 或 group
  return groupName === 'setup' ? '开始' : groupName;
}

function order(path: string, groupName: string, menuName?: string): number {
  if (sideConfig[path]) {
    // 存在此 path
    for (let groupIndex = 0; groupIndex < sideConfig[path].length; groupIndex++) {
      const groupItem = sideConfig[path][groupIndex];
      if (menuName) {
        // 查找的为 menu
        if (groupItem.name === groupName) {
          // 在此 group 下
          const menuLength = groupItem?.menus?.length || 0;
          for (let menuIndex = 0; menuIndex < menuLength; menuIndex++) {
            const menuItem = groupItem?.menus?.[menuIndex];
            if (menuItem === menuName) {
              // 返回 menu 顺序
              return menuIndex;
            }
          }
          if (menuName === 'index') {
            // menu 为 setup
            return -1;
          } else {
            // 不存在此 menu
            return menuLength;
          }
        }
      } else {
        // 查找的为 group
        if (groupItem.name === groupName) {
          // 返回 group 顺序
          return groupIndex;
        }
      }
    }
  }
  if (menuName === 'index') {
    // group 不存在 查的为 menu > index
    return -1;
  } else if (menuName) {
    // group 不存在 查的为 menu
    return 0;
  } else if (groupName === 'setup') {
    // group 不存在 查的为 group group 为 setup
    return -1;
  } else if (groupName) {
    // 不存在此 group
    return sideConfig[path] ? sideConfig[path].length : 0;
  } else {
    // 不存在此 path
    return 0;
  }
}

function sidebar() {
  const srcDir = 'src';
  const files = fg.sync(`${srcDir}/*/*/*.md`);
  const side: { [path: string]: group[] } = {};
  const list = files.map(file => {
    const backslashLastIndex1 = file.lastIndexOf('/');
    const fileName = file.slice(backslashLastIndex1 + 1, file.length - '.md'.length);
    if (fileName === 'index') {
      return {
        groupName: 'setup',
        menuName: fileName,
        menuTitle: '简介',
        menuLink: file.slice(srcDir.length, backslashLastIndex1 + 1),
      };
    } else {
      const { data: frontmatter } = matter.read(file);
      if (!frontmatter.title) console.warn('[sidebar warn]', file, 'title is not defined.');
      const groupName = frontmatter.group || 'setup';
      return {
        groupName,
        menuName: fileName,
        menuTitle: frontmatter.title || fileName,
        menuLink: file.slice(srcDir.length, file.length - '.md'.length),
      };
    }
  });
  list.forEach(listItem => {
    const path =
      listItem.groupName === 'index'
        ? listItem.menuLink
        : listItem.menuLink.slice(0, listItem.menuLink.lastIndexOf('/') + 1);
    if (!side[path]) {
      // 该 side 未创建，创建
      side[path] = [];
    }
    if (!side[path].some(groupItem => groupItem.name === listItem.groupName)) {
      // 该 side 不存在此 group
      side[path].push({
        name: listItem.groupName,
        title: title(path, listItem.groupName),
        menus: [],
      });
    }
    side[path].some((groupItem, groupIndex) => {
      if (groupItem.name === listItem.groupName) {
        if (!groupItem.menus.some(menuItem => menuItem.name === listItem.menuName)) {
          // 该 group 不存在此 menu
          return side[path][groupIndex].menus.push({
            name: listItem.menuName,
            title: listItem.menuTitle,
            link: listItem.menuLink,
          });
        }
      }
    });
  });

  Object.entries(side).forEach((sideItem, i) => {
    // 对 side path > groups 排序
    sideItem[1].sort((a, b) => order(sideItem[0], a.name) - order(sideItem[0], b.name));
    sideItem[1].forEach(groupItem => {
      // 对 side path > groups > menu 排序
      groupItem.menus.sort(
        (a, b) =>
          order(sideItem[0], groupItem.name, a.name) - order(sideItem[0], groupItem.name, b.name),
      );
    });
  });

  // 结构调整
  return Object.fromEntries(
    Object.entries(side).map(sideItem => [
      sideItem[0],
      sideItem[1].map(groupItem => ({
        text: groupItem.title,
        items: groupItem.menus.map(menuItem => ({
          text: menuItem.title,
          link: menuItem.link,
        })),
      })),
    ]),
  );
}
sidebar();

export default sidebar();
