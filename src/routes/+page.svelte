<script lang="ts">
  import Players from '$lib/components/players/Players.svelte';
</script>

<svelte:head>
  <title>サーヴァント割り当てツール</title>
  <meta name="description" content="Fate DGW サーヴァント割り当てツール" />
</svelte:head>

<section class="title rounded-md border border-gray-200 bg-gray-50 p-3 shadow-md">
  <h1>聖杯戦争 サーヴァント割り当てツール</h1>
</section>

<section class="main">
  <Players />
</section>

<style>
  .title {
    text-align: center;

    h1 {
      color: #333;
      font-size: 24px;
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }
</style>
