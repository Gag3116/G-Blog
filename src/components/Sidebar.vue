<template>
  <div class="sidebar">
    <ul>
      <li v-for="(yearArticles,year) in groupedArticles" :key=year class="year">
        <div @click="toggleYear(year)">
          {{ year }}
          <span>{{ expandedYears[year] ? '-' : '+' }}</span>
        </div>
        <ul v-if="expandedYears[year]">
          <li v-for="(monthArticles, month) in yearArticles" :key="month" class="month">
            <div @click.stop="toggleMonth(year, month)">
              {{ month }}
              <span>{{ expandedMonths[year + '-' + month] ? '-' : '+' }}</span>
            </div>
            <ul v-if="expandedMonths[year + '-' + month]">
              <li v-for="article in monthArticles" :key="article.id" @click.stop="selectArticle(article)"
                  :class="{ selected: selectedArticle === article }">
                {{ article.title }}
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    articles: Array
  },
  data() {
    return {
      selectedArticle: null,
      expandedYears: {},
      expandedMonths: {}
    };
  },
  computed: {
    groupedArticles() {
      const grouped = {};
      // 将文章按年份和月份分组
      this.articles.forEach(article => {
        const year = article.publishedAt.substring(0, 4);
        const month = article.publishedAt.substring(5, 7);
        if (!grouped[year]) {
          grouped[year] = {};
        }
        if (!grouped[year][month]) {
          grouped[year][month] = [];
        }
        grouped[year][month].push(article)
      });
      // 对年份进行排序
      const sortedYears = Object.keys(grouped).sort((a, b) => parseInt(b) - parseInt(a));
      const sortedGroupedArticles = {};
      sortedYears.forEach(year => {
        // 对每个年份的月份进行排序
        sortedGroupedArticles[year] = Object.keys(grouped[year]).sort((a, b) => parseInt(a) - parseInt(b))
            .reduce((acc, month) => {
              acc[month] = grouped[year][month];
              return acc;
            }, {});
      });

      return sortedGroupedArticles;
    }
  },
  methods: {
    selectArticle(article) {
      this.selectedArticle = article;
      this.$emit('select-article', article);
    },
    toggleYear(year) {
      this.expandedYears[year] = !this.expandedYears[year];
    },
    toggleMonth(year, month) {
      const key = `${year}-${month}`;
      this.expandedMonths[key] = !this.expandedMonths[key];
    }
  },
  mounted() {
    // Initialize all years and months as collapsed
    for (let year in this.groupedArticles) {
      this.expandedYears[year] = this.expandedYears[year];
      for (let month in this.groupedArticles[year]) {
        const key = `${year}-${month}`;
        this.expandedMonths[key] = this.expandedMonths[key];
      }
    }
  }
};
</script>

<style scoped>
.sidebar {
  margin-top: 40px;
  width: 200px;
  padding: 20px;
}

ul {

  max-height: 60vh; /* 设置最大高度，留出一些空间给其他元素 */
  overflow-y: auto; /* 只在列表部分添加滚动条 */
  list-style-type: none;
  padding-left: 0;
}

ul li {
  font-weight: normal;
  cursor: pointer;
  padding: 5px;
  margin-bottom: 5px;
}

ul li.selected {
  background-color: #64748b;
  color: white;
}


li.year {
  font-weight: bold;
  background-color: var(--color-background-soft);
  color: var(--color-text);
}

/* 月份样式 */
li.month {
  padding-left: 20px;
  font-weight: bolder;
  background-color: transparent;
}


/* 年份悬浮效果 */
li.year:hover {
  background-color: #a7bcd4; /* 淡色背景，或选择其他颜色 */
  color: black;
}

/* 月份悬浮效果 */
li.month:hover {
  background-color: #8899a6;
  color: white;
}

ul li:hover {
  background-color: #78909c;
  color: white;
}
</style>