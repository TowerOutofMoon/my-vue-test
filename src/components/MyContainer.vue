<template>
  <div class="container" :style="{ height: containerHeight }">
    <div class="content">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyContainer',
  props: {
    content: String
  },
  data() {
    return {
      containerHeight: 'auto' /* 自适应高度 */
    };
  },
  /* 内容变化更改高度 */
  mounted() {
    this.updateContainerHeight();
    window.addEventListener('resize', this.updateContainerHeight);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateContainerHeight);
  },
  methods: {
    updateContainerHeight() {
      const contentHeight = this.$refs.content.clientHeight;
      const screenHeight = window.innerHeight;
      const maxHeight = screenHeight * 0.8; // 不超过80%屏幕高度
      this.containerHeight = `${Math.min(contentHeight, maxHeight)}px`;
    }
  }
};
</script>

<style>
.container {
  width: 10%;
  max-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;  /* 垂直居中 */
  align-items: center;
}

.content {
  width: 100%;
  background-color: #f0f0f0; 
  text-align: center;
  word-wrap: break-word;
  transition: height 0.3s linear ease; /* 平滑过渡 */
}
</style>
