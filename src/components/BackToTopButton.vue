<template>
  <!-- 回到顶部按钮 -->
  <button
      id="backToTopBtn"
      @click="scrollToTop"
      v-show="isVisible"
      class="back-to-top"
  >
    ↑
  </button>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(false);

// 滚动到页面顶部的函数
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 监听页面滚动事件
window.addEventListener('scroll', () => {
  isVisible.value = window.scrollY > 20;
});
</script>

<style scoped>
.back-to-top {
  position: fixed;  /* 固定位置，始终在视口可见 */
  bottom: 20px;     /* 距离底部20px */
  right: 20px;       /* 改为左侧20px，之前是右侧 */
  width: 40px;      /* 设置宽度为40px */
  height: 40px;     /* 设置高度为40px，与宽度相同，形成正方形 */
  padding: 0;       /* 移除内边距 */
  background-color: rgba(110, 127, 141, 0.5); /* 灰蓝色背景 */
  color: white;     /* 白色文字 */
  border: none;     /* 无边框 */
  cursor: pointer;  /* 鼠标指针 */
  border-radius: 5px; /* 设置较小的圆角 */
  font-size: 16px;  /* 适当字体大小以确保箭头符号可见 */
  line-height: 40px; /* 确保文字垂直居中 */
  text-align: center; /* 文字水平居中 */
  z-index: 1000;    /* 高z-index确保按钮在其他内容上面 */
  opacity: 0.8;     /* 轻微透明，增加美感 */
  transition: opacity 0.3s; /* 平滑过渡效果 */
}

.back-to-top:hover {
  opacity: 1;       /* 鼠标悬浮时不透明 */
}
</style>



