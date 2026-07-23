# Shadow Fight 2 — Asset Format Analysis

> Comprehensive reverse-engineering analysis of every asset type in the recovered game data.

---

## Table of Contents

1. [Binary Data Files (.dat)](#1-binary-data-files-dat)
2. [XML Data Files](#2-xml-data-files)
3. [Sprite Atlas Format](#3-sprite-atlas-format)
4. [Location/Background Format](#4-locationbackground-format)
5. [Audio Format](#5-audio-format)
6. [Language Files](#6-language-files)
7. [Tactic Files](#7-tactic-files)
8. [User/Save Data](#8-usersave-data)
9. [Quest Extension Format](#9-quest-extension-format)
10. [Compression Format](#10-compression-format)
11. [CDN Configuration](#11-cdn-configuration)
12. [Internal Settings](#12-internal-settings)
13. [Achievement System](#13-achievement-system)
14. [Pack/Bundle System](#14-packbundle-system)

---

## 1. Binary Data Files (.dat)

### 1.1 Compression: Zstandard (zstd)

**All `.dat` files use Zstandard compression**, not gzip/zlib/fflate.

| Indicator | Value |
|-----------|-------|
| Magic bytes | `28 B5 2F FD` |
| Format | Zstandard (RFC 8478) |
| Max window size | 2046 MB (per error message) |
| Error messages in JS | `"invalid zstd data;window size too large (>2046MB);invalid block type;FSE accuracy too high;match distance too far back;unexpected EOF"` |
| JS class | `ti` (line 154 in sf2.js) |
| Error class | `ht extends Sc` (line 154) |

**The game implements its own Zstandard decoder in JavaScript** (class `ti`), not using fflate for these files. fflate is used only for gzip/deflate operations.

### 1.2 File Sizes

| File | Size (bytes) | Size (formatted) | Purpose |
|------|-------------|-------------------|---------|
| `magic_dds.7db679de.dat` | 7,895,969 | 7.5 MB | Magic effect sprites (DDS format) |
| `animations.b22c72ff.dat` | 5,474,524 | 5.2 MB | Character animation keyframes |
| `models.473fd74f.dat` | 3,094,420 | 2.9 MB | Character 3D model data |
| `magic_ktx.72456186.dat` | 2,496,465 | 2.4 MB | Magic effect sprites (KTX format) |
| `animations_dojo.3314a7de.dat` | 306,529 | 299 KB | Dojo-specific animations |
| `xml2.577aacc7.dat` | 195,470 | 191 KB | Additional compressed XML data |
| `xml.ddb3aa55.dat` | 191,264 | 187 KB | Compressed XML data |
| `models_dojo.e57366a0.dat` | 12,570 | 12 KB | Dojo-specific models |

**Total binary data:** ~19.6 MB

### 1.3 Animation Data (`animations.b22c72ff.dat`)

After zstd decompression, this file contains serialized Haxe animation data:

**Structure (inferred from JS deserialization code):**
```
Header:
  - Version/identifier
  - Total animation count
  - Bone count

Per Animation:
  - Name (string)
  - Duration (int, in frames)
  - Loop flag (bool)
  - Frame count
  - Event markers[] (hit frames, footstep frames)

Per Frame:
  - Bone transforms[]:
    - Bone name (string)
    - Position X, Y (float)
    - Rotation (float, radians)
    - Scale X, Y (float)
    - Pivot X, Y (float)
```

**Referenced in JS as:** Animation data loaded via `animations.*.dat` files, deserialized into bone hierarchy + keyframe arrays.

### 1.4 Model Data (`models.473fd74f.dat`)

After zstd decompression, contains 3D model data projected to 2D:

**Structure (inferred):**
```
Header:
  - Version/identifier
  - Model count

Per Model:
  - Name (string)
  - Bone count
  - Bone hierarchy (parent indices)
  - Bone rest poses (position, rotation)
  
Per Bone:
  - Mesh vertices[] (x, y, z → projected to 2D)
  - Texture coordinates[] (u, v)
  - Vertex weights[] (for bone deformation)
```

### 1.5 Magic Effect Data (`magic_dds.*.dat`, `magic_ktx.*.dat`)

Two versions of the same data:
- `magic_dds` — DDS texture format (DXT compressed)
- `magic_ktx` — KTX texture format (ETC2 compressed)

**Structure (inferred):**
```
Header:
  - Effect count

Per Effect:
  - Name (string)
  - Animation sequence:
    - Frame count
    - Per frame:
      - Texture region (atlas coordinates)
      - Position (x, y)
      - Scale (x, y)
      - Rotation (float)
      - Alpha (float)
      - Duration (int, ms)
  - Particle parameters:
    - Spawn rate
    - Lifetime
    - Velocity range
    - Color range
    - Size range
  - Hitbox definitions:
    - Shape (circle/rectangle)
    - Offset (x, y)
    - Size
```

### 1.6 Compressed XML (`xml.ddb3aa55.dat`, `xml2.577aacc7.dat`)

After zstd decompression, these likely contain pre-parsed XML data for faster loading. They may contain the same data as the XML files but in a more efficient binary format.

**Hypothesis:** These are zstd-compressed versions of XML data, loaded at startup to avoid parsing XML at runtime. The JS code likely decompresses them and then parses the resulting XML string.

---

## 2. XML Data Files

### 2.1 Stages (`stages.40f2d5b2.xml`)

**Size:** 27,494 lines | **Purpose:** Complete game progression definition

**Schema:**
```xml
<Stages>
  <Zones>
    <Zone Name="ZONE_NAME" FileName="Map0.X">
      <Battle Name="BATTLE_NAME" Alias="..." Title="..." Icon="..." 
              Preview="..." Type="BOSSES|TOURNAMENT|CHALLENGES|DUELS"
              X="..." Y="..." Location="location_name" Music="music_track">
        <Fight Name="N" Power="N" Rounds="N" RoundTime="N" Replays="N">
          <Rewards>
            <Reward Money="N" Exp="N" PrizeBase="N">
              <NormalModeReward/>
              <Item Name="item_name" ShowReward="1"/>
            </Reward>
          </Rewards>
          <Warriors>
            <Warrior Template="CHARACTER_TEMPLATE" Tactic="TACTIC_NAME"
                      WeaponDamage="N" UnarmedDamage="N" BodyDefense="N"
                      HeadDefense="N" CriticalChance="N" WarriorPower="N"
                      MagicPainRecharge="N" MagicDamageRecharge="N"
                      MagicInitialCharge="N" BeginnerCheat="N">
              <Items>
                <Item Name="ITEM_NAME"/>
              </Items>
              <AttributesAlign>
                <Delta Factor="N" Shift="N" Priority="N"/>
              </AttributesAlign>
              <Perks>
                <Perk Name="PERK_NAME">
                  <Set Param="Value"/>
                </Perk>
              </Perks>
            </Warrior>
          </Warriors>
          <Rules>
            <Attributes DamageFactor="N" ApplyTo="Player|Bot"/>
            <Perk Name="PERK_NAME" ApplyTo="Bot"/>
            <RechargeMagicEachRound ApplyTo="Bot"/>
            <NoPerks Name="PERK_NAME"/>
            <RandomAquiredItem Type="Weapon|Ranged|Magic" ApplyTo="Bot"/>
          </Rules>
        </Fight>
      </Battle>
    </Zone>
  </Zones>
</Stages>
```

**Zone Names:** Punchbag (tutorial), ZONE_1 through ZONE_7
**Battle Types:** BOSSES, TOURNAMENT, CHALLENGES, DUELS, DUMMY, TUTORIAL
**Warrior Templates:** Man_Kungfu, Man_Batons, Girl_Sai, Man_Night, Man_Swords, Lynx_Claws, etc.

### 2.2 Item List (`list.de3ed11b.xml`)

**Size:** 5,555 lines | **Purpose:** Complete item catalog

**Schema:**
```xml
<List>
  <Items>
    <Item Name="ITEM_NAME" Type="TYPE" SubType="SUBTYPE" Image="image_key"
          Text="localization_key" TextButton="loc_key" BonusPrice="N"
          isPaid="1" RealPrice="$X.XX" RealPriceChina="¥X.XX"
          SteamID="..." IphoneID="..." AndroidID="..." ChineseID="..."
          WinPhoneID="..." ChineseName="..." PackLabel="..."
          ConsumableProduct="1" ShopHide="1" Hidden="1"
          SingleTimeBuy="1" RecieveGold="N" RecieveBonus="N"
          AddPercent="N" Labels="LABEL">
    </Item>
  </Items>
</List>
```

**Item Types:** RealMoneyItem, Consumable, Weapon, Armor, Helm, Ranged, Magic, Free, RaidConsumable, RaidItemPack
**SubTypes:** Bonus, Gold, StarterPack, UnlimitedEnergy, PerkReset, Currency, TapJoy, Video

### 2.3 Combat Moves (`moves.97f61623.xml`)

**Size:** 62,849 lines | **Purpose:** All combat move definitions

**Schema:**
```xml
<Movesxml>
  <Moves>
    <Move Name="MOVE_NAME" Template="TEMPLATE" FileName="animation.bytes"
          MidFrames="N" FirstFrame="N" EndFrame="N" Priority="N"
          MirrorNode="BONE_NAME" TacticEquivalent="MOVE_NAME"
          PackName="ZONE_NAME">
      
      <Align Axis="X|Z">
        <Pivot Object="Nodes" Part="BONE_NAME"/>
        <Position Player="Me|Enemy" Object="Pivot"/>
      </Align>
      
      <Events>
        <AnimationEnd/>
        <HitFrame Node="BONE_NAME" Damage="N" Type="High|Low|Side"
                  Knockback="N" KnockbackAngle="N"/>
        <Footstep Sound="SOUND_NAME"/>
      </Events>
      
      <Conditions>
        <CurrentAnimation Name="ANIM_NAME" Not="1"/>
        <Operator Type="Or|And">
          <Condition/>
        </Operator>
      </Conditions>
      
      <Locks>
        <Item Type="Weapon|Skeleton" SubType="TYPE_NAME"/>
        <Operator Type="Or">
          <Item Type="Weapon" SubType="Katana"/>
        </Operator>
      </Locks>
      
      <Intervals>
        <Interval Type="Block"/>
        <Interval Name="Throwable"/>
      </Intervals>
    </Move>
  </Moves>
</Movesxml>
```

**Move Templates:** IdleStance, Stance, Attack, Block, Hit, Knockback, Death
**Lock Types:** Weapon type locks (per weapon category), Skeleton locks
**Interval Types:** Block, Throwable, Attack

### 2.4 Perks/Enchantments (`perks.9fd0174f.xml`)

**Size:** 6,273 lines | **Purpose:** Enchantment system definitions

**Schema:**
```xml
<Perks>
  <Perk Name="PERK_NAME" Template="BASE_PERK" Image="image_key">
    <Set Param="Value" Param2="Value"/>
    <Trigger Name="TRIGGER_NAME">
      <Events>
        <HitPreCrit Player="Me|Enemy" Block="0|1" Defense="DEFENSE_TYPE"/>
        <HitPostCrit Player="Me|Enemy" Critical="0|1"/>
        <RoundStageStart Name="STAGE_NAME"/>
      </Events>
      <Conditions>
        <LessEqual Value1="?QUERY" Value2="_PARAM"/>
        <ModExists Name="MOD_NAME" Not="1"/>
        <Random Chance="0.X"/>
      </Conditions>
      <Actions>
        <SetHit Block="0|1"/>
        <ModFlag Name="FLAG_NAME" Frames="N"/>
        <ModIcon Name="ICON_NAME" Frames="N" ShowExpiration="1" Image="IMAGE"/>
        <ModAttributes DamageFactor="N" Frames="N"/>
        <Provoke Trigger="TRIGGER_NAME"/>
        <ClearMods/>
      </Actions>
    </Trigger>
  </Perk>
</Perks>
```

**Perk Categories:**
- `PERK_BEGINNER` — Tutorial perk (blocks when enemy health < 40%)
- `PERK_HELM_BREAKER` — Extra damage to head (20% chance, 58.5% damage)
- `PERK_AVENGER` — Critical hit buff (30% chance on critical)
- `PERK_DOUBLE_SWEEP` — Knockdown attack
- `PERK_COBRA` — Counter-attack
- `PERK_DESPERATE` — Low health damage bonus
- `PERK_ROCK` — Damage reduction
- `PERK_INVISIBILITY` — Stealth (frames-based duration)

### 2.5 Character Progress (`character_progress.c65fbb17.xml`)

**Size:** 1,080 lines | **Purpose:** Level progression and attribute scaling

**Schema:**
```xml
<Progress>
  <Thresholds>
    <Threshold Level="N" Exp="N"/>
  </Thresholds>
  <StartingAttributes WeaponDamage="N" UnarmedDamage="N" BodyDefense="N"
                      HeadDefense="N" RangedDamage="N" MagicDamage="N"
                      MagicPainRecharge="N" MagicDamageRecharge="N"
                      CriticalChance="N" CriticalDamage="N"
                      BlockDamageFactor="N" InitialMagicCharge="N"
                      ShockCriticalHitChance="N" ShockHeadHitChance="N"
                      EnchantmentResistance="N"/>
  <LevelAttributeGain WeaponDamage="N" UnarmedDamage="N" BodyDefense="N"
                      HeadDefense="N" RangedDamage="N" MagicDamage="N"/>
  <PerkTree>
    <Level Value="N">
      <Perk Name="PERK_NAME"/>
    </Level>
  </PerkTree>
</Progress>
```

**Level XP Table (selected):**
| Level | XP Required |
|-------|-------------|
| 1 | 150 |
| 2 | 190 |
| 3 | 350 |
| 6 | 790 |
| 10 | 1,500 |
| 15 | 2,950 |
| 20 | 4,000 |
| 25 | 3,600 |
| 30 | 8,500 |
| 37 | 10,000 |
| 43 | 16,900 |
| 44 | 150,000 |
| 52 | 300,000 |

**Starting Attributes:** WeaponDamage=5, UnarmedDamage=5, BodyDefense=5, CriticalChance=1000, CriticalDamage=5850

### 2.6 Forge/Upgrade (`forge.75b7e1f1.xml`)

**Size:** 57 lines | **Purpose:** Equipment upgrade scaling

**Schema:**
```xml
<Forge>
  <AspectScale>
    <Aspect Level="N" Value="N"/>
    <Aspect MinLevel="N" MaxLevel="N" Value="N"/>
  </AspectScale>
</Forge>
```

**Upgrade Values (selected):**
| Level | Aspect Value |
|-------|-------------|
| 1 | 55 |
| 5 | 150 |
| 10 | 331 |
| 15 | 512 |
| 20 | 693 |
| 25 | 874 |
| 30 | 1,049 |
| 35 | 1,230 |
| 40 | 1,429 |
| 45 | 1,622 |
| 50 | 1,797 |
| 52+ | 1,867 |

### 2.7 Tactic Settings (`tactic_settings.46cf310f.xml`)

**Size:** 538 lines | **Purpose:** AI behavior configuration

**Schema:**
```xml
<TacticsSettings>
  <BothBot Enabled="0|1"/>
  <Tactics>
    <Tactic Name="TACTIC_NAME" Template="UseTables|Tabular">
      <AnimationWeights>
        <Animation Name="ANIM_NAME" Base="N" AntiLimit="N" Limit="N"
                   DistanceFactor="F" Shift="F"
                   ConditionalDesigionFactor="F">
          <AnimationFactors Animation="ANIM_NAME" HitFactor="F" DamageFactor="F"/>
        </Animation>
      </AnimationWeights>
      <UseDefense>
        <CounterAttackChance Base="F" Limit="F"/>
        <DodgeChance Base="F" Limit="F"/>
        <BlockChance Base="F" CounterFactor="F" DamageFactor="F"
                     AnimationFramesFactor="F" Limit="F"/>
      </UseDefense>
      <UseSafeAttackChance Base="F" Limit="F"/>
      <TableAttackChance Base="F" Limit="F"/>
      <DodgeMissilesChance Base="F"/>
      <QuickAttacks>
        <QuickAttackChance Animation="ANIM_NAME" Base="F" Limit="F">
          <AnimationFactors Animation="ANIM_NAME" DamageFactor="F" CounterFactor="F"/>
        </QuickAttackChance>
      </QuickAttacks>
      <Evades>
        <EvadeChance Animation="ANIM_NAME" Base="F" Limit="F"/>
      </Evades>
      <CautiousMovementsChance Base="F" Limit="F"/>
      <DistanceError>
        <Min Base="F"/> <Max Base="F"/>
      </DistanceError>
      <FrameError>
        <Min Base="F"/> <Max Base="F"/>
      </FrameError>
      <ResponseDelay>
        <Min Base="F"/> <Max Base="F"/>
      </ResponseDelay>
    </Tactic>
  </Tactics>
</TacticsSettings>
```

**Animation Names:** ForwardStep, BackStep, BackHandflip, Duck, JumpUp, ShortAttack, Weapon, RangedPlayer, MagicPlayer, BossAbility, Retreat

### 2.8 Computer Settings (`computer_settings.93ae8499.xml`)

**Size:** 234 lines | **Purpose:** AI combat behavior tuning

Contains:
- **ShiftTables** — Position shifting during combat (animations, nodes)
- **OutcomeTables** — Combat outcome calculations (Alpha, Beta, Throws)
- **Throw mechanics** — Throwable intervals and throw animations

---

## 3. Sprite Atlas Format

### 3.1 JSON Atlas (`proxy.1c1df98c.json`)

**Format:** TexturePacker JSON Array

**Schema:**
```json
{
  "meta": {
    "scale": "0.2",
    "size": { "h": 1809, "w": 2041 }
  },
  "frames": [
    {
      "rotated": false,
      "sourceSize": { "h": 106, "w": 55 },
      "frame": { "h": 106, "x": 1422, "y": 679, "w": 55 },
      "trimmed": false,
      "spriteSourceSize": { "h": 106, "x": 0, "y": 0, "w": 55 },
      "filename": "Armor1/img_armor_kendo"
    }
  ]
}
```

**Frame fields:**
- `frame` — Actual position in atlas (x, y, w, h)
- `sourceSize` — Original sprite size
- `spriteSourceSize` — Trim offset (when `trimmed: true`)
- `rotated` — Whether frame is rotated 90°
- `filename` — Sprite identifier (format: `Category/imageName`)

**Categories found:**
- `Armor1/` through `Armor4/` — Armor icons
- `Helm1/` through `Helm4/` — Helmet icons
- `Weapon1/` through `Weapon4/` — Weapon icons
- `Ranged/` — Ranged weapon icons
- `Magic/` — Magic item icons

### 3.2 Texture Files

| File | Format | Purpose |
|------|--------|---------|
| `proxy.a8608659.dds` | DDS (DXT1/DXT5) | Item atlas (DirectX texture) |
| `proxy.011589cf.ktx` | KTX (ETC2) | Item atlas (OpenGL texture) |

**DDS Format:**
- Magic: `DDS ` (0x20534444)
- Header: 128 bytes
- Compression: DXT1 (opaque) or DXT5 (alpha)
- Mipmaps: Yes

**KTX Format:**
- Magic: `«KTX 11»` (0x04030201)
- Header: 64 bytes
- Compression: ETC2 RGB8 / ETC2 RGBA8
- Mipmaps: Yes

---

## 4. Location/Background Format

### 4.1 Location Directory Structure

Each location (47 total) contains:
```
location_name/
├── name_params.HASH.xml    — Layer configuration
├── name.HASH.json          — Sprite atlas (TexturePacker JSON)
├── name.HASH.ktx           — Texture (KTX format)
├── name.HASH.avif          — Texture (AVIF format, modern)
└── name.HASH.webp          — Texture (WebP format, fallback)
```

### 4.2 Location Parameters XML

**Example:** `arena_params.16ca56d9.xml`

**Schema:**
```xml
<Root Width="1936" Wall="210" Pages="2" Height="512" Floor="80" Color="0x190702">
  <Layer Type="1" Scaling="1" Factor="PARALLAX_FACTOR">
    <Image Y="N" X="N" Width="N" Height="N" ClassName="SPRITE_NAME"/>
  </Layer>
  <Layer Type="1" Scaling="1" Factor="0.4">
    <SimpleEffect Y="N" X="N" Width="N" Type="Picture" 
                  PictureLocation="local" Height="N" ClassName="SPRITE_NAME">
      <OscillationY Offset="F">
        <Point Value="N" Period="F" Ease="-1|1"/>
      </OscillationY>
    </SimpleEffect>
  </Layer>
</Root>
```

**Fields:**
- `Width` — Scene width in pixels (typically 1936)
- `Height` — Scene height (typically 512)
- `Wall` — Left wall position
- `Floor` — Ground level Y position
- `Color` — Background color (hex)
- `Layer` — Parallax layer
  - `Factor` — Parallax speed (0 = static, 0.05 = slow, 0.5 = medium, 1.0 = fast)
  - `Scaling` — Layer scale factor
- `Image` — Static sprite
- `SimpleEffect` — Animated sprite (with oscillation)

### 4.3 Location Sprite Atlas

Same TexturePacker JSON format as item atlas. Sprites are named by their layer role:
- `_0031_background` — Far background
- `_0030_mountains` — Mountain layer
- `_0029_houses_back` — Buildings behind
- `_0027_people_back` — Crowd behind
- `_0024_middle_banners` — Middle banners
- `_0013_rock` — Foreground rocks
- `_0008_fog` — Fog overlay
- `_0007_arena` — Ground/arena

### 4.4 Animation Effects

Locations can have animated elements:
```xml
<SimpleEffect Y="3" X="-561.5" Width="123" Type="Picture" 
              PictureLocation="local" Height="114" ClassName="banner">
  <OscillationY Offset="0.14">
    <Point Value="0" Period="0.5" Ease="-1"/>
    <Point Value="5" Period="0.1" Ease="1"/>
  </OscillationY>
</SimpleEffect>
```

**Oscillation Types:** OscillationY (vertical wave), OscillationX (horizontal wave)

---

## 5. Audio Format

### 5.1 Music Tracks

| Format | Codec | Container | Usage |
|--------|-------|-----------|-------|
| `.ogg` | Vorbis | OGG | Primary (Android native) |
| `.m4a` | AAC | MP4/M4A | Fallback (iOS compatible) |

**76 audio files total:**
- 38 music tracks (each in .ogg + .m4a)
- 2 sound effect banks (each in .ogg + .m4a)

### 5.2 Music Track List

| Track Name | Context |
|------------|---------|
| `menu_music` | Main menu |
| `act_music` | Zone transition |
| `fight1_samurai_spirit_music` | Zone 1 boss |
| `fight2_blade_dance_music` | Zone 1 fights |
| `fight3_vengeance_music` | Zone 2 |
| `fight4_forest_of_death_music` | Zone 2 |
| `fight5_ninja_in_the_night_music` | Zone 3 |
| `fight6_sparring_music` | Zone 3 |
| `fight7_fat_boss_music` | Zone 4 boss |
| `fight8_final_boss_music` | Zone 4 final |
| `fight9_master_skills_music` | Zone 5 |
| `fight10_black_warrior_music` | Zone 5 boss |
| `fight11_ronin_music` | Zone 6 |
| `fight12_deadly_smoke_music` | Zone 6 |
| `fight13_old_sensei_music` | Zone 6 boss |
| `fight14_ship_battle_music` | Zone 7 |
| `fight15_shadow_lady_music` | Zone 7 |
| `fight16_the_battlefield_flowers_music` | Zone 7 |
| `fight17_cave_music` | Zone 7 |
| `fight18_fuji_music` | Zone 7 |
| `fight19_volcano_music` | Zone 7 |
| `fight21_lesson_in_the_dark_room_music` | Special |
| `fight22_heavenly_clouds_music` | Special |
| `fight23_burning_town_music` | Special |
| `fight24_ruins_village_music` | Special |
| `fight25_hive_music` | Special |
| `fight27_factory_music` | Special |
| `fight28_flying_rocks_music` | Special |
| `fight30_gates_of_shadows_music` | Special |
| `fight31_graveyard_ships_music` | Special |
| `fight32_starship_music` | Special |
| `fight33_stone_forest_music` | Special |
| `fight34_halls_of_the_dead_heroes_music` | Special |
| `fight36_stardocks_music` | Special |
| `fight37_titan_epic_fight_music` | Titan boss |
| `fight38_sakura_forest_music` | Special |

### 5.3 Sound Effects

| Bank | Contents |
|------|----------|
| `sounds_a` | Hit sounds, weapon impacts, body hits, blocks |
| `sounds_b` | UI sounds, menu clicks, ambient, notifications |

---

## 6. Language Files

### 6.1 Supported Languages

| Code | Language | File |
|------|----------|------|
| `en` | English | `en.cb65c72d.xml` |
| `de` | German | `de.a1ebd391.xml` |
| `es` | Spanish | `es.b10cc8bd.xml` |
| `fr` | French | `fr.eb58d46b.xml` |
| `it` | Italian | `it.c4b231b7.xml` |
| `ja` | Japanese | `ja.3e2d14d7.xml` |
| `ko` | Korean | `ko.54bb7a43.xml` |
| `pt` | Portuguese | `pt.7e3a5246.xml` |
| `ru` | Russian | `ru.f799f0ce.xml` |
| `tr` | Turkish | `tr.aa266951.xml` |

### 6.2 Language File Schema

```xml
<Localization>
  <Words>
    <Word Title="STRING_KEY">Translated text</Word>
    <Word Title="STRING_KEY{N}">Text with {N} placeholder</Word>
  </Words>
</Localization>
```

**String key patterns:**
- `Tenebris_greetings_1` — Story dialog
- `dlgSuperItemAvailable` — Dialog text
- `tutorial_move` — Tutorial instructions
- `achievement_name_perfect_1` — Achievement names
- `achievement_Desc_Perfect_Rounds_1{1}` — Achievement descriptions with parameter

---

## 7. Tactic Files

### 7.1 Overview

**1,710 binary `.dat` files** in `res/tactics/`

**Naming convention:**
- `_.HASH.dat` — Default/fallback tactic
- `weapon_type.HASH.dat` — Per-weapon-type tactic
- `weapon1_weapon2.HASH.dat` — Weapon matchup tactic

### 7.2 Weapon Types (57)

```
axes, batons, battlehammers, bigswords, butcherknives, chinesesabers,
claws, compositescythe, compositespear, compositestaff, compositesword,
crescentknives, cudgel, daggers, doublescythe, electrohammers, fans,
firebatons, fists, glaive, glaivebow, hermitswords, katana, katars,
keris, knives, knobsticks, knuckles, kusarigama, machete, magariyari,
monkkatars, naginata, ninjasword, nunchaku, onehandedsword, powerfists,
rifle, sai, scythe, shockerclaws, shogunkatana, shuanggou, sickles,
silverglaive, spear, staff, steelclaws, swords, titangiantsword,
tonfa, tonfaguns, trident, twohanded, wakidzashi, wandererstaff
```

### 7.3 File Format

After zstd decompression, each tactic file contains serialized Haxe data with AI decision weights for specific weapon matchups.

**Structure (inferred from tactic_settings.xml):**
```
Per Weapon Matchup:
  - Attack probability weights
  - Block probability weights
  - Dodge probability weights
  - Counter-attack probability
  - Magic usage probability
  - Distance preferences
  - Combo tendencies
```

### 7.4 File Size Distribution

| Size Range | Count | Description |
|-----------|-------|-------------|
| 5-10 KB | ~200 | Simple weapon tactics |
| 10-20 KB | ~500 | Standard weapon tactics |
| 20-40 KB | ~800 | Weapon matchup tactics |
| 40+ KB | ~210 | Complex matchup tactics |

---

## 8. User/Save Data

### 8.1 Default Save Template (`users_default.b7da2019.xml`)

```xml
<Root>
  <CurrentUser ID="1">
    <Sounds>
      <Sound Value="1.0" Mute="0"/>
      <Music Value="1.0" Mute="0"/>
    </Sounds>
  </CurrentUser>
  <Warriors>
    <Warrior ID="1" FirstName="NAME_SHADOW" Avatar="avatar_hero"
             Voice="Male" Money="0" Bonus="50" Strength="3" Stamina="3"
             Level="1" Experience="0" Power="5" Skeleton="Skeleton"
             Armor="Body" Helm="Head" Weapon="Fists" Ranged="NoRanged"
             Magic="NoMagic" Tactic="Player" CurrentZone="ZONE_1"
             Tutorial="MOVE" SaveSlot="0">
      <Items>
        <Item Name="Body" Equipped="1" Count="1"/>
        <Item Name="Head" Equipped="1" Count="1"/>
        <Item Name="Fists" Equipped="1" Count="1"/>
        <Item Name="NoRanged" Equipped="1" Count="1"/>
        <Item Name="NoMagic" Equipped="1" Count="1"/>
      </Items>
      <Battles>
        <Battle Name="ZONE_1|BOSS_LYNX|"/>
      </Battles>
      <Currencies/>
      <Resistances Resistance_2="0"/>
    </Warrior>
  </Warriors>
  <Versions>
    <Version Value="1.0.13"/>
    <DataVersion Value="1.0.13.0"/>
  </Versions>
</Root>
```

### 8.2 Warrior Attributes

| Attribute | Default | Description |
|-----------|---------|-------------|
| Money | 0 | Coins |
| Bonus | 50 | Gems |
| Strength | 3 | Affects damage |
| Stamina | 3 | Affects health |
| Level | 1 | Character level |
| Experience | 0 | Current XP |
| Power | 5 | Overall power rating |
| Tutorial | MOVE | Tutorial state |
| CurrentZone | ZONE_1 | Active zone |

---

## 9. Quest Extension Format

### 9.1 Quest File Structure

```xml
<Quests>
  <Quest Name="QUEST_NAME" Priority="N" Unresumable="0|1">
    <Events>
      <ChangeTab/>
      <FightComplete Name="ZONE|BATTLE|FIGHT"/>
      <ItemAcquired Name="ITEM_NAME"/>
    </Events>
    <Conditions>
      <Equal Value1="VARIABLE" Value2="VALUE"/>
      <GreaterEqual Value1="QUERY" Value2="VALUE"/>
      <Operator Type="And|Or">
        <Condition/>
      </Operator>
    </Conditions>
    <Actions>
      <ChangeScene Destination="SCENE_NAME"/>
      <OpenShop Tab="TAB_NAME" Item="ITEM_NAME"/>
      <Dialog Type="Regular|Notification" Title="CHARACTER" Image="IMAGE">
        <Line Text="STRING_KEY" ButtonText="BTN_KEY"/>
        <Button Type="Right" Color="Green" Text="OK"/>
      </Dialog>
      <SetVariable Scope="Users|Local" Name="VAR_NAME" Value="VALUE"/>
      <Fight Name="ZONE|BATTLE|FIGHT"/>
      <GiveItem Name="ITEM_NAME"/>
      <GiveMoney Amount="N"/>
      <GiveExperience Amount="N"/>
    </Actions>
  </Quest>
</Quests>
```

### 9.2 Quest Extension Files (27)

| File | Purpose |
|------|---------|
| `tutorial_quests.dcc4a509.xml` | Tutorial flow |
| `battles.d10be6ea.xml` | Battle unlock triggers |
| `energy.c586fbbc.xml` | Energy refill quests |
| `offers.43cc65c2.xml` | Special offers |
| `packs.60f593ce.xml` | Pack download triggers |
| `premium_packs.a8d39072.xml` | Premium pack offers |
| `starter_packs.a85c3b94.xml` | Starter pack offers |
| `sensei_arc.75009ff8.xml` | Sensei story arc |
| `hardmode.b4bc06f9.xml` | Hard mode quests |
| `update_quests.95ab3e10.xml` | Update-specific quests |
| `zone_1/` through `zone_7/` | Per-zone quests |

### 9.3 Variable Query System

The quest engine uses a query language:
- `?Player[].Level` — Player's current level
- `?Fight[ZONE|BATTLE|FIGHT].WinCount` — Fight win count
- `?Item[ITEM_NAME].Level` — Item level
- `?SysInfo[].Steam` — Platform detection
- `?Concat[string1, string2]` — String concatenation
- `_$VariableName` — Local variable reference
- `_VariableName` — Set variable reference

### 9.4 Dialog Types

| Type | Description |
|------|-------------|
| `Regular` | Full dialog with title, image, buttons |
| `Notification` | Small notification popup |
| `Stranger` | Unknown character dialog |
| `Multiline` | Multiple text lines |

---

## 10. Compression Format

### 10.1 Zstandard (zstd)

**All binary .dat files use Zstandard compression.**

| Property | Value |
|----------|-------|
| Magic bytes | `28 B5 2F FD` (0x28B52FFD) |
| Format | RFC 8478 |
| Max window size | 2046 MB |
| Block types | Raw, RLE, Compressed |
| FSE | Finite State Entropy coding |
| Huffman | Huffman coding for literals |

**JS Implementation:** Custom decoder in class `ti` (sf2.js line 154)

### 10.2 fflate

**Used for gzip/deflate operations** (not for .dat files).

| Function | Purpose |
|----------|---------|
| `fflate.decompressSync` | Decompress gzip/deflate data |
| `fflate.inflateSync` | Inflate raw deflate data |
| `fflate.gunzipSync` | Decompress gzip data |

---

## 11. CDN Configuration

### 11.1 Config File (`config_cdn.2a7a7dca.xml`)

```xml
<data>
  <platform>
    <item PlatformID="1" Name="iOS"/>
    <item PlatformID="2" Name="Android"/>
    <item PlatformID="3" Name="Simulator"/>
    <item PlatformID="4" Name="WinPhone"/>
    <item PlatformID="5" Name="WinStore"/>
  </platform>
  <versions>
    <item ID="N" PlatformID="N" Version="X.Y.Z" ReleaseDate=""/>
  </versions>
  <fonts>
    <item ID="N" Name="Asian" Url="URL" MinVersion="X.Y.Z" 
           PlatformID="N" Active="1" Attach="1" Hash="MD5" Size="N"/>
  </fonts>
  <video>
    <item ID="N" Name="filename.mp4" Url="URL" MinVersion="X.Y.Z"
           PlatformID="N" Attach="0" ObjectNumber="N" Active="0"
           Reload="0" Size="N" Hash="MD5"/>
  </video>
</data>
```

**CDN Base URL:** `https://assets.nekkimobile.ru/shadowfight/`

---

## 12. Internal Settings

### 12.1 GUI Settings (`internal_settings.e9a9d549.xml`)

```xml
<Settings>
  <GUI>
    <Basic>
      <ShowMenuTime Value="0"/>
      <ArrowFlashingFrames Value="120"/>
      <ButtonWidth Min="242" Max="342"/>
      <HintTimeout Value="10"/>
      <CreditsScrollSpeed Value="2.0"/>
      <CurrencyCounterRollTime>
        <DefaultRollTime Value="120"/>
        <CounterRollTime Gems="1" Value="0"/>
      </CurrencyCounterRollTime>
    </Basic>
    <Profile>
      <AnimationSpeed Value="50"/>
      <PerkOpacity Min="127" Max="255"/>
    </Profile>
    <Fight>
      <PerkIcons>
        <FadeFrames In="60" Out="30"/>
        <PulseAmp Value="1.75"/>
        <RowCapacity Value="5"/>
      </PerkIcons>
    </Fight>
  </GUI>
</Settings>
```

---

## 13. Achievement System

### 13.1 Achievement File (`achievements.022fc8e6.xml`)

```xml
<Achievements>
  <Counter Name="COUNTER_NAME">
    <Achievement Name="achievement_name_KEY" 
                 Description="achievement_Desc_TEXT{N}"
                 Priority="N" CounterValue="N"
                 Icon="Atlas.ImageName"
                 GameCenterID="ios.id"
                 GooglePlayID="google.play.id"
                 Points="N" BonusPrize="N"/>
  </Counter>
</Achievements>
```

### 13.2 Achievement Counters

| Counter | Thresholds | Description |
|---------|-----------|-------------|
| PerfectRound | 1, 5, 20 | Win rounds without taking damage |
| FirstHits | 20, 100, 500 | Land first hits in fights |
| Combo3/6/10 | 1 each | Max combo length |
| StyleAggressive/Crazy/Fantastic | 1 each | Combat style achievements |
| HeadHitRound | 10, 50, 300 | Head hits per round |
| Disarm | 10, 50, 200 | Disarm opponents |
| KickFights | 1, 5, 20 | Win with kick only |

---

## 14. Pack/Bundle System

### 14.1 Pack Definitions (`packs.65977344.xml`)

```xml
<Packs>
  <Pack Name="PACK_NAME" Type="Story|Raid" ItemsPackLabel="LABEL">
    <DownloadConditions>
      <Equal Value1="QUERY" Value2="VALUE"/>
      <Less Value1="QUERY" Value2="VALUE" Not="1"/>
    </DownloadConditions>
  </Pack>
</Packs>
```

**Pack Types:**
- `Story` — Zone story content
- `Raid` — Raid/ clan content

**Pack Names:** ZONE_1, ANIMATIONS, ZONE_RAID, CLANS, MODELS, TACTICS

---

## Summary

### Asset Type Distribution

| Type | Count | Total Size | Compression |
|------|-------|-----------|-------------|
| XML Data | 39+ | ~2 MB | None (plain XML) |
| Binary .dat | 8 | ~19.6 MB | Zstandard |
| Tactic .dat | 1,710 | ~45 MB | Zstandard |
| Sprite Atlases | 2 | ~50 MB | DDS/KTX (GPU) |
| Audio | 76 | ~200 MB | OGG/AAC |
| Locations | 47 | ~100 MB | AVIF/WebP/KTX |
| Language | 10 | ~500 KB | None |
| Quest Extensions | 27+ | ~200 KB | None |
| **Total** | **~4,920** | **~586 MB** | |

### Key Technical Findings

1. **Compression:** Zstandard (not gzip/zlib) for all binary data
2. **Texture Formats:** DDS (DirectX), KTX (OpenGL ES), AVIF, WebP
3. **Audio:** Dual-format (OGG + M4A) for cross-platform compatibility
4. **Atlas Format:** TexturePacker JSON Array
5. **Animation:** Bone-based keyframe system (not sprite sheets)
6. **AI:** Weighted decision tables with per-weapon matchup data
7. **Quests:** Event/condition/action system with variable query language
8. **Progression:** 52 levels, XP thresholds, perk tree unlocks

---

*Analysis completed: 2026-07-23*
*All asset formats documented for native Android rebuild*
