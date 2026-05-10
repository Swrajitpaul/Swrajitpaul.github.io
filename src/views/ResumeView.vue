<template>
  <div class="page">
    <div class="actions">
      <a href="/myresume.pdf" download class="download">↓ Download PDF</a>
      <a href="/myresume.docx" download class="download">↓ Download DOCX</a>
    </div>

    <object data="/myresume.pdf" type="application/pdf" class="pdf-viewer">
      <p class="fallback">
        Your browser can't display the PDF inline.
        <a href="/myresume.pdf" target="_blank" rel="noopener">Open it in a new tab</a>.
      </p>
    </object>
  </div>
</template>

<style scoped>
.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.pdf-viewer {
  width: 100%;
  height: 75vh;
  min-height: 500px;
  border: 1px solid #999;
  background: #fff;
}

.fallback {
  padding: 2rem;
  text-align: center;
}

.fallback a {
  color: var(--accent);
  text-decoration: underline;
}
</style>
