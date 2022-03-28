<template>
  <section id="has" aria-labelledby="has-header">
    <h2>Parent Selector</h2>
    <div class="input-group supported">
      <label for="name">First Name</label>
      <input name="name" type="text" />
    </div>
    <div class="input-group supported">
      <label for="textarea">Comment</label>
      <textarea rows="3"></textarea>
    </div>
    <div class="input-group supported">
      <label>Lonely Label</label>
    </div>
    <p class="not-supported">
      Your browser does not support the :has selector. :(
    </p>
  </section>
</template>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-base);
  max-width: 10rem;
}
label:has(+ input) {
  font-weight: 700;
  text-decoration-line: underline;
  text-decoration-color: green;
  color: green;
}
label:has(+ textarea) {
  font-weight: 700;
  text-decoration-line: underline;
  text-decoration-color: purple;
  color: purple;
}
label:has(+ input:focus, + textarea:focus) {
  color: red;
  text-decoration-color: red;
}
@supports not selector(:has(p)) {
  .supported {
    display: none;
  }
  .not-supported {
    display: revert;
  }
}
</style>
