<template>
  <section id="lab" aria-labelledby="lab-heading">
    <h2 id="lab-heading">Lab and Lch</h2>
    <div class="lab-bg prose supported">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
        obcaecati?
      </p>
    </div>
    <div class="oklab-bg prose supported">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea
        veniam placeat accusamus cupiditate quam corrupti at, necessitatibus
        culpa rerum?
      </p>
    </div>
    <div class="color-bg prose supported">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
        provident non quidem magnam earum quos.
      </p>
    </div>
    <p class="not-supported">Your browser does not support lch colors. :(</p>
  </section>
</template>

<style scoped>
.prose {
  max-width: 65ch;
  padding: var(--spacing-base);
}
.lab-bg {
  background-color: lab(25% 255 255);
  color: lch(100% 255 255);
}
.oklab-bg {
  background-color: oklab(54% -0.1 -0.02);
  color: oklch(156.43% 0.09 123.4);
}
.color-bg {
  background-color: color(display-p3 1.823 1.6554 0.5537);
  color: color(prophoto-rgb 0.9589 0.4 1.55);
}
@supports not (color: lch(0% 0 0)) {
  .supported {
    display: none;
  }
  .not-supported {
    display: revert;
  }
}
</style>
