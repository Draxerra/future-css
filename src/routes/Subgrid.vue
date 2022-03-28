<template>
  <section id="subgrid" aria-labelledby="subgrid-header">
    <h2 id="subgrid-header">{{ subgrid ? "Subgrid" : "Without Subgrid" }}</h2>
    <button class="subgrid-toggle supported" @click="toggle">
      Toggle Subgrid
    </button>
    <div class="cards supported">
      <article class="card" :class="{ 'with-subgrid': subgrid }">
        <h3>Card 1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure odit
          possimus magnam tempora ea qui laudantium totam officiis iste, quam
          nobis pariatur voluptatum. Ab quam fugit molestiae minus quisquam
          odit!
        </p>
        <img src="https://via.placeholder.com/200" alt="" />
      </article>
      <article class="card" :class="{ 'with-subgrid': subgrid }">
        <h3>Card 2</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          delectus?
        </p>
        <img src="https://via.placeholder.com/400" alt="" />
      </article>
      <article class="card" :class="{ 'with-subgrid': subgrid }">
        <h3>Card 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem
          quis quaerat tempore quo doloribus, illum ea eum fugit aliquid. Esse
          sint voluptas mollitia eligendi odit ex, repudiandae quidem blanditiis
          hic quis commodi, veritatis numquam at dolorum! Deleniti quos quas
          repellendus non suscipit cumque voluptates neque ad possimus, aperiam
          accusantium?
        </p>
        <img src="https://via.placeholder.com/300" alt="" />
      </article>
    </div>
    <p class="not-supported">Your browser does not support subgrid. :(</p>
  </section>
</template>

<script setup>
import { ref } from "vue";
let subgrid = ref(true);
function toggle() {
  subgrid.value = !subgrid.value;
}
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 10rem), 1fr));
  gap: var(--spacing-base);
}

.card {
  display: grid;
  gap: var(--spacing-base);
  grid-row: span 3;
  align-items: center;
  justify-items: center;

  border: 1px solid hsl(0 0% 30%);
  padding: var(--spacing-base);

  text-align: center;
}
.card.with-subgrid {
  grid-template-rows: subgrid;
}

@supports not (grid-template-rows: subgrid) {
  .supported {
    display: none;
  }
  .not-supported {
    display: revert;
  }
}
</style>
