// ============================================
// Categorized sound events with JP/EN names
// ============================================
const SOUND_EVENTS = {
    'プレイヤー (Player)': [
        { id: 'entity.player.hurt',        ja: 'ダメージ時',           en: 'player.hurt' },
        { id: 'entity.player.death',       ja: '死亡時',               en: 'player.death' },
        { id: 'entity.player.levelup',     ja: 'レベルアップ',         en: 'player.levelup' },
        { id: 'entity.player.breath.hurt', ja: '酸素ダメージ',         en: 'breath.hurt' },
        { id: 'entity.player.breath.bubble', ja: '泡が弾ける音',       en: 'breath.bubble' },
        { id: 'entity.player.attack.crit',  ja: 'クリティカル攻撃',    en: 'attack.crit' },
        { id: 'entity.player.attack.knockback', ja: 'ノックバック攻撃', en: 'attack.knockback' },
        { id: 'entity.player.attack.strong', ja: '溜め攻撃',           en: 'attack.strong' },
        { id: 'entity.player.attack.sweep', ja: 'スイープ攻撃',        en: 'attack.sweep' },
        { id: 'entity.player.attack.weak',  ja: '弱攻撃',             en: 'attack.weak' },
        { id: 'entity.player.swim',         ja: '水泳',               en: 'swim' },
        { id: 'entity.player.splash',       ja: '水に飛び込む',        en: 'splash' },
        { id: 'entity.player.drown',        ja: '溺れる',             en: 'drown' },
        { id: 'entity.player.burn',         ja: '炎上',               en: 'burn' },
        { id: 'entity.player.deepsleep',    ja: '深層入眠',           en: 'deepsleep' },
        { id: 'entity.player.wakeup',       ja: '起床',               en: 'wakeup' },
    ],
    'モブ (Mob)': [
        { id: 'entity.zombie.ambient',      ja: 'ゾンビ',             en: 'zombie.ambient' },
        { id: 'entity.zombie.hurt',         ja: 'ゾンビダメージ',      en: 'zombie.hurt' },
        { id: 'entity.zombie.death',        ja: 'ゾンビ死亡',          en: 'zombie.death' },
        { id: 'entity.skeleton.ambient',    ja: 'スケルトン',          en: 'skeleton.ambient' },
        { id: 'entity.skeleton.hurt',       ja: 'スケルトンダメージ',   en: 'skeleton.hurt' },
        { id: 'entity.skeleton.death',      ja: 'スケルトン死亡',      en: 'skeleton.death' },
        { id: 'entity.creeper.primed',      ja: 'クリーパー起動',      en: 'creeper.primed' },
        { id: 'entity.creeper.death',       ja: 'クリーパー死亡',      en: 'creeper.death' },
        { id: 'entity.spider.ambient',      ja: 'スパイダー',          en: 'spider.ambient' },
        { id: 'entity.spider.hurt',         ja: 'スパイダーダメージ',   en: 'spider.hurt' },
        { id: 'entity.spider.death',        ja: 'スパイダー死亡',      en: 'spider.death' },
        { id: 'entity.enderman.ambient',    ja: 'エンダーマン',        en: 'enderman.ambient' },
        { id: 'entity.enderman.scream',     ja: 'エンダーマン叫び',    en: 'enderman.scream' },
        { id: 'entity.enderman.hurt',       ja: 'エンダーマンダメージ', en: 'enderman.hurt' },
        { id: 'entity.enderman.death',      ja: 'エンダーマン死亡',    en: 'enderman.death' },
        { id: 'entity.wolf.ambient',        ja: 'オオカミ',           en: 'wolf.ambient' },
        { id: 'entity.wolf.hurt',           ja: 'オオカミダメージ',    en: 'wolf.hurt' },
        { id: 'entity.wolf.death',          ja: 'オオカミ死亡',        en: 'wolf.death' },
        { id: 'entity.wolf.whine',          ja: 'オオカミ鳴き声',      en: 'wolf.whine' },
        { id: 'entity.cat.ambient',         ja: 'ネコ',              en: 'cat.ambient' },
        { id: 'entity.cat.purr',            ja: 'ネコゴロゴロ',        en: 'cat.purr' },
        { id: 'entity.cat.hurt',            ja: 'ネコダメージ',        en: 'cat.hurt' },
        { id: 'entity.villager.ambient',    ja: '村人',              en: 'villager.ambient' },
        { id: 'entity.villager.yes',        ja: '村人「はい」',        en: 'villager.yes' },
        { id: 'entity.villager.no',         ja: '村人「いいえ」',      en: 'villager.no' },
        { id: 'entity.villager.trade',      ja: '村人取引',           en: 'villager.trade' },
        { id: 'entity.pig.ambient',         ja: 'ブタ',              en: 'pig.ambient' },
        { id: 'entity.pig.death',           ja: 'ブタ死亡',           en: 'pig.death' },
        { id: 'entity.cow.ambient',         ja: 'ウシ',              en: 'cow.ambient' },
        { id: 'entity.cow.death',           ja: 'ウシ死亡',           en: 'cow.death' },
        { id: 'entity.sheep.ambient',       ja: 'ヒツジ',             en: 'sheep.ambient' },
        { id: 'entity.sheep.death',         ja: 'ヒツジ死亡',          en: 'sheep.death' },
        { id: 'entity.chicken.ambient',     ja: 'ニワトリ',           en: 'chicken.ambient' },
        { id: 'entity.chicken.death',       ja: 'ニワトリ死亡',        en: 'chicken.death' },
    ],
    '爆発・破壊 (Explosion/Destruction)': [
        { id: 'entity.generic.explode',     ja: '爆発',              en: 'generic.explode' },
        { id: 'entity.tnt.primed',          ja: 'TNT起動',           en: 'tnt.primed' },
        { id: 'entity.arrow.hit_player',    ja: '矢が当たる',          en: 'arrow.hit_player' },
        { id: 'entity.arrow.hit',           ja: '矢がブロックに当たる', en: 'arrow.hit' },
        { id: 'entity.arrow.shoot',         ja: '矢を放つ',           en: 'arrow.shoot' },
        { id: 'entity.firework_rocket.blast', ja: '花火',             en: 'firework_rocket.blast' },
        { id: 'entity.firework_rocket.large_blast', ja: '花火大音量',  en: 'firework_rocket.large_blast' },
        { id: 'entity.firework_rocket.shoot', ja: '花火発射',          en: 'firework_rocket.shoot' },
        { id: 'entity.wither.death',        ja: 'ウィザー死亡',        en: 'wither.death' },
        { id: 'entity.wither.hurt',         ja: 'ウィザーダメージ',     en: 'wither.hurt' },
        { id: 'entity.wither.spawn',        ja: 'ウィザー出現',        en: 'wither.spawn' },
        { id: 'entity.dragon.fireball.explode', ja: 'ドラゴン火炎弾',  en: 'dragon.fireball.explode' },
        { id: 'entity.dragon.death',        ja: 'ドラゴン死亡',        en: 'dragon.death' },
        { id: 'entity.dragon.growl',        ja: 'ドラゴン咆哮',        en: 'dragon.growl' },
        { id: 'entity.lightning_bolt.thunder', ja: '雷鳴',            en: 'lightning_bolt.thunder' },
    ],
    'ブロック (Block)': [
        { id: 'block.stone.break',          ja: '石 破壊',            en: 'stone.break' },
        { id: 'block.stone.hit',            ja: '石 当たり',           en: 'stone.hit' },
        { id: 'block.stone.place',          ja: '石 配置',            en: 'stone.place' },
        { id: 'block.stone.step',           ja: '石 足音',            en: 'stone.step' },
        { id: 'block.wood.break',           ja: '木 破壊',            en: 'wood.break' },
        { id: 'block.wood.hit',             ja: '木 当たり',           en: 'wood.hit' },
        { id: 'block.wood.place',           ja: '木 配置',            en: 'wood.place' },
        { id: 'block.wood.step',            ja: '木 足音',            en: 'wood.step' },
        { id: 'block.grass.break',          ja: '草 破壊',            en: 'grass.break' },
        { id: 'block.grass.hit',            ja: '草 当たり',           en: 'grass.hit' },
        { id: 'block.grass.place',          ja: '草 配置',            en: 'grass.place' },
        { id: 'block.grass.step',           ja: '草 足音',            en: 'grass.step' },
        { id: 'block.sand.break',           ja: '砂 破壊',            en: 'sand.break' },
        { id: 'block.sand.hit',             ja: '砂 当たり',           en: 'sand.hit' },
        { id: 'block.sand.place',           ja: '砂 配置',            en: 'sand.place' },
        { id: 'block.sand.step',            ja: '砂 足音',            en: 'sand.step' },
        { id: 'block.glass.break',          ja: 'ガラス 破壊',         en: 'glass.break' },
        { id: 'block.glass.hit',            ja: 'ガラス 当たり',        en: 'glass.hit' },
        { id: 'block.glass.place',          ja: 'ガラス 配置',         en: 'glass.place' },
        { id: 'block.anvil.place',          ja: '金床 配置',           en: 'anvil.place' },
        { id: 'block.anvil.hit',            ja: '金床 当たり',          en: 'anvil.hit' },
        { id: 'block.anvil.land',           ja: '金床 落下',           en: 'anvil.land' },
        { id: 'block.water.ambient',        ja: '水 音',             en: 'water.ambient' },
        { id: 'block.water.lava.ambient',   ja: '溶岩 音',            en: 'water.lava.ambient' },
        { id: 'block.fire.ambient',         ja: '炎 音',             en: 'fire.ambient' },
        { id: 'block.enchanting_table.use', ja: 'エンチャット',        en: 'enchanting_table.use' },
        { id: 'block.brewing_stand.brew',   ja: 'ポーション醸造',      en: 'brewing_stand.brew' },
        { id: 'block.chest.open',           ja: 'チェスト開ける',       en: 'chest.open' },
        { id: 'block.chest.close',          ja: 'チェスト閉める',       en: 'chest.close' },
        { id: 'block.shulker_box.open',     ja: 'シュルカーボックス開', en: 'shulker_box.open' },
        { id: 'block.shulker_box.close',    ja: 'シュルカーボックス閉', en: 'shulker_box.close' },
        { id: 'block.piston.extend',        ja: 'ピストン伸縮',        en: 'piston.extend' },
        { id: 'block.piston.contract',      ja: 'ピストン収縮',        en: 'piston.contract' },
        { id: 'block.redstone_torch.burnout', ja: 'レッドストーントーチ燃焼', en: 'redstone_torch.burnout' },
    ],
    '環境 (Environment)': [
        { id: 'ambient.weather.thunder',    ja: '雷',                en: 'weather.thunder' },
        { id: 'ambient.weather.rain',       ja: '雨',                en: 'weather.rain' },
        { id: 'ambient.weather.rain.above', ja: '雨（上空）',          en: 'weather.rain.above' },
        { id: 'ambient.cave',               ja: '洞窟',              en: 'cave' },
        { id: 'ambient.underwater',         ja: '水中',              en: 'underwater' },
        { id: 'ambient.underwater.loop',    ja: '水中ループ',          en: 'underwater.loop' },
        { id: 'ambient.basalt_deltas.loop', ja: '玄武岩デルタ',        en: 'basalt_deltas.loop' },
        { id: 'ambient.crimson_forest.loop', ja: '绯紅の森',          en: 'crimson_forest.loop' },
        { id: 'ambient.nether_wastes.loop', ja: 'ネザーワイスト',      en: 'nether_wastes.loop' },
        { id: 'ambient.soul_sand_valley.loop', ja: 'ソウルサンド渓谷', en: 'soul_sand_valley.loop' },
        { id: 'ambient.warped_forest.loop', ja: '歪んだ森',           en: 'warped_forest.loop' },
        { id: 'ambient.end_cave.loop',      ja: 'エンダー洞窟',        en: 'end_cave.loop' },
        { id: 'ambient.end_gateway.spawn',  ja: 'エンダー門',          en: 'end_gateway.spawn' },
    ],
    'UI': [
        { id: 'ui.button.click',            ja: 'ボタンクリック',      en: 'button.click' },
        { id: 'ui.toast.in',                ja: '通知表示',            en: 'toast.in' },
        { id: 'ui.toast.out',               ja: '通知消去',            en: 'toast.out' },
        { id: 'ui.stonecutter.select',      ja: 'stonecutter選択',     en: 'stonecutter.select' },
        { id: 'ui.loom.select_pattern',     ja: 'loom模様選択',        en: 'loom.select_pattern' },
        { id: 'ui.loom.take_result',        ja: 'loom結果取得',        en: 'loom.take_result' },
    ],
    'アイテム (Item)': [
        { id: 'entity.experience_orb.pickup', ja: '経験値取得',        en: 'experience_orb.pickup' },
        { id: 'entity.item.pickup',          ja: 'アイテム取得',       en: 'item.pickup' },
        { id: 'entity.item.throw',           ja: 'アイテム投げ',       en: 'item.throw' },
        { id: 'item.eat.egg',               ja: '卵',               en: 'eat.egg' },
        { id: 'item.axe.wax_off',           ja: '斧でワックス除去',    en: 'axe.wax_off' },
        { id: 'item.hoe.till',              ja: '鍬で耕す',           en: 'hoe.till' },
        { id: 'item.shovel.flatten',        ja: 'シャベルで整地',      en: 'shovel.flatten' },
        { id: 'item.spyglass.use',          ja: '双眼鏡',            en: 'spyglass.use' },
        { id: 'item.totem.use',             ja: 'トーテム',           en: 'totem.use' },
        { id: 'item.bucket.empty',          ja: 'バケツ空',           en: 'bucket.empty' },
        { id: 'item.bucket.fill',           ja: 'バケツ満杯',          en: 'bucket.fill' },
    ],
    'エンチャント・ポーション (Enchant/Potion)': [
        { id: 'enchant.thorns.hit',         ja: '棘の鎧ダメージ',      en: 'thorns.hit' },
        { id: 'enchant.trident.hit',        ja: '三叉槍攻撃',          en: 'trident.hit' },
        { id: 'enchant.trident.riptide_1',  ja: 'ライピット1',        en: 'trident.riptide_1' },
        { id: 'enchant.trident.riptide_2',  ja: 'ライピット2',        en: 'trident.riptide_2' },
        { id: 'enchant.trident.riptide_3',  ja: 'ライピット3',        en: 'trident.riptide_3' },
        { id: 'enchant.trident.return',     ja: '三叉槍帰還',          en: 'trident.return' },
        { id: 'enchant.trident.thunder',    ja: '三叉槍雷撃',          en: 'trident.thunder' },
        { id: 'entity.potion.splash',       ja: 'ポーション投げ',      en: 'potion.splash' },
        { id: 'entity.potion.break',        ja: 'ポーション割れる',     en: 'potion.break' },
    ],
};

