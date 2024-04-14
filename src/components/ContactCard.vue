<template>
  <div class="contact-card">
    <div class="avatar">
      <img :src="avatar" alt="Avatar" />
    </div>
    <div class="name">{{ name }}</div>
    <div class="pronouns">{{ pronouns }}</div>
    <div class="position">{{ position }}</div>
    <div class="university">{{ university }}</div>
    <div class="contact-info">
      <div class="phone">Phone: {{ phone }}</div>
      <div class="email">Email: {{ email }}</div>
      <div class="address">Address: {{ address }}</div>
      <div class="social-media">Instagram: {{ instagram }}</div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    avatar:String,
    name: String,
    pronouns: String,
    position: String,
    university: String,
    phone: String,
    email: String,
    address: String,
    instagram: String
  }
};
</script>

<style scoped>
.contact-card {
  width: auto;
  min-width: 380px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: var(--color-background-mute); /* 蓝色背景 */
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.avatar {
  margin-bottom: 10px;
}

.avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}


.name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.pronouns {
  font-style: italic;
  margin-bottom: 10px;
}

.position {
  font-weight: bold;
  margin-bottom: 10px;
}

.university {
  margin-bottom: 10px;
}

.contact-info {
  margin-bottom: 10px;
}

.social-media {
  font-style: italic;
}
</style>
