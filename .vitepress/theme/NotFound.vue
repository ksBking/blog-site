<script setup lang="ts">
import { useData } from 'vitepress';
const { site } = useData();
</script>

<template>
  <div class="NotFound">
    <p class="code">404</p>
    <h1 class="title">看起来我们进入了错误的链接…</h1>
    <div class="divider" />
    <blockquote class="quote">
      不介意的话可以向我们<a href="https://wj.qq.com/s2/10713059/078d" target="_blank">提交错误</a
      >！
    </blockquote>
    <div class="action">
      <a class="link" :href="site.base" aria-label="go to home">返回首页</a>
    </div>
  </div>
</template>

<style scoped>
.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
}

@media (min-width: 768px) {
  .NotFound {
    padding: 96px 32px 168px;
  }
}

.code {
  font-weight: 600;
  font-size: 64px;
  line-height: 64px;
}

.title {
  padding-top: 12px;
  letter-spacing: 2px;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
}

.divider {
  margin: 24px auto 18px;
  width: 64px;
  height: 1px;
  background-color: var(--vp-c-divider);
}

.quote {
  margin: 0 auto;
  max-width: 256px;
  color: var(--vp-c-text-2);
  font-weight: 500;
  font-size: 14px;
}

.quote a {
  color: var(--vp-c-brand);
  font-weight: 500;
  transition: color 0.25s;

  text-decoration-style: dotted;
}

.quote a:hover {
  color: var(--vp-c-brand-dark);
}

.action {
  padding-top: 20px;
}

.link {
  display: inline-block;
  padding: 3px 16px;
  border: 1px solid var(--vp-c-brand);
  border-radius: 16px;
  color: var(--vp-c-brand);
  font-weight: 500;
  font-size: 14px;
  transition: border-color 0.25s, color 0.25s;
}

.link:hover {
  border-color: var(--vp-c-brand-dark);
  color: var(--vp-c-brand-dark);
}
</style>
