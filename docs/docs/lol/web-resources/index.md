---
outline: deep
---

# LOL 官网资源

## 变量

- n-m: 数值 n 到 m，包括 n 和 m
- champNmae: 英雄名称, 例如 Yasuo
- champId: 英雄 id, 例如 157
- skinId: 皮肤 id, 例如 157001
- champSpell: 技能名称, 详见 英雄数据 `spells[0].abilityIconPath`
- role: 定位

  ```json
  {
    "fighter": "战士",
    "mage": "法师",
    "assassin": "刺客",
    "tank": "坦克",
    "marksman": "射手",
    "support": "辅助"
  }
  ```

- position: 位置
  ```json
  {
    "top": "上单",
    "jungle": "打野",
    "mid": "中路",
    "bottom": "下路",
    "support": "辅助"
  }
  ```
- 装备类型
  ```json
  {
    "ordinary": "普通",
    "epic": "史诗",
    "legend": "传说",
    "myth": "神话"
  }
  ```

## 数据资源

### 英雄列表

`https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js`

### 英雄数据

`https://game.gtimg.cn/images/lol/act/img/js/hero/${champId}.js`

### 装备列表

`https://game.gtimg.cn/images/lol/act/img/js/items/items.js`

### 装备列表(ext)

`https://game.gtimg.cn/images/lol/act/img/js/items_ext/items_ext.js`

### 符文列表

`https://game.gtimg.cn/images/lol/act/img/js/runeList/rune_list.js`

### 召唤师技能列表

`https://game.gtimg.cn/images/lol/act/img/js/summonerskillList/summonerskill_list.js`

### 宇宙官网英雄列表(含高清英雄原皮图片链接)

`https://yz.lol.qq.com/v1/zh_cn/champion-browse/index.json`

## 图片资源

### 英雄头像

![](https://game.gtimg.cn/images/lol/act/img/champion/Yasuo.png)

`https://game.gtimg.cn/images/lol/act/img/champion/${champNmae}.png`

### 英雄技能

![](https://game.gtimg.cn/images/lol/act/img/spell/YasuoE.png)

`https://game.gtimg.cn/images/lol/act/img/spell/${champSpellNmae}.png`

### 皮肤头像

![](https://game.gtimg.cn/images/lol/act/img/skin/small157009.jpg)

`https://game.gtimg.cn/images/lol/act/img/skin/small${skinId}.jpg`

### 皮肤大图

![](https://game.gtimg.cn/images/lol/act/img/skin/big157009.jpg)

`https://game.gtimg.cn/images/lol/act/img/skin/big${skinId}.jpg`

### 皮肤小横图

![](https://game.gtimg.cn/images/lol/act/img/skinvideo/sp157009.jpg)

`https://game.gtimg.cn/images/lol/act/img/skinvideo/sp${skinId}.jpg`

### 皮肤横图

![](https://game.gtimg.cn/images/lol/act/img/guidetop/guide157009.jpg)

`https://game.gtimg.cn/images/lol/act/img/guidetop/guide${skinId}.jpg`

### 皮肤加载图

![](https://game.gtimg.cn/images/lol/act/img/skinloading/157009.jpg)

`https://game.gtimg.cn/images/lol/act/img/skinloading/${skinId}.jpg`

### 皮肤炫彩图

![](https://game.gtimg.cn/images/lol/act/img/chromas/157/157034.png)

`https://game.gtimg.cn/images/lol/act/img/chromas/${champId}/${skinId}.png`

仅限炫彩皮肤 英雄数据 `skins[0].chromas` "0"/"1"

### 101 横幅

![](https://game.gtimg.cn/images/lol/act/img/101/32.jpg)

`https://game.gtimg.cn/images/lol/act/img/101/${1-44}.jpg`

## 音效资源

### 英雄选择音效

<audio src="https://game.gtimg.cn/images/lol/act/img/vo/choose/157.ogg" controls></audio>

`https://game.gtimg.cn/images/lol/act/img/vo/choose/${champId}.ogg`

### 英雄禁用音效

<audio src="https://game.gtimg.cn/images/lol/act/img/vo/ban/157.ogg" controls></audio>

`https://game.gtimg.cn/images/lol/act/img/vo/ban/${champId}.ogg`
