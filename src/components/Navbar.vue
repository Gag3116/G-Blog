<template>
  <nav class="navbar">
    <div class="navbar-brand">G-Blog</div>
    <ul class="navbar-links">
      <li><router-link to="/" active-class="active-link">Home</router-link></li>
      <li><router-link to="/about" active-class="active-link">About</router-link></li>
      <li><router-link to="/contact" active-class="active-link">Contact</router-link></li>
    </ul>
    <div class="navbar-user">
      <template v-if="isLoggedIn">
        <router-link :to="{ name: 'UserProfile' }" class="user-profile-link" active-class="active-link">
          <img :src="userAvatar" alt="Profile" class="user-icon">
          <p class="name">Welcome, {{ nickName }}</p>
        </router-link>
        <button @click="logout">Logout</button>
      </template>
      <template v-else>
        <router-link to="/login" active-class="active-link">Login</router-link>
        <p>|</p>
        <router-link to="/register" active-class="active-link">Register</router-link>
      </template>
    </div>
  </nav>
</template>


<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import {useRouter} from "vue-router";

export default {
  name: 'Navbar',
  setup() {
    const router = useRouter();
    const store = useStore();  // 使用 useStore 获取 Vuex store

    const isLoggedIn = computed(() => store.state.isLoggedIn);
    const user = computed(() => store.state.user);
    const userName = computed(() => user.value ? user.value.username : '');
    const nickName = computed(() => user.value ? user.value.nickname : '');
    const userAvatar = computed(() => user.value ? user.value.avatar : './icons/user-icon.svg'); // 默认图标作为后备

    const logout = () => {
      store.commit('logout');
      router.push('/');
    };

    return {
      isLoggedIn,
      user,
      userName,
      nickName,
      userAvatar,
      logout
    };
  }
};
</script>

<style scoped>
.active-link {
  color: #4A90E2; /* 例如，使用明亮的蓝色来高亮当前活动的链接 */
  font-weight: bold; /* 加粗字体增加视觉区分 */
}

.navbar {
  position: fixed; /* 设置导航栏位置固定 */
  top: 0; /* 固定在视口顶部 */
  left: 0; /* 固定在视口左侧 */
  width: 100%; /* 导航栏宽度延伸至整个视口宽度 */
  z-index: 1000; /* 确保导航栏在页面上其他内容之上 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--color-background-soft); /* 使用 CSS 变量应用背景颜色 */
  transition: background-color 0.5s; /* 平滑过渡背景颜色变化 */
  max-height: 4rem;

}

.navbar-brand {
  font-weight: bold;
  color: var(--brand-color);
}

.navbar-links {
  list-style: none;
  display: flex;
}

.navbar-links li {
  margin: 0 10px;
}

.navbar-links a {
  text-decoration: none;
}

.navbar-user {
  display: flex;
  align-items: center;
}

.user-profile-link {
  display: flex;
  align-items: center;
  color: var(--color-text); /* 确保链接颜色与文本颜色一致 */
}

.user-icon {
  width: 30px; /* 圆形头像大小 */
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
}

button {
  padding: 10px 20px;
  background-color: var(--button-color); /* 应用按钮背景颜色 */
  color: var(--vt-c-white); /* 应用按钮文本颜色 */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.5s; /* 平滑过渡背景颜色变化 */
}

button:hover {
  background-color: var(--button-hover-color);
}
p{
  color: var(--color-text); /* 确保链接颜色与文本颜色一致 */
}
</style>

