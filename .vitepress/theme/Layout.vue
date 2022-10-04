<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme';
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout></Layout>
  <img
    class="wrapper"
    src="https://img.shields.io/github/last-commit/ksbking/ksbking.github.io?style=flat-square&logo=github"
    alt=""
  />
</template>

<style scoped>
.wrapper {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 100;
  border-top-left-radius: 4px;
  opacity: 0.5;

  -webkit-user-drag: none;
}
</style>
