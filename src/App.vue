<template>
  <div class="content-wrapper">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/cascade">Cascade Layers</router-link></li>
          <li><router-link to="/colors">Color Functions</router-link></li>
          <li><router-link to="/container">Container Queries</router-link></li>
          <li><router-link to="/has">Parent Selector</router-link></li>
          <li><router-link to="/lab">Lab Colors</router-link></li>
          <li><router-link to="/subgrid">Subgrid</router-link></li>
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
  max-inline-size: var(--container);
  margin-inline: auto;
  padding: var(--spacing-base);
}

header {
  padding-block: var(--spacing-base);
}

nav ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: var(--spacing-sm) var(--spacing-base);
}

nav a {
  text-decoration: none;
}

h1 {
  margin-block-end: var(--spacing-lg);
}
</style>