// ============================================
// Helpers
// ============================================
function sanitizeName(name) {
    return name.replace(/[^a-zA-Z0-9_\-./]/g, '_').replace(/\.+/g, '.');
}

function getDisplayLabel(event, useJapanese) {
    return useJapanese ? event.ja : event.en;
}

function isJapaneseMode() {
    return document.getElementById('langToggle').checked;
}

// ============================================
// WAV encoder
// ============================================
function audioBufferToWav(buffer) {
    const numChannels = buffer.numberOfChannels;
    const sampleRate = buffer.sampleRate;
    const format = 1;
    const bitDepth = 16;
    const samples = buffer.getChannelData(0);
    const dataLength = samples.length * (bitDepth / 8);
    const headerLength = 44;
    const totalLength = headerLength + dataLength;
    const arrayBuffer = new ArrayBuffer(totalLength);
    const view = new DataView(arrayBuffer);

    writeString(view, 0, 'RIFF');
    view.setUint32(4, totalLength - 8, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, format, true);
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * numChannels * (bitDepth / 8), true);
    view.setUint16(32, numChannels * (bitDepth / 8), true);
    view.setUint16(34, bitDepth, true);
    writeString(view, 36, 'data');
    view.setUint32(40, dataLength, true);

    let offset = 44;
    for (let i = 0; i < samples.length; i++) {
        const s = Math.max(-1, Math.min(1, samples[i]));
        view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        offset += 2;
    }
    return new Blob([arrayBuffer], { type: 'audio/wav' });
}

