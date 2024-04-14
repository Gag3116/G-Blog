<template>
<div class="user-profile-container">
  <div class="user-profile">
    <h1>User Profile</h1>
    <div class="profile-info" v-if="user">
      <img :src="user.avatar || '../components/icons/user-icon.svg'" alt="User" class="profile-icon">
      <h2>{{ user.nickname }}</h2>
      <p>Email: {{ user.email }}</p>

    </div>
    <div v-else>
      <p>User information is not available at the moment.</p>
    </div>
    <!-- 示例操作按钮 -->
    <button @click="editProfile">Edit Profile</button>
  </div>
</div>

</template>

<script>
import {mapState} from 'vuex';
import Navbar from "@/components/Navbar.vue";

export default {
  name: 'UserProfile',
  components: {Navbar},
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    editProfile() {
      // 添加编辑个人资料的逻辑或导航
      this.$router.push('/edit-profile');
    }
  }
};
</script>

<style scoped>
.user-profile-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.user-profile {
  width: 100%;
  border-radius: 10px;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: var(--color-background-mute); /* 应用背景颜色变量 */
  color: var(--color-text); /* 应用文本颜色变量 */
  border: 1px solid var(--color-border); /* 应用边框颜色变量 */
  transition: background-color 0.5s, color 0.5s, border-color 0.5s; /* 平滑过渡颜色变化 */
}

.profile-info {
  margin-top: 20px;
}

.profile-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%; /* 圆形图标 */
  margin-bottom: 20px;
}

h1, h2, p {
  color: var(--color-text); /* 明确为所有文本元素设置文本颜色 */
}

button {
  padding: 10px 20px;
  margin-top: 20px;
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
</style>
