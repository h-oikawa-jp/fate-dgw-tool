<script lang="ts">
  import { Alert, Card, Toggle } from 'flowbite-svelte';
  import { ExclamationCircleSolid } from 'flowbite-svelte-icons';

  import ShareButton from '$lib/components/ShareButton.svelte';

  let { player, onChangeShow } = $props();

  let isShow = $state(false);
</script>

<Card size="lg" class="flex flex-col gap-4 p-4">
  <div class="font-bold tracking-tight italic">{player.name}</div>

  {#if player.servant}
    {@const link = player.servant.url}
    {@const servantId = player.servant.id.toString(16).padStart(4, '0')}

    <Toggle class="toggle-btn" bind:checked={isShow} onchange={() => onChangeShow(player, isShow)}>
      {#if isShow}隠す{:else}表示{/if}
    </Toggle>

    {#if isShow}
      <Alert color="cyan" class="text-blue-300">
        <p>クラス: {player.servant.class.name}</p>
        <p>サーヴァントID: [{servantId}]</p>

        <p class="mt-2 text-xl font-bold italic">
          {#if link}
            <a href={link} target="_blank" class="hover:underline">
              {player.servant.name}
            </a>
          {:else}
            {player.servant.name}
          {/if}
        </p>
      </Alert>
    {/if}

    {@const shareData = {
      title: `${player.name}のサーヴァント`,
      text: `クラス: ${player.servant.class.name}\nサーヴァントID: [${servantId}]\n${player.servant.name}\n\n${link}`,
    }}
    <ShareButton {...shareData} />
  {:else}
    <Alert color="orange">
      {#snippet icon()}<ExclamationCircleSolid class="h-5 w-5" />{/snippet}
      <span class="font-bold">割り当て可能なサーヴァントが不足しています</span>
    </Alert>
  {/if}
</Card>

<style>
  :global(button) {
    cursor: pointer;
  }
  :global(.toggle-btn) {
    width: fit-content;
  }
</style>
