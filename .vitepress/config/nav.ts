import fg from 'fast-glob';
import matter from 'gray-matter';
import { navConfig } from './config';

interface navItem {
  name: string;
  title: string;
  groups: groupItem[];
}

interface groupItem {
  name: string;
  title: string;
  menus: menuItem[];
}

interface menuItem {
  name: string;
  title: string;
  link: string;
}

function title(navName: string, groupName?: string): string {
  // 对 nav 进行循环
  for (const navItem of navConfig) {
    if (groupName === 'no-group') {
      // 找的为 group 且 不需要 group title
      return '';
    } else if (groupName) {
      // 找的为 group
      if (navItem.name === navName) {
        // 在此 nav 下
        for (const groupItem of navItem.groups || []) {
          if (groupItem.name === groupName) {
            // 找到此 group
            return groupItem.title;
          }
        }
        // 没有此 group
        return groupName;
      }
    } else {
      // 找的为 nav
      if (navItem.name === navName) {
        // 找到此 nav
        return navItem.title;
      }
    }
  }

  // 没有此 nav
  return navName;
}

function order(navName: string, groupName?: string, menuName?: string): number {
  // 对 nav 进行循环
  for (let navIndex = 0; navIndex < navConfig.length; navIndex++) {
    const navItem = navConfig[navIndex];
    if (navItem.name === navName) {
      // 找到此 nav
      if (groupName === 'no-group') {
        // 查到的为 no-group 并放到最顶部
        return -1;
      } else if (groupName) {
        // 对 group 进行循环
        const groupsLength = navItem.groups.length;
        for (let groupIndex = 0; groupIndex < groupsLength; groupIndex++) {
          const groupItem = navItem.groups[groupIndex];
          if (groupItem.name === groupName) {
            // 找到此 group
            if (menuName) {
              // 对 menu 进行循环
              const menusLength = groupItem.menus?.length || 0;
              for (let menuIndex = 0; menuIndex < menusLength; menuIndex++) {
                if (groupItem.menus?.[menuIndex] === menuName) {
                  // 返回 menu 顺序
                  return menuIndex;
                }
              }
              // 没有此 menu
              return menusLength;
            } else {
              // 返回 group 顺序
              return groupIndex;
            }
          }
        }
        // 没有此 group
        return menuName ? 0 : groupsLength;
      } else {
        // 返回 nav 顺序
        return navIndex;
      }
    }
  }
  // 没有此 nav
  return menuName || groupName ? 0 : navConfig.length;
}

function nav() {
  const srcDir = 'src';
  const files = fg.sync(`${srcDir}/*/*/index.md`);
  const nav: navItem[] = [];
  const list = files.map(file => {
    const { data: frontmatter } = matter.read(file);
    if (!frontmatter.title) console.warn('[nav warn]', file, 'title is not defined.');
    const backslashIndex1 = file.indexOf('/');
    const backslashIndex2 = file.indexOf('/', backslashIndex1 + 1);
    const backslashIndex3 = file.indexOf('/', backslashIndex2 + 1);
    const backslashLastIndex1 = file.lastIndexOf('/');
    const navName = file.slice(backslashIndex1 + 1, backslashIndex2);
    const groupName = frontmatter.group || 'no-group';
    const menuName = file.slice(backslashIndex2 + 1, backslashIndex3);
    const menuTitle: string = frontmatter.title || menuName;
    const menuLink = file.slice(srcDir.length, backslashLastIndex1 + 1);
    return { navName, groupName, menuName, menuTitle, menuLink };
  });

  list.forEach(listItem => {
    if (!nav.some(navItem => navItem.name === listItem.navName)) {
      // 该 nav 未创建，创建
      nav.push({ name: listItem.navName, title: title(listItem.navName), groups: [] });
    }
    nav.some((navItem, navIndex) => {
      if (navItem.name === listItem.navName) {
        // 在此 nav 下
        if (!navItem.groups.some(groupItem => groupItem.name === listItem.groupName)) {
          // 该 group 未创建，创建
          nav[navIndex].groups.push({
            name: listItem.groupName,
            title: title(navItem.name, listItem.groupName),
            menus: [],
          });
        }
        return nav[navIndex].groups.some((groupItem, groupIndex) => {
          if (groupItem.name === listItem.groupName) {
            // 在此 group 下
            return nav[navIndex].groups[groupIndex].menus.push({
              name: listItem.menuName,
              title: listItem.menuTitle,
              link: listItem.menuLink,
            });
          }
        });
      }
    });
  });

  nav.forEach((navItem, navIndex) => {
    navItem.groups.forEach((groupItem, groupIndex) => {
      // menu 排序
      nav[navIndex].groups[groupIndex].menus = groupItem.menus.sort(
        (a, b) =>
          order(nav[navIndex].name, groupItem.name, a.name) -
          order(nav[navIndex].name, groupItem.name, b.name),
      );
    });
    // groups 排序
    nav[navIndex].groups = navItem.groups.sort(
      (a, b) => order(nav[navIndex].name, a.name) - order(nav[navIndex].name, b.name),
    );
  });
  // nav 排序
  nav.sort((a, b) => order(a.name) - order(b.name));

  // 结构调整
  return nav.map(navItem => ({
    text: navItem.title,
    activeMatch: `/${navItem.name}/`,
    items: navItem.groups.map(groupItem => ({
      text: groupItem.title,
      items: groupItem.menus.map(menuItem => ({ text: menuItem.title, link: menuItem.link })),
    })),
  }));
}
export default nav();
