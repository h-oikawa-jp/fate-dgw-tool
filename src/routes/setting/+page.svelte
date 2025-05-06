<script lang="ts" module>
  import { dev } from '$app/environment';
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import { Accordion, AccordionItem, Checkbox, Listgroup, Toggle } from 'flowbite-svelte';
  import { allServants, Saber, Lancer, Archer, Rider, Caster, Assassin, Berserker, Extra } from '$lib/domain/servant';
  import { Setting } from '$lib/domain/setting';

  onMount(() => {
    // サーヴァントIDが重複していないか確認
    const ids = allServants.map((s) => s.id);
    const uniqueIds = new Set(ids);
    if (ids.length !== uniqueIds.size) {
      console.error(
        '重複ID: ',
        ids.filter((id, index) => ids.indexOf(id) !== index)
      );

      if (dev) {
        alert('サーヴァントIDが重複しています。コンソールを確認してください。');
      }
    }
  });
</script>

<section class="title rounded-md border border-gray-200 bg-gray-50 p-3 shadow-md">
  <h1>ツール設定</h1>
</section>

<section class="settings m-4">
  <Accordion multiple>
    <AccordionItem open>
      {#snippet header()}クラス設定{/snippet}

      <Toggle class="toggle-btn" bind:checked={Setting.allowSameClassServant}>
        同クラスのサーヴァントの複数割り当てを許可する
      </Toggle>
    </AccordionItem>

    <AccordionItem open>
      {#snippet header()}サーヴァント設定{/snippet}
      <p class="text-sm text-gray-500">
        サーヴァント毎の割り当て可否を設定します。<br />
        チェックを外したサーヴァントはマスターに割り当てられません。
      </p>

      <article class="mt-4">
        <h2 class="text-lg font-bold">サーヴァント一覧</h2>

        <section class="mt-2">
          <h3 class="text-md font-bold">{Saber.Class.name}</h3>
          <Listgroup class="m-2 w-full">
            {#each Saber.servants as servant}
              {@const setting = Setting.getServantSetting(servant)}
              {@const servantId = servant.id.toString(16).padStart(4, '0')}
              <li class="p-3">
                <Checkbox id={'servant' + servantId} bind:checked={setting.enabled}>
                  {servant.name} (ID:{servantId})
                </Checkbox>
              </li>
            {/each}
          </Listgroup>
        </section>

        <section class="mt-2">
          <h3 class="text-md font-bold">{Lancer.Class.name}</h3>
          <Listgroup class="m-2 w-full">
            {#each Lancer.servants as servant}
              {@const setting = Setting.getServantSetting(servant)}
              {@const servantId = servant.id.toString(16).padStart(4, '0')}
              <li class="p-3">
                <Checkbox id={'servant' + servantId} bind:checked={setting.enabled}>
                  {servant.name} (ID:{servantId})
                </Checkbox>
              </li>
            {/each}
          </Listgroup>
        </section>

        <section class="mt-2">
          <h3 class="text-md font-bold">{Archer.Class.name}</h3>
          <Listgroup class="m-2 w-full">
            {#each Archer.servants as servant}
              {@const setting = Setting.getServantSetting(servant)}
              {@const servantId = servant.id.toString(16).padStart(4, '0')}
              <li class="p-3">
                <Checkbox id={'servant' + servantId} bind:checked={setting.enabled}>
                  {servant.name} (ID:{servantId})
                </Checkbox>
              </li>
            {/each}
          </Listgroup>
        </section>

        <section class="mt-2">
          <h3 class="text-md font-bold">{Rider.Class.name}</h3>
          <Listgroup class="m-2 w-full">
            {#each Rider.servants as servant}
              {@const setting = Setting.getServantSetting(servant)}
              {@const servantId = servant.id.toString(16).padStart(4, '0')}
              <li class="p-3">
                <Checkbox id={'servant' + servantId} bind:checked={setting.enabled}>
                  {servant.name} (ID:{servantId})
                </Checkbox>
              </li>
            {/each}
          </Listgroup>
        </section>

        <section class="mt-2">
          <h3 class="text-md font-bold">{Caster.Class.name}</h3>
          <Listgroup class="m-2 w-full">
            {#each Caster.servants as servant}
              {@const setting = Setting.getServantSetting(servant)}
              {@const servantId = servant.id.toString(16).padStart(4, '0')}
              <li class="p-3">
                <Checkbox id={'servant' + servantId} bind:checked={setting.enabled}>
                  {servant.name} (ID:{servantId})
                </Checkbox>
              </li>
            {/each}
          </Listgroup>
        </section>

        <section class="mt-2">
          <h3 class="text-md font-bold">{Assassin.Class.name}</h3>
          <Listgroup class="m-2 w-full">
            {#each Assassin.servants as servant}
              {@const setting = Setting.getServantSetting(servant)}
              {@const servantId = servant.id.toString(16).padStart(4, '0')}
              <li class="p-3">
                <Checkbox id={'servant' + servantId} bind:checked={setting.enabled}>
                  {servant.name} (ID:{servantId})
                </Checkbox>
              </li>
            {/each}
          </Listgroup>
        </section>

        <section class="mt-2">
          <h3 class="text-md font-bold">{Berserker.Class.name}</h3>
          <Listgroup class="m-2 w-full">
            {#each Berserker.servants as servant}
              {@const setting = Setting.getServantSetting(servant)}
              {@const servantId = servant.id.toString(16).padStart(4, '0')}
              <li class="p-3">
                <Checkbox id={'servant' + servantId} bind:checked={setting.enabled}>
                  {servant.name} (ID:{servantId})
                </Checkbox>
              </li>
            {/each}
          </Listgroup>
        </section>

        <section class="mt-2">
          <h3 class="text-md font-bold">{Extra.ClassAvenger.name}</h3>
          <Listgroup class="m-2 w-full">
            {#each Extra.servants as servant}
              {@const setting = Setting.getServantSetting(servant)}
              {@const servantId = servant.id.toString(16).padStart(4, '0')}
              <li class="p-3">
                <Checkbox id={'servant' + servantId} bind:checked={setting.enabled}>
                  {servant.name} (ID:{servantId})
                </Checkbox>
              </li>
            {/each}
          </Listgroup>
        </section>
      </article>
    </AccordionItem>
  </Accordion>
</section>

<style>
  .title {
    text-align: center;

    h1 {
      color: #333;
      font-size: 24px;
    }
  }
</style>