function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
    }
}

// ============================================
// Audio fetching
// ============================================
async function fetchAudio(url, useProxy, proxyUrl) {
    let finalUrl = url;
    if (useProxy && proxyUrl) {
        if (proxyUrl.includes('?')) {
            finalUrl = proxyUrl + encodeURIComponent(url);
        } else {
            finalUrl = proxyUrl.replace(/\/$/, '') + '/' + url.replace(/^https?:\/\//, '');
        }
    }
    const response = await fetch(finalUrl, { mode: 'cors' });
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    return await response.blob();
}

async function decodeAudio(blob) {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const arrayBuffer = await blob.arrayBuffer();
    return await ctx.decodeAudioData(arrayBuffer);
}

// ============================================
// Pack icon
// ============================================
function generatePackIcon() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(0, 0, 64, 64);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('MEME', 32, 32);
    return new Promise(resolve => {
        canvas.toBlob(blob => resolve(blob), 'image/png');
    });
}

// ============================================
// Row management
// ============================================
function buildEventSelect() {
    const select = document.createElement('select');
    const useJP = isJapaneseMode();

    const emptyOpt = document.createElement('option');
    emptyOpt.value = '';
    emptyOpt.textContent = '-- 選択 --';
    select.appendChild(emptyOpt);

    for (const [category, events] of Object.entries(SOUND_EVENTS)) {
        const group = document.createElement('optgroup');
        group.label = category;
        events.forEach(ev => {
            const opt = document.createElement('option');
            opt.value = ev.id;
            opt.textContent = `${ev.id} (${getDisplayLabel(ev, useJP)})`;
            group.appendChild(opt);
        });
        select.appendChild(group);
    }
    return select;
}

function createRow(eventName = '') {
    const tbody = document.querySelector('#mappingTable tbody');
    const tr = document.createElement('tr');

    // Event column
    const tdEvent = document.createElement('td');
    const select = buildEventSelect();
    if (eventName) select.value = eventName;
    tdEvent.appendChild(select);

    // Source column
    const tdSource = document.createElement('td');
    const sourceSelect = document.createElement('select');
    sourceSelect.className = 'source-toggle';
    ['URL', 'File'].forEach(s => {
        const opt = document.createElement('option');
        opt.value = s;
        opt.textContent = s;
        sourceSelect.appendChild(opt);
    });
    const urlInput = document.createElement('input');
    urlInput.type = 'text';
    urlInput.placeholder = 'https://example.com/sound.mp3';
    urlInput.style.width = '300px';
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'audio/*';
    fileInput.style.display = 'none';

    sourceSelect.addEventListener('change', () => {
        urlInput.style.display = sourceSelect.value === 'URL' ? '' : 'none';
        fileInput.style.display = sourceSelect.value === 'File' ? '' : 'none';
    });
    tdSource.appendChild(sourceSelect);
    tdSource.appendChild(urlInput);
    tdSource.appendChild(fileInput);

    // Action column
    const tdAction = document.createElement('td');
    const previewBtn = document.createElement('button');
    previewBtn.textContent = '▶';
    previewBtn.className = 'btn';
    previewBtn.addEventListener('click', async () => {
        try {
            const useProxy = document.getElementById('useProxy').checked;
            const proxyUrl = document.getElementById('proxyUrl').value;
            let blob;
            if (sourceSelect.value === 'URL') {
                if (!urlInput.value) { alert('URLを入力してください'); return; }
                blob = await fetchAudio(urlInput.value, useProxy, proxyUrl);
            } else {
                if (!fileInput.files[0]) { alert('ファイルを選択してください'); return; }
                blob = fileInput.files[0];
            }
            const audioBuffer = await decodeAudio(blob);
            const wavBlob = audioBufferToWav(audioBuffer);
            const audioUrl = URL.createObjectURL(wavBlob);
            const audio = new Audio(audioUrl);
            audio.play();
        } catch (e) {
            alert('プレビューエラー: ' + e.message);
        }
    });
    const removeBtn = document.createElement('button');
    removeBtn.textContent = '✕';
    removeBtn.className = 'btn';
    removeBtn.addEventListener('click', () => tr.remove());
    tdAction.appendChild(previewBtn);
    tdAction.appendChild(removeBtn);

    tr.appendChild(tdEvent);
    tr.appendChild(tdSource);
    tr.appendChild(tdAction);
    tbody.appendChild(tr);
}

// ============================================
// Language toggle handler
// ============================================
function refreshAllSelects() {
    const selects = document.querySelectorAll('#mappingTable tbody tr td:first-child select');
    selects.forEach(select => {
        const currentValue = select.value;
        const newSelect = buildEventSelect();
        newSelect.value = currentValue;
        select.parentNode.replaceChild(newSelect, select);
    });
}

// ============================================
// Generate pack
// ============================================
async function generatePack() {
    const packName = document.getElementById('packName').value || 'Meme Resource Pack';
    const packDesc = document.getElementById('packDesc').value || '';
    const packFormat = parseInt(document.getElementById('mcVersion').value);
    const useProxy = document.getElementById('useProxy').checked;
    const proxyUrl = document.getElementById('proxyUrl').value;

    const rows = document.querySelectorAll('#mappingTable tbody tr');
    if (rows.length === 0) { alert('サウンドマッピングがありません'); return; }

    const entries = [];
    const eventNames = new Set();
    let hasDuplicate = false;

    rows.forEach((tr, index) => {
        const select = tr.querySelector('td:first-child select');
        const eventName = select.value;
        if (!eventName) return;

        if (eventNames.has(eventName)) hasDuplicate = true;
        eventNames.add(eventName);

        const sourceSelect = tr.querySelector('.source-toggle');
        const urlInput = tr.querySelector('td:nth-child(2) input[type="text"]');
        const fileInput = tr.querySelector('td:nth-child(2) input[type="file"]');

        entries.push({
            index, eventName,
            sourceType: sourceSelect.value,
            url: urlInput.value,
            file: fileInput.files[0]
        });
    });

    if (entries.length === 0) { alert('有効なサウンドマッピングがありません'); return; }
    if (hasDuplicate) {
        if (!confirm('重複したイベント名があります。後から登録したもので上書きされます。続行しますか？')) return;
    }

    const btn = document.getElementById('generateBtn');
    btn.disabled = true;
    btn.textContent = '生成中...';

    try {
        const zip = new JSZip();
        const soundsJson = {};
        const errors = [];

        for (const entry of entries) {
            try {
                let blob;
                if (entry.sourceType === 'URL') {
                    if (!entry.url) throw new Error('URLが空です');
                    blob = await fetchAudio(entry.url, useProxy, proxyUrl);
                } else {
                    if (!entry.file) throw new Error('ファイルが選択されていません');
                    blob = entry.file;
                }

                const audioBuffer = await decodeAudio(blob);
                const wavBlob = audioBufferToWav(audioBuffer);
                const wavArrayBuffer = await wavBlob.arrayBuffer();

                const safeName = sanitizeName(entry.eventName);
                zip.file(`assets/minecraft/sounds/meme/${safeName}.wav`, wavArrayBuffer);

                soundsJson[entry.eventName] = {
                    replace: true,
                    sounds: [{ name: `minecraft:meme/${safeName}`, volume: 1.0, pitch: 1.0 }]
                };
            } catch (e) {
                errors.push(`行 ${entry.index + 1} (${entry.eventName}): ${e.message}`);
            }
        }

        if (Object.keys(soundsJson).length === 0) {
            throw new Error('正常に処理できたサウンドがありません\n' + errors.join('\n'));
        }

        zip.file('pack.mcmeta', JSON.stringify({
            pack: { pack_format: packFormat, description: packDesc }
        }, null, 2));
        zip.file('assets/minecraft/sounds.json', JSON.stringify(soundsJson, null, 2));

        const packIcon = await generatePackIcon();
        zip.file('pack.png', packIcon);

        const content = await zip.generateAsync({ type: 'blob' });
        saveAs(content, `${packName.replace(/[^a-zA-Z0-9_-]/g, '_')}.zip`);

        if (errors.length > 0) {
            alert('一部のサウンドでエラーが発生しました:\n' + errors.join('\n'));
        }
    } catch (e) {
        alert('生成エラー: ' + e.message);
    } finally {
        btn.disabled = false;
        btn.textContent = 'リソースパックを生成して保存';
    }
}

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addRowBtn').addEventListener('click', () => createRow());
    document.getElementById('generateBtn').addEventListener('click', generatePack);
    document.getElementById('langToggle').addEventListener('change', refreshAllSelects);
    createRow();
});
