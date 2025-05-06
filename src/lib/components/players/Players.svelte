<script lang="ts">
  import { onMount } from 'svelte';
  import { animateScroll } from 'svelte-scrollto-element';
  import { Alert, Input, Label, Button } from 'flowbite-svelte';
  import { InfoCircleSolid } from 'flowbite-svelte-icons';

  import type { Master, ServantClass, Servant } from '$lib/domain';
  import { allServantMap } from '$lib/domain/servant';
  import { Setting } from '$lib/domain/setting';

  import Counter from './Counter.svelte';
  import PlayerCard from './PlayerCard.svelte';

  // マスター人数
  let masterCounter: number = $state(7);

  // マスター情報を格納する配列
  let players: Master[] = $state([]);

  // 結果表示用の状態
  let showResults = $state(false);

  // マスター人数を変更する関数
  let onChangeCount = (n: number) => {
    masterCounter = n;
    showResults = false;

    // マスターの数を変更
    if (n < players.length) {
      players = players.slice(0, n);
    } else {
      // 新しいマスター名を追加
      players = [
        ...players,
        ...Array(n - players.length)
          .fill('')
          .map((_, i) => {
            return {
              name: `マスター${players.length + i + 1}`,
            } as Master;
          }),
      ];
    }
  };

  // マスター名の入力を処理する関数
  function handleNameChange(index: number, target: HTMLInputElement) {
    if (!players[index]) return;

    const value = target.value.trim();
    players[index].name = value || `マスター${index + 1}`;
  }

  // サーヴァントを割り当てる関数
  function assignServants() {
    const availableServants = Setting.servantSettings.filter((s) => s.enabled).map((s) => allServantMap[s.id]);
    const shuffled = availableServants.sort(() => Math.random() - 0.5);

    const usedServant: Set<Servant> = new Set();
    const usedServantClass: Set<ServantClass> = new Set();

    // 各マスターにサーヴァントを割り当てる
    players = players.map((player) => {
      const servant = shuffled.find((s) => {
        return !usedServant.has(s) && (Setting.allowSameClassServant || !usedServantClass.has(s.class));
      });

      if (servant) {
        usedServant.add(servant);
        usedServantClass.add(servant.class);
      }

      return {
        ...player,
        servant,
      };
    });

    showResults = true;

    // 結果エリアまでスクロール
    setTimeout(() => {
      animateScroll.scrollTo({ element: '#resultsArea' });
    }, 100);
  }

  onMount(() => {
    // 初期化処理
    onChangeCount(masterCounter);
  });
</script>

<div class="container">
  <div class="flex flex-col items-center">
    <Label>マスター人数</Label>
    <Counter initCount={masterCounter} onChange={onChangeCount} />
  </div>

  <div class="player-input-area rounded-md border border-gray-200 shadow-md">
    <Alert color="blue" class="mb-4">
      {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
      マスター名を入力してください (省略可)
    </Alert>

    <div class="player-input-grid">
      {#each players as player, i}
        <div class="player-input">
          <Label for="player{i + 1}">マスター{i + 1}:</Label>
          <Input
            type="text"
            id="player{i + 1}"
            placeholder="名前を入力"
            oninput={(e) => e.target && handleNameChange(i, e.target as HTMLInputElement)}
          />
        </div>
      {/each}
    </div>
  </div>

  <div class="button-area">
    <Button pill color="purple" onclick={assignServants}>
      {#if showResults}
        サーヴァントを再割り当て
      {:else}
        サーヴァントを割り当てる
      {/if}
    </Button>
  </div>

  {#if showResults}
    <div class="results-area rounded-md border border-gray-200 shadow-md" id="resultsArea">
      <div class="results-title text-center">サーヴァント割り当て結果</div>

      <Alert color="blue" class="mb-4">
        {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
        <span class="font-bold"> 各マスターは自分のサーヴァントだけを確認してください </span>
      </Alert>

      <div class="player-cards">
        {#each players as player}
          <PlayerCard {player} onChangeShow={console.info} />
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .player-input-area {
    padding: 20px;
    margin-bottom: 20px;

    .player-input-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    @media (max-width: 768px) {
      .player-input-grid {
        grid-template-columns: 1fr;
      }
    }
  }

  .button-area {
    text-align: center;
    margin: 20px 0;

    :global(button) {
      cursor: pointer;
    }
  }

  .results-area {
    padding: 20px;

    .results-title {
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: bold;
    }

    .player-cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
    @media (max-width: 768px) {
      .player-cards {
        grid-template-columns: 1fr;
      }
    }
  }
</style>
