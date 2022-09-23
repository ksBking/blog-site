<script setup lang="ts">
import { ref } from 'vue';
const url = ref('');
//
const replace = () => {
  try {
    const raw_url = new URL(url.value);
    const new_url = raw_url.href.replace(raw_url.host, 'vscode.cdn.azure.cn');
    window.open(new_url);
  } catch (error) {
    alert('请输入正确的链接！');
    console.log(error);
  }
};
</script>

<template>
  <input class="input" type="url" v-model.trim="url" placeholder="复制下载链接到此处" />
  <button class="button" @click="replace">镜像下载</button>
</template>

<style scoped>
.input {
  width: 50%;
  margin-right: 16px;
  padding: 3px 8px;
  border: 1px solid var(--vp-c-brand);
  border-radius: 4px;
  color: var(--vp-c-brand);
  font-weight: 500;
  font-size: 14px;
  transition: border-color 0.25s, color 0.25s;
}

.button {
  display: inline-block;
  padding: 0 20px;
  border: 1px solid transparent;
  border-color: var(--vp-button-brand-border);
  border-radius: 20px;
  background-color: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  text-align: center;
  white-space: nowrap;
  font-weight: 500;
  font-size: 14px;
  line-height: 32px;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
}
.button:active {
  transition: color 0.1s, border-color 0.1s, background-color 0.1s;
}
.button:hover {
  border-color: var(--vp-button-brand-hover-border);
  background-color: var(--vp-button-brand-hover-bg);
  color: var(--vp-button-brand-hover-text);
}
.button:active {
  border-color: var(--vp-button-brand-active-border);
  background-color: var(--vp-button-brand-active-bg);
  color: var(--vp-button-brand-active-text);
}
</style>
