<template>
  <div class="login-container">
    <div class="login">
      <h2>Create Account</h2>
      <form @submit.prevent="tryRegister"> <!-- 注意这里改为 tryRegister -->
        <div class="form-group">
          <label for="new-username">Username:</label>
          <input type="text" id="new-username" v-model="username" placeholder="Choose a username" required>
        </div>
        <div class="form-group">
          <label for="new-nickname">Nickname:</label>
          <input type="text" id="new-nickname" v-model="nickname" placeholder="Enter your nickname" required>
        </div>
        <div class="form-group">
          <label for="new-password">Password:</label>
          <input type="password" id="new-password" v-model="password" placeholder="Create a password" required>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p>Already have an account?
        <router-link to="/login" class="router-link">Log in</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      nickname:'',
      password: '',
      errorMessage: ''
    };
  },
  computed: {
    ...mapGetters(['allUsers'])
  },
  methods: {
    ...mapActions(['loadUsers', 'addUser']),
    tryRegister() {
      const exists = this.allUsers.some(user => user.username === this.username);
      if (!exists) {
        //create avatar url by the first letter
        const avatarUrl = `https://api.dicebear.com/8.x/initials/svg?seed=${this.nickname.charAt(0)}`;
        this.addUser({
          username: this.username,
          nickname:this.nickname,
          password: this.password,
          avatar:avatarUrl
        });
        alert('Registration successful! Click OK to go to the login page.');
        this.$router.push('/login');
      } else {
        this.errorMessage = 'Username already exists. Please choose another one.';
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
