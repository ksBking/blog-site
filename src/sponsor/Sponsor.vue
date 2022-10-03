<template>
  <div class="wrapper">
    <img class="img" src="./images/qq.webp" alt="" />
    <img class="img" src="./images/wx.webp" alt="" />
    <img class="img" src="./images/zfb.webp" alt="" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-content: normal;
  justify-content: center;
  width: 100%;
}
.img {
  width: 200px;
  margin: 8px;
  border-radius: 8px;
  user-select: none;

  -webkit-user-drag: none;
}
</style>
