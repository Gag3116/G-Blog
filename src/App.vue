<template>
  <div class="app-container">
    <!-- 页面的公共部分，如导航栏 -->
    <Navbar/>
    <!-- 显示匹配到的路由组件 -->
    <div class="main-container">
      <router-view/>
    </div>
    <!-- 回到顶部按钮 -->
    <BackToTopButton/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import BackToTopButton from "@/components/BackToTopButton.vue"; // 确保路径正确

export default {
  name: 'App',
  components: {
    Navbar,
    BackToTopButton  // 注册组件
  },
  computed: {
    isLoggedIn() {
      // 从 Vuex 获取登录状态
      return this.$store.state.isLoggedIn;
    }
  },
  methods: {
    logout() {
      // 用户登出逻辑
      this.$store.commit('logout');
      this.$router.push('/login');
    }
  }
};
</script>

<style>
/* 全局样式 */
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
.app-container{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main-container {
  padding-top: 4rem;
  flex-grow: 1;
}
</style>
