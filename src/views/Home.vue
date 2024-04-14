<template>
  <div>
    <div class="home-content" v-if="isLoggedIn">
      <button @click="toggleSidebar" class="toggle-sidebar">☰</button>

        <Sidebar @select-article="selectArticle" :articles="articles" :class="['sidebar', { collapsed: isCollapsed }]"/>
        <Previewer :article="selectedArticle" :class="['previewer', { collapsed: isCollapsed }]"/>

    </div>
    <div v-else class="isNotLoggedIn">
      <h1>Welcome to G-Blog!</h1>
      <h1>Please log in to view the content.</h1>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Previewer from "@/components/Previewer.vue";
import jsonData from '/public/articles.json'
import {mapState} from "vuex";


export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    Previewer,
    isCollapsed: false
  },
  data() {
    return {
      articles: [],
      selectedArticle: null,
      isCollapsed:true // 控制侧边栏是否折叠
    }
  },
  created() {
    this.articles = jsonData;
  },
  computed: {
    ...mapState(['isLoggedIn'])
  },
  methods: {
    selectArticle(article) {
      this.selectedArticle = article;
    },
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    }
  },
};
</script>

<style scoped>
.toggle-sidebar {
  position: fixed;

  width: auto;
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
}


.toggle-sidebar:hover {
  background-color: var(--button-hover-color); /* 鼠标悬停时的背景色变化 */
}

.sidebar {
  position: fixed;
  width: 230px;
  padding: 20px;
  border-right: 1px solid #ccc;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}
.sidebar.collapsed {
  transform: translateX(0);
}
.isNotLoggedIn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  min-height: calc(100vh - 4rem);
}
.isNotLoggedIn h1{
  text-align: center;
}
.previewer.collapsed{
  margin-left: 250px;
  padding:20px;
}
.previewer{
  flex-grow: 1;
  padding: 20px;
  transition: margin-left 0.3s ease;
}
</style>