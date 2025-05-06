<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  import notice from './notice.md?raw';
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<article class="markdown-body">
  <SvelteMarkdown source={notice} />
</article>

<style>
  /* nothing */
</style>
