<template>
  <div class="about-page">
    <button @click="toggleSidebar" class="toggle-sidebar">☰</button>
    <div :class="['sidebar', { collapsed: isCollapsed }]">
      <ul>
        <li @click="selectSection('project')">About This Project</li>
        <li @click="selectSection('me')">About Me</li>
      </ul>
    </div>
    <main :style="{ marginLeft: isCollapsed ? '250px' : '0' }">
      <div v-if="selectedSection === 'project'" class="project">

          <h1>About This Project</h1>
          <section class="background">
            <h2>Project Background</h2>
            <p>This project was developed as part of the CS732 course assignment, focusing on the Vue framework to demonstrate how to build a frontend framework for a personal blog. The aim was to create a modular and easily adaptable blog frontend that supports backend integration for a complete blogging solution.</p>
          </section>
          <section class="objectives">
            <h2>Objectives and Purpose</h2>
            <p>The main objective was to build a frontend project for a personal blog that is easy to deploy and modify, facilitating the separation of frontend and backend. This allows anyone to adapt the code to set up their own personal blog frontend, which can be integrated with a backend to deploy a fully functional personal blog.</p>
          </section>
          <section class="technology">
            <h2>Technology and Tools</h2>
            <p>The project utilizes Vue 3 for building the pages, accompanied by Vuex for state management to simulate backend data interactions. Open APIs like weather and avatar generation were incorporated to enrich the blog's features and user interactivity.</p>
          </section>
          <section class="development">
            <h2>Development Process</h2>
            <p>The development was structured around key milestones, starting with the setup of the Vue environment, incorporating Vuex for data handling, and integrating APIs for external data. Challenges included managing state effectively across the blog and ensuring responsive and intuitive UI designs. Solutions involved rigorous testing and iterative enhancements to the user interface.</p>
          </section>
          <section class="outcomes">
            <h2>Outcomes and Learning</h2>
            <p>The project led to the creation of a functional and visually appealing blog frontend. Key learnings included advanced Vue techniques, state management with Vuex, and integrating various external APIs. This experience has significantly enhanced my understanding of frontend development practices and tools.</p>
          </section>
          <section class="vision">
            <h2>Future Vision</h2>
            <p>My vision for the future involves regular updates and maintenance of this project, with plans to develop the backend components to transform it into a fully operational personal blog. This ongoing project will serve as a foundation for further learning and development in web technologies.</p>
          </section>

      </div>
      <div v-if="selectedSection === 'me'" class="me">
        <h1>About Me</h1>
        <p>Alright, curious soul, let's peel back the layers.</p>
        <p>I'm a master's student in the mystical realm of IT at the University of Auckland. By day, I'm deciphering the cryptic language of code, and by night, you'll probably find me sipping on a glass of wine or two, pondering the intricacies of the universe (or just watching cat videos).</p>
        <p>When I'm not lost in the matrix of technology, I'm out exploring the world, seeking inspiration in every corner and enjoying life's simple pleasures.</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      selectedSection: 'project', // 默认显示项目介绍
      isCollapsed:false // 控制侧边栏是否折叠
    };
  },
  methods: {
    selectSection(section) {
      this.selectedSection = section;
    },
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
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

h2{
  margin-top: 25px;
  margin-bottom: 5px;
  text-align: left;
}
p{
  text-align: left;
}

.toggle-sidebar:hover {
  background-color: var(--button-hover-color); /* 鼠标悬停时的背景色变化 */
}

.sidebar {
  margin-top: 40px;
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

.sidebar ul {
  list-style: none;
  padding: 20px;
}

.sidebar li {
  cursor: pointer;
  margin-bottom: 10px;
}
p{
  color: var(--color-text);

}
main {
  flex-grow: 1;
  padding: 20px 60px;
  transition: margin-left 0.3s ease;
}

</style>
