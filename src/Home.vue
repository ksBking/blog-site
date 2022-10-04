<script setup lang="ts">
import { ref, onMounted } from 'vue';
function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const quotes = [
  {
    content: '为了更美好的明天而战。',
    from: '英雄联盟',
    author: '杰斯',
  },
  {
    content: '我有一个特点，不擅长倒下。',
    from: '英雄联盟',
    author: '波比',
  },
  {
    content: '也许我们今天就会倒下，但我们依然坚定。',
    from: '英雄联盟',
    author: '莫甘娜',
  },
  {
    content: '无论刮风还是下雨，太阳依然升起。',
    from: '英雄联盟',
    author: '雷欧娜',
  },
  {
    content: '不要放弃，直到做对为止。',
    from: '英雄联盟',
    author: '艾克',
  },
  {
    content: '也许会失败，但我不会放弃。',
    from: '英雄联盟',
    author: '瑞兹',
  },
  {
    content: '你得先看重自己，否则别人就会当你一钱不值。',
    from: '英雄联盟',
    author: '卡蜜尔',
  },
  {
    content: '即使是最沉重的门，也能被打开。',
    from: '英雄联盟',
    author: '布隆',
  },
  {
    content: '攀登的过程也许漫长，但巅峰的风景是值得的。',
    from: '英雄联盟',
    author: '塔里克',
  },
  {
    content: '真正的大师人，永远都怀着一颗学徒的心。',
    from: '英雄联盟',
    author: '易',
  },
  {
    content: '活在恐惧中，不能算是活着。',
    from: '英雄联盟',
    author: '瑟庄妮',
  },
  {
    content: '决心会帮助我们度过困境。',
    from: '英雄联盟',
    author: '拉克丝',
  },
  {
    content: '希望会断绝恐惧，正如太阳会终结暗影。',
    from: '英雄联盟',
    author: '拉克丝',
  },
  {
    content: '投降才是战败，为你的灵魂而战。',
    from: '英雄联盟',
    author: '俄洛伊',
  },
  {
    content: '卡莎，下次再努力点。',
    from: '英雄联盟',
    author: '卡莎',
  },
  {
    content: '爬起来，站稳了，狠狠的打。',
    from: '英雄联盟',
    author: '卡莎',
  },
  {
    content: '还没输，也就是还没赢。',
    from: '英雄联盟',
    author: '斯维因',
  },
  {
    content: '再努力一把，优势就会出现。',
    from: '英雄联盟',
    author: '卡莎',
  },
  {
    content: '所谓杰出，不过是努力超过前人。',
    from: '英雄联盟',
    author: '卡莎',
  },
];
const quote = ref();
const img = ref('none');
onMounted(() => {
  img.value = `url(https://game.gtimg.cn/images/lol/act/img/101/${random(1, 44)}.jpg)`;
  quote.value = quotes[random(0, quotes.length - 1)];
});
</script>

<template>
  <div class="title-bg" :style="{ 'background-image': img }"></div>
  <div class="home-bg" :style="{ 'background-image': img }">
    <div class="title">你好, 朋友!</div>
    <div class="quote" v-if="quote">
      {{ quote.content }} ——《{{ quote.from }}》 {{ quote.author }}
    </div>
  </div>
</template>

<style scoped>
.title-bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  display: none;
  width: 100%;
  height: var(--vp-nav-height);
  background-position: center;
  background-repeat: no-repeat;
}

@media (min-width: 960px) {
  .title-bg {
    display: block;
  }
}

.home-bg {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 470px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.title {
  margin-right: 10%;
  padding: 0 8px;
  color: #f0e6d2;
  text-shadow: 0 0 48px #000, 0 0 2px #fff;
  letter-spacing: 4px;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.4;
  user-select: none;
  -webkit-animation: show-title 0.5s;
  animation: show-title 0.5s;

  -webkit-user-drag: none;
}

.quote {
  margin-top: 32px;
  margin-left: 10%;
  padding: 0 8px;
  color: #fff;
  text-shadow: 0 0 14px #000, 0 0 2px #f0e6d2;
  font-size: 14px;
  user-select: none;
  animation: show-quote 0.5s;
}

@keyframes show-title {
  25% {
    transform: scale(2);
  }

  75% {
    transform: scale(0.9);
  }
}

@keyframes show-quote {
  25% {
    transform: scale(1.2);
  }

  75% {
    transform: scale(1);
  }
}
</style>
