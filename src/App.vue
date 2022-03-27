<template>
  <div class="content-wrapper">
    <header>
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/container-queries">Container Queries</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <h1>Future CSS</h1>
      <router-view />
    </main>
  </div>
</template>

<style>
.content-wrapper {
  max-inline-size: 75rem;
  margin-inline: auto;
  padding: 1rem;
}

header {
  padding-block: 1rem;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 1rem;
}

nav a {
  text-decoration: none;
}

h1 {
  margin-block-end: 2rem;
}
</style>
