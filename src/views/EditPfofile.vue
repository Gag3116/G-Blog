<template>
  <div class="edit-profile-container" v-if="user">
    <div class="edit-profile-form">
      <h1>Edit Profile</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="user.username" disabled class="disabled-input">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email">
        </div>
        <div class="form-group">
          <label for="nickname">Nickname:</label>
          <input type="text" id="nickname" v-model="nickname">
        </div>
        <div class="form-group">
          <label for="password">New Password:</label>
          <input type="password" id="password" v-model="password">
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" v-model="confirmPassword">
        </div>
        <div class="form-group">
          <label for="avatar">Avatar:</label>
          <input type="file" id="avatar" accept="image/*" @change="handleAvatarChange">
          <p class="input-hint">Choose an image file for your avatar.</p>
          <img v-if="avatar" :src="avatar" alt="Avatar" class="avatar-preview">
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  </div>
  <div v-else>
    Loading user data...
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'EditProfile',
  computed: {
    ...mapState(['user']),
  },
  data() {
    return {
      email: '',
      nickname: '',
      password: '',
      confirmPassword: '',
      avatar: '',
    };
  },
  created() {
    this.initializeFormData()
  },
  methods: {
    initializeFormData(){
      if (this.user){
        this.email=this.user.email;
        this.nickname=this.user.nickname;
        this.avatar=this.user.avatar;
      }
    },
    submitForm() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords entered do not match.');
        return;
      }
      const updatedInfo = {
        email: this.email,
        nickname: this.nickname,
        avatar: this.avatar,
      };
      if (this.password) {
        updatedInfo.password = this.password;  // 只有当用户输入密码时才更新密码
      }
      this.$store.dispatch('updateUserInfo', {
        userId: this.user.id,
        updatedInfo
      }).then(() => {
        alert('The user information has been successfully updated.');
        this.$router.push('/userprofile'); // 更新成功后导航回个人资料页面或其他页面
      }).catch(error => {
        console.error('Update user information failed:', error);
        alert('Failed to update user information. Please try again later.');
      });
    },
    handleAvatarChange(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          this.avatar = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please select an image file.');
      }
    }
  }
};
</script>

<style scoped>
/* 样式信息 */
.edit-profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: 20px;
}
.edit-profile-form {
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  background-color: var(--color-background-mute);
}
.disabled-input {
  background-color: hsla(240, 5%, 50%, 0.2);
  color: hsla(240, 5%, 50%, 0.8);
}
.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input[type="text"], input[type="email"], input[type="password"], input[type="file"] {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
}
.avatar-preview {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 10px;
}
button {
  padding: 10px 20px;
  background-color: var(--button-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: var(--button-hover-color);
}
</style>
