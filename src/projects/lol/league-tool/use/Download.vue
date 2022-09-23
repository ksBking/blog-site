<script setup lang="ts">
import { ref } from 'vue';
const status = ref('loading');
const latest = ref();

const url =
  import.meta.env.MODE === 'development'
    ? '/data/league-tool/latest.json'
    : `https://ksbking.gitee.io/data/league-tool/latest.json?_=${Date.now()}`;
fetch(url)
  .then(res => res.json())
  .then(data => {
    status.value = 'ok';
    latest.value = data;
  })
  .catch(() => {
    status.value = 'fail';
  });
</script>

<template>
  <p v-if="latest">公告：{{ latest.notice }}</p>
  <h2 v-if="latest">最新版本：{{ latest.version }}（{{ latest.time }}）</h2>
  <p v-if="status === 'loading'">正在加载……</p>
  <ul v-else-if="status === 'ok'">
    <li v-for="(item, index) in latest.download" :key="index">
      <a :href="item.url" target="_blank" rel="noreferrer">{{ item.name }}</a>
    </li>
  </ul>

  <p v-else>加载失败……</p>
</template>
