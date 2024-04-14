<template>

  <div class="previewer" v-if="article">
    <h1>{{ article.title }}</h1>
    <p class="article-metadata">{{ article.publishedAt }} |
      <span v-for="(tag, index) in article.tags" :key="index">
        #{{ tag }}<span v-if="index < article.tags.length - 1">&nbsp;</span>
      </span>
    </p>
    <div class="markdown-content" v-html="renderedContent" ></div>

  </div>

  <div v-else>
    <p>Please select an article from the sidebar.</p>
  </div>


</template>

<script>
import MarkdownIt from 'markdown-it';


export default {
  props: ['article'],
  data() {
    return {
      renderedContent: '',
      markdownIt: new MarkdownIt()
    };
  },
  watch: {
    article(newArticle, oldArticle) {
      if (newArticle !== oldArticle) {
        this.loadArticleContent();
      }
    }
  },
  methods: {
    loadArticleContent() {

      if (this.article && this.article.contentUrl) {

        fetch(this.article.contentUrl)
            .then(response => response.text())
            .then(markdown => {
              this.renderedContent = this.convertMarkdownToHTML(markdown);
              this.$nextTick(() => {

              });
            })
            .catch(error => console.error('Failed to load article content:', error));
      }
    },
    convertMarkdownToHTML(markdown) {
      markdown = this.markdownIt.render(markdown);
      return markdown; // 真实环境中应该是转换后的HTML
    },

  },
  mounted() {
    this.loadArticleContent(); // 初始加载文章
  }
};
</script>

<style>
.previewer h1{
  text-align: center;
  margin-bottom: 5px;
}
.markdown-content {
  color: var(--color-text);
  line-height: 1.75;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: var(--color-background-mute);
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Georgia', serif; /* 重设字体，避免继承外部字体样式 */
}

.markdown-content * {
  max-width: 100%; /* 防止内容溢出预览器 */
}

.markdown-content h1, .markdown-content h2, .markdown-content h3, .markdown-content h4, .markdown-content h5, .markdown-content h6 {
  text-align: left;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
}

.markdown-content p, .markdown-content ul, .markdown-content ol, .markdown-content li, .markdown-content blockquote, .markdown-content code, .markdown-content pre {
  text-align: left;
  color: inherit; /* 重置颜色继承自父元素，不受外部影响 */
  background: none; /* 清除可能的背景设置 */
  border: none; /* 清除可能的边框设置 */
  padding: 0; /* 清除内边距 */
  margin: 0; /* 清除外边距 */
}

.markdown-content a {
  text-decoration: none;
}

.markdown-content a:hover {
  text-decoration: underline;
}

.markdown-content ul, .markdown-content ol {
  padding-left: 20px;
  margin-bottom: 10px;
}
.markdown-content table {
  border-collapse: collapse; /* 确保表格的边框合并为单一边框 */
  width: 100%; /* 表格宽度设置为容器的100% */
  margin-bottom: 20px; /* 表格下方留出空间 */
}

.markdown-content th, .markdown-content td {
  border: 1px solid #ccc; /* 单元格边框设置为浅灰色 */
  padding: 8px; /* 单元格内边距 */
  text-align: left; /* 文本对齐方式 */
}

.markdown-content th {
  background-color: #6e7f8d; /* 表头背景色 */
  font-weight: bold; /* 表头字体加粗 */
}

.markdown-content li {
  margin-bottom: 5px;
}

.markdown-content code {
  font-family: 'Courier New', Courier, monospace; /* 使用等宽字体 */
  color: #c9d7ec;
  background-color: black;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 90%;
}

.markdown-content pre {

  font-family: 'Courier New', Courier, monospace; /* 使用等宽字体 */
  color: #c9d7ec;
  background-color: black;
  padding: 10px;
  border-radius: 10px;
  overflow-x: auto;
}


.markdown-content blockquote {
  background: #f0f2f5;
  margin-left: 0;
  margin-right: 0;
  padding-left: 20px;
  border-left: 4px solid #ccc;
  color: #666;
  font-style: italic;
}
</style>