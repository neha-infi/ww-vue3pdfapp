<template>
  <div class="PDF-viewer" id="app">
    <h1 :style="textStyle">My Title</h1>
    <p>PDF URL: {{ this.content.pdf }} {{this.content.search}}</p>
    <vue-pdf-app  style="height:100vh;width:100%" :pdf="this.content.pdf" :id-config="idConfig" @open="openHandler">
    </vue-pdf-app>
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
      default: () => ({ pdf: this.content.pdf, findInput: this.content.search, findHighlightAll: this.content.search})
    }
  },
  data() {
    return {
      idConfig: { findInput: this.content.search, findHighlightAll: this.content.search}
    };
  },
  methods: {
    openHandler(pdfApp) {
      setTimeout(() => (pdfApp.pdfViewer.findHighlightAll = this.content.search));
    },
    initObserver() {
      this.resizeObserver = new ResizeObserver(() => {
        console.log(this.content.pdf);
        console.log("Resized");
      });
      this.resizeObserver.observe(this.$el);
    },
    clearObserver() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
    }
  },
  beforeUnmount() {
    this.clearObserver();
  },
  mounted() {
    this.initObserver();
    console.log("PDF URL:", this.content.pdf); // Debugging output
  }
};
</script>

<style lang="scss" scoped>
.PDF-viewer{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
