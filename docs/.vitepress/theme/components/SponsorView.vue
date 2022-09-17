<template>
  <div class="wrapper">
    <img class="img" src="/img/qrcode/微信收款码.png" alt="" />
    <img class="img" src="/img/qrcode/支付宝收款码.png" alt="" />
    <img class="img" src="/img/qrcode/QQ收款码.png" alt="" />
  </div>
</template>
<script lang="ts" setup></script>

<style scoped>
.wrapper {
  display: flex;
  align-content: normal;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.img {
  width: 200px;
  margin: 8px;
  border-radius: 8px;
}
</style>
