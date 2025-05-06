<script lang="ts">
  import { Button } from 'flowbite-svelte';

  let {
    title,
    text,
  }: {
    /** Share message title. */
    title?: string;
    /** Text to share. */
    text: string;
  } = $props();

  let copied = $state(false);

  async function share() {
    const shareData: ShareData = { title, text };
    if (navigator.canShare && navigator.canShare(shareData)) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(`<${title}>\n\n${text}`);
      copied = true;

      setTimeout(() => {
        copied = false;
      }, 1000);
    }
  }
</script>

<Button pill color="cyan" onclick={share}>
  {#if copied}
    クリップボードにコピーしました
  {:else}
    SNSなどで送る
  {/if}
</Button>
