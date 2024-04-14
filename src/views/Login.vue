<template>
  <div class="login-container">
    <div class="login">
      <h2>Welcome to G-Blog</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" placeholder="Enter your username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" required>
        </div>
        <button type="submit">Login</button>
      </form>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p>Don't have an account? <router-link to="/register" class="router-link">Create an account</router-link></p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  computed: {
    ...mapGetters(['allUsers'])  // Assuming the getter for users data is named allUsers
  },
  created() {
    if (this.allUsers.length === 0) {
      this.loadUsers(); // Load users if not already loaded
    }
  },
  methods: {
    ...mapActions(['loadUsers']), // Action to load users data from the users.json
    login() {
      const user = this.allUsers.find(u => u.username === this.username && u.password === this.password);
      if (user) {
        this.$store.commit('login', user); // Committing to store on successful login
        this.$router.push('/'); // Navigate to home page
      } else {
        this.errorMessage = 'Invalid username or password. Please try again.'; // Handling login failure
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
