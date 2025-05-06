<script>
  import 'github-markdown-css/github-markdown-light.css';
  import '../app.css';

  import Header from '$lib/components/Header.svelte';

  let { children } = $props();
  const year = new Date().getFullYear();
</script>

<div class="app">
  <Header />

  <main>
    {@render children()}
  </main>

  <footer>
    <p>
      © {year > 2025 ? '2025 - ' : ''}{year} Copyright <a href="https://github.com/h-oikawa-jp">h-oikawa-jp</a>, All
      rights reserved.
    </p>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
