<template>
  <section id="color-fns" aria-labelledby="color-fns-heading">
    <h2 id="color-fns-heading">Color Functions</h2>
    <article class="supported">
      <h3>Color Mixing</h3>
      <div class="colors">
        <h4>LCH</h4>
        <div class="box color blue" />
        <span>+</span>
        <div class="box color red" />
        <span>=</span>
        <output class="box red-blue-lch" />
      </div>
      <div class="colors">
        <h4>SRGB</h4>
        <div class="box color blue" />
        <span>+</span>
        <div class="box color red" />
        <span>=</span>
        <output class="box red-blue-srgb" />
      </div>
    </article>
    <article class="supported">
      <h3>Color Contrast</h3>
      <div class="colors">
        <div class="box color blue" />
        <span>+</span>
        <div class="box black" />
        <span>or</span>
        <div class="box white" />
        <span>=</span>
        <output class="color blue">Lorem ipsum dolor sit amet.</output>
      </div>
      <div class="colors">
        <div class="box color red" />
        <span>+</span>
        <div class="box black" />
        <span>or</span>
        <div class="box white" />
        <span>=</span>
        <output class="color red">Lorem ipsum dolor sit amet.</output>
      </div>
    </article>
    <article class="supported">
      <h3>Relative Colors</h3>
      <div class="colors">
        <h4>LCH</h4>
        <div class="box color red" />
        <span>-</span>
        <span>50% lightness</span>
        <span>=</span>
        <output class="box color darkred" />
      </div>
      <div class="colors">
        <h4>HSL</h4>
        <div class="box color blue" />
        <span>-</span>
        <span>50% saturation</span>
        <span>=</span>
        <output class="box color desatblue" />
      </div>
      <div class="colors">
        <h4>RGB</h4>
        <div class="box color orange" />
        <span>-</span>
        <span>100% red</span>
        <span>=</span>
        <output class="box color redlessorange" />
      </div>
    </article>
    <p class="not-supported">
      Your browser does not support color functions. :(
    </p>
  </section>
</template>

<style scoped>
article {
  --black: black;
  --white: white;
}
article > * + * {
  margin-top: var(--spacing-base);
}

.box {
  height: 1.5rem;
  aspect-ratio: 1;
}
.black {
  background-color: var(--black);
}
.white {
  background-color: var(--white);
  border: 1px solid var(--black);
}

.colors {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}
.red-blue-lch {
  background-color: color-mix(in lch, blue, red);
}
.red-blue-srgb {
  background-color: color-mix(in srgb, blue, red);
}

.color {
  background-color: var(--color);
  color: color-contrast(var(--color) vs var(--black), var(--white));
  padding: var(--spacing-sm);
}
.color.blue {
  --color: blue;
}
.color.red {
  --color: red;
}
.color.orange {
  --color: orange;
}
.darkred {
  --color: lch(from red calc(l - 50%) c h);
}
.desatblue {
  --color: hsl(from blue h calc(s - 50%) l);
}
.redlessorange {
  --color: rgb(from orange calc(r - 100%) g b);
}

@supports not (color: color-mix(in lch, purple, plum)) {
  .supported {
    display: none;
  }
  .not-supported {
    display: revert;
  }
}
</style>
