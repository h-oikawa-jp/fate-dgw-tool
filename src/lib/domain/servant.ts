export type ServantClass = {
  name: string;
  id: number;
};

export type Servant = {
  id: number;
  name: string;
  class: ServantClass;
  url: string;
};

/* Generate unique IDs based on name and class */
const makeServantId = (servantName: string, servantClass: ServantClass) => {
  const hash = servantName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return (hash & 0x00ff) + (0xffff >> servantClass.id);
};

export namespace Saber {
  export const Class: ServantClass = {
    id: 1,
    name: 'セイバー',
  };

  // prettier-ignore
  export const servants: Servant[] = [
    { name: 'アルトリア・ペンドラゴン', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/223402' },
    { name: 'ネロ・クラウディウス', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/223450' },
    { name: 'ガウェイン', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/223610' },
    { name: '沖田総司', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/223636' },
    { name: 'イアソン', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/223755' },
    { name: 'シグルド', url: 'https://publish.obsidian.md/fate-dgw-ex/%E3%82%B5%E3%83%BC%E3%83%B4%E3%82%A1%E3%83%B3%E3%83%88/%E3%82%BB%E3%82%A4%E3%83%90%E3%83%BC/%E3%82%B7%E3%82%B0%E3%83%AB%E3%83%89' },
  ].map((servant) => ({
    ...servant,
    id: makeServantId(servant.name, Class),
    class: Class,
  }));
}

export namespace Lancer {
  export const Class: ServantClass = {
    id: 2,
    name: 'ランサー',
  };

  // prettier-ignore
  export const servants: Servant[] = [
    { name: 'クー・フーリン', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/225133' },
    { name: 'ディルムッド・オディナ', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/225212' },
    { name: 'エリザベート・バートリー', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/225240' },
    { name: '李書文', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/225306' },
    { name: 'エルキドゥ', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/225508' },
  ].map((servant) => ({
    ...servant,
    id: makeServantId(servant.name, Class),
    class: Class,
  }));
}

export namespace Archer {
  export const Class: ServantClass = {
    id: 3,
    name: 'アーチャー',
  };

  // prettier-ignore
  export const servants: Servant[] = [
    { name: 'エミヤ', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/224707' },
    { name: 'ギルガメッシュ', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/224757' },
    { name: 'ロビンフッド', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/224818' },
    { name: 'ケイローン', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/224834' },
    { name: '織田信長', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/224851' },
  ].map((servant) => ({
    ...servant,
    id: makeServantId(servant.name, Class),
    class: Class,
  }));
}

export namespace Rider {
  export const Class: ServantClass = {
    id: 4,
    name: 'ライダー',
  };

  // prettier-ignore
  export const servants: Servant[] = [
    { name: 'メドゥーサ', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/230630' },
    { name: 'イスカンダル', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/230648' },
    { name: 'フランシス・ドレイク', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/230720' },
    { name: 'アストルフォ', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/230819' },
    { name: 'アキレウス', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/230841' },
  ].map((servant) => ({
    ...servant,
    id: makeServantId(servant.name, Class),
    class: Class,
  }));
}

export namespace Caster {
  export const Class: ServantClass = {
    id: 5,
    name: 'キャスター',
  };

  // prettier-ignore
  export const servants: Servant[] = [
    { name: 'メディア', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/231207' },
    { name: 'ジル・ド・レェ', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/231234' },
    { name: '玉藻前', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/231413' },
    { name: 'ナーサリー・ライム', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/231451' },
    { name: 'クー・フーリン', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/231644' },
  ].map((servant) => ({
    ...servant,
    id: makeServantId(servant.name, Class),
    class: Class,
  }));
}

export namespace Assassin {
  export const Class: ServantClass = {
    id: 6,
    name: 'アサシン',
  };

  // prettier-ignore
  export const servants: Servant[] = [
    { name: '佐々木小次郎', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/232303' },
    { name: 'ハサン・サッバーハ（呪腕）', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/232417' },
    { name: 'ジャック・ザ・リッパー', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/232447' },
    { name: 'ハサン・サッバーハ（静謐）', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/232514' },
    { name: 'シャルロット・コルデー', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/232537' },
  ].map((servant) => ({
    ...servant,
    id: makeServantId(servant.name, Class),
    class: Class,
  }));
}

export namespace Berserker {
  export const Class: ServantClass = {
    id: 7,
    name: 'バーサーカー',
  };

  // prettier-ignore
  export const servants: Servant[] = [
    { name: 'ヘラクレス', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/232845' },
    { name: 'ランスロット', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/232915' },
    { name: 'フランケンシュタイン', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/232938' },
    { name: 'ヘンリージキル＆ハイド', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/233006' },
    { name: '清姫', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/233035' },
  ].map((servant) => ({
    ...servant,
    id: makeServantId(servant.name, Class),
    class: Class,
  }));
}

export namespace Extra {
  export const ClassAvenger: ServantClass = {
    id: 8,
    name: 'アヴェンジャー',
  };

  // prettier-ignore
  export const servants: Servant[] = [
    { class: ClassAvenger, name: 'アンリマユ', url: 'https://adriaticq.hatenablog.com/entry/2023/08/24/233116' },
  ].map((servant) => ({
    ...servant,
    id: makeServantId(servant.name, servant.class),
  }));
}

export const allServantClasses: ServantClass[] = [
  Saber.Class,
  Archer.Class,
  Lancer.Class,
  Rider.Class,
  Caster.Class,
  Assassin.Class,
  Berserker.Class,
  Extra.ClassAvenger,
];

export const allServants: Servant[] = [
  ...Saber.servants,
  ...Archer.servants,
  ...Lancer.servants,
  ...Rider.servants,
  ...Caster.servants,
  ...Assassin.servants,
  ...Berserker.servants,
  ...Extra.servants,
];

export const allServantMap: Record<Servant['id'], Servant> = allServants.reduce(
  (acc, servant) => {
    acc[servant.id] = servant;
    return acc;
  },
  {} as Record<Servant['id'], Servant>
);
