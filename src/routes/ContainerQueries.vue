<template>
  <section id="container-queries" aria-labelledby="container-query-heading">
    <h2 id="container-query-heading">Container Queries</h2>
    <div class="cards supported">
      <article class="card">
        <h3>Card 1</h3>
        <img src="https://via.placeholder.com/300" alt="" />
      </article>
      <article class="card">
        <h3>Card 2</h3>
        <img src="https://via.placeholder.com/300" alt="" />
      </article>
      <article class="card">
        <h3>Card 3</h3>
        <img src="https://via.placeholder.com/300" alt="" />
      </article>
    </div>
    <p class="not-supported">
      Your browser does not support container queries. :(
    </p>
  </section>
</template>

<style scoped>
#container-queries {
  container: inline-size;
  container-name: card-container;
}

.cards {
  display: grid;
  gap: var(--spacing-base);
  text-align: center;
}

.card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

@container card-container (width > 20em) {
  .cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@container card-container (width > 40em) {
  .cards {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    text-align: start;
  }
}

@supports not (container: inline-size) {
  .supported {
    display: none;
  }
  .not-supported {
    display: revert;
  }
}
</style>
