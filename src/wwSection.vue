<template>
<div class="PDF-viewer" id="app">
<h1 :style="textStyle">My Title</h1>
<p>PDF URL: {{ content.pdf }} Search Text: {{ content.search }}</p>
<p>
<input type="text" ref="findInput" v-model="searchText">
<input type="checkbox" ref="findHighlightAll" v-model="highlightAll" checked>
</p>
<vue-pdf-app 
      ref="pdfApp"
      style="height:100vh;width:100%" 
      :pdf="content.pdf" 
      @document-loaded="onDocumentLoaded"
    />
</div>
</template>
 
<script>
import VuePdfApp from "vue3-pdf-app";
import "vue3-pdf-app/dist/icons/main.css";
 
export default {
  components: {
    VuePdfApp
  },
  props: {
    content: {
      type: Object,
      default: () => ({ pdf: "", search: "" })
    }
  },
  data() {
    return {
      searchText: this.content.search,
      highlightAll: true,
    };
  },
  methods: {
    onDocumentLoaded() {
      this.$nextTick(() => {
        if (this.$refs.pdfApp) {
          this.$refs.pdfApp.PDFViewerApplication.eventBus.dispatch("find", {
            query: this.searchText,
            highlightAll: this.highlightAll,
            caseSensitive: false
          });
        }
      });
    }
  }
};
</script>
 
<style lang="scss" scoped>
.PDF-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>