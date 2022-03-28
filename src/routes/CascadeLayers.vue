<template>
  <section id="cascade-layers" aria-labelledby="cascade-layers-header">
    <h2>Cascade Layers</h2>
    <div class="layer">
      <span class="text">
        Blue text wins because the second layer has higher specificity.
      </span>
      <div class="text">
        Red text wins because the first layer uses !important.
      </div>
      <a class="text">
        Purple text wins because unlayered styles have higher specificity.
      </a>
      <p class="text">Orange text reverts back to the first layer on hover.</p>
    </div>
    <p class="not-supported">
      Your browser does not support cascade layers. :(
    </p>
  </section>
</template>

<style scoped>
@layer base, components;
@layer base {
  .layer span.text {
    color: red;
  }
  .layer div.text {
    color: red !important;
  }
  .layer a.text {
    color: red;
  }
  .layer p.text {
    color: red;
  }
}
@layer components {
  .layer span {
    color: blue;
  }
  .layer div {
    color: blue;
  }
  .layer a.text {
    color: orange;
  }
  .layer p {
    color: orange;
  }
  .layer p:hover {
    color: revert-layer;
  }
}
.layer a {
  color: purple;
}
@supports not (color: revert-layer) {
  .supported {
    display: none;
  }
  .not-supported {
    display: revert;
  }
}
</style>
