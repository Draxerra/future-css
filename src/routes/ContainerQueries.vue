<template>
  <section id="container-queries" aria-labelledby="container-query-heading">
    <h2 id="container-query-heading">Container Queries</h2>
    <div class="cards">
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
    <p class="supports-not">
      Your browser does not support container queries. :(
    </p>
  </section>
</template>

<style>
#container-queries {
  container: inline-size;
  container-name: card-container;
}

#container-queries h2 {
  margin-block-end: 1rem;
}

.cards {
  display: grid;
  gap: 1rem;
  text-align: center;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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

.supports-not {
  display: none;
}

@supports not (container: inline-size) {
  .supports-not {
    display: revert;
  }
  .cards {
    display: none;
  }
}
</style>
