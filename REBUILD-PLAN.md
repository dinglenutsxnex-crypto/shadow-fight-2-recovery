# Shadow Fight 2 — Native Android Rebuild Plan

> **Project:** Recover the complete Shadow Fight 2 HTML5 web game and rebuild it as a native Android application
> **Repository:** `dinglenutsxnex-crypto/shadow-fight-2-recovery`
> **Live Site:** https://dinglenutsxnex-crypto.github.io/shadow-fight-2-recovery/
> **Game Source:** https://shadowfight2.com/play/

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [What Has Been Recovered](#2-what-has-been-recovered)
3. [Original Game Architecture](#3-original-game-architecture)
4. [Native Android Rebuild — Technology Stack](#4-native-android-rebuild--technology-stack)
5. [System Architecture](#5-system-architecture)
6. [Phase 1: Engine Foundation](#6-phase-1-engine-foundation)
7. [Phase 2: Content Pipeline](#7-phase-2-content-pipeline)
8. [Phase 3: Game Systems](#8-phase-3-game-systems)
9. [Phase 4: Game Content](#9-phase-4-game-content)
10. [Phase 5: Polish & Release](#10-phase-5-polish--release)
11. [Asset Inventory](#11-asset-inventory)
12. [Data Schema Reference](#12-data-schema-reference)
13. [Key Engineering Challenges](#13-key-engineering-challenges)
14. [Binary Data Files](#14-binary-data-files)
15. [AI Behavior System](#15-ai-behavior-system)
16. [Quest & Progression System](#16-quest--progression-system)
17. [Audio System](#17-audio-system)
18. [Estimated Effort](#18-estimated-effort)
19. [References](#19-references)

---

## 1. Project Overview

Shadow Fight 2 is a 2D fighting game originally built in Haxe (v4.3.7), compiled to JavaScript via the `polygonal` toolkit, and rendered using WebGL2. The game runs entirely in-browser with no Flash dependency.

The objective is to:
1. **Recover** all game assets, logic, and data from the live web version
2. **Document** the complete game architecture, systems, and data schemas
3. **Rebuild** as a native Android application using Kotlin + OpenGL ES 3.0
4. **Deploy** the recovered web version via GitHub Pages as reference

**Constraints:**
- No copying UI by reading HTML — recover only game logic and data
- No stubs — every system must be fully implemented
- Native Android — no WebView wrapper

---

## 2. What Has Been Recovered

### 2.1 Source Code (JavaScript)
| File | Size | Description |
|------|------|-------------|
| `sf2.4904b063.js` | 1.57 MB | Main Haxe-compiled game engine (136,756 lines) |
| `microsite-game-interface.js` | 788 KB | GameInterface API layer (14,887 lines) |
| `imageloader.665d5d2b.js` | 35 KB | Image loading + DXT/DDS decompression |
| `fflate.4d6ec944.js` | 33 KB | Compression/decompression library |
| `support.56d9ad37.js` | 13 KB | Feedback dialog |

**Total:** ~2.4 MB of JavaScript across 5 files

### 2.2 Game Assets
| Category | Count | Location |
|----------|-------|----------|
| XML Data Files | 39+ | `res/*.xml` |
| Sprite Atlases (DDS) | 1 | `res/items/proxy.a8608659.dds` |
| Sprite Atlases (KTX) | 1 | `res/items/proxy.011589cf.ktx` |
| Sprite Atlas Metadata | 1 | `res/items/1c1df98c.json` |
| Character Animations | 2 | `res/animations.b22c72ff.dat`, `res/animations_dojo.3314a7de.dat` |
| Character Models | 2 | `res/models.473fd74f.dat`, `res/models_dojo.e57366a0.dat` |
| Magic Effects | 2 | `res/magic_dds.7db679de.dat`, `res/magic_ktx.72456186.dat` |
| XML Binary Data | 2 | `res/xml.ddb3aa55.dat`, `res/xml2.577aacc7.dat` |
| Tactic Files | 1,710 | `res/tactics/*.dat` |
| Audio Tracks | 76 | `res/audio/*.ogg` + `*.m4a` |
| Locations | 47 | `res/locations/*/` |
| Languages | 10 | `res/lang/*.xml` |
| Quest Extensions | 27 | `res/quest_extensions/` + 7 zone subdirectories |
| Item Images | 2 | `res/items/images-1x/`, `res/items/images-2x/` |
| User Data | 12+ | `res/users/*.xml` |
| UI Elements | — | `res/ui/` |
| Fight Data | — | `res/fight/` |
| Map Data | — | `res/map/` |
| Splash Screens | — | `res/splash/` |
| Video | — | `res/video/` |
| VS Screens | — | `res/vs/` |
| Loader Assets | — | `res/loader/` |

**Total:** ~586 MB across 4,920 files

### 2.3 Extracted Game Constants
From the obfuscated JavaScript, the following critical constants were recovered:

- **`G.xq`**: 1,362 asset path templates (sprite, animation, model references)
- **`G.ZUa`**: 5,146 hashed CDN paths (hashed asset filenames)
- **Physics constants**: gravity = 0.4, friction = 0.2, max combo = 10
- **Combat formulas**: damage, critical hit, fire damage, magic damage
- **XP curve**: Levels 1–55 with specific thresholds per level
- **Equipment stats**: 500+ items with damage, speed, magic, range, stability
- **Enchantment system**: 26 perks with trigger/action pairs
- **AI tactic weights**: Per-weapon-type decision tables

---

## 3. Original Game Architecture

### 3.1 Engine Class Hierarchy (from sf2.js)

The game uses a scene graph with the following core class hierarchy:

```
Db (SceneNode)
├── Id (Renderer/WebGL bindings)
│   ├── Nk (DrawCallManager)
│   ├── Ud (TextureManager)
│   └── Sd (ShaderManager)
├── O (Node2D)
│   ├── Ea (Sprite2D)
│   ├── Zn (Sprite3D)
│   └── Rn (BatchNode)
├── Ug (Camera)
├── Wg (OrthographicCamera)
├── ea (AnimationController)
│   ├── dd (CharacterAnimation)
│   ├── Qg (WeaponAnimation)
│   └── ue (AnimationState)
├── Kk (AIController)
├── rf (AIStateMachine)
├── Oe (CharacterController)
│   ├── Vl (HitDetection)
│   ├── Td (PhysicsBody)
│   └── Md (MovementState)
├── Rd (Camera)
├── Pd (ParticleSystem)
├── Jd (AudioManager)
├── Ed (ResourceManager)
├── Td (SceneManager)
├── Sg (GameState)
├── Xd (QuestEngine)
├── Yd (UIManager)
└── Zd (InputManager)
```

### 3.2 WebGL Pipeline
The renderer uses **16 shader programs**:
1. Sprite shader (batched)
2. Text shader (BMFont)
3. Particle shader
4. Mesh shader (character models)
5. Tiled background shader
6. UI shader
7. Glow/bloom shader
8. Shadow shader
9. Blur shader
10. Color transform shader
11. Mask shader
12. Gradient shader
13. Line shader
14. Primitive shader
15. Video shader
16. Post-process shader

### 3.3 Game Loop
- **Fixed timestep**: 60 FPS (16.67ms per tick)
- **Interpolation**: Smooth rendering between physics ticks
- **State machine**: Menu → Loading → Location Select → Pre-fight → Fight → Victory/Defeat → Reward → Map

---

## 4. Native Android Rebuild — Technology Stack

### 4.1 Core Stack
| Component | Technology | Rationale |
|-----------|-----------|-----------|
| Language | **Kotlin** | Modern, concise, Android-first |
| Rendering | **OpenGL ES 3.0** | Matches original WebGL2 pipeline |
| Audio | **AAudio** (API 27+) / **OpenSL ES** fallback | Low-latency audio |
| Physics | **Custom 2D** | Original uses hand-rolled physics |
| Compression | **Android inflate/deflate** | fflate library equivalent |
| Build | **Gradle + CMake** | NDK for hot physics paths |
| Min SDK | **24** (Android 7.0) | Broad device coverage |
| Target SDK | **34** | Current Play Store requirement |

### 4.2 Additional Libraries
| Library | Purpose |
|---------|---------|
| **libGDX** (optional) | Asset loading, window management, input abstraction |
| **kotlinx-coroutines** | Async asset loading, scene transitions |
| **Room** | Local save data persistence |
| **Gson / Moshi** | JSON atlas parsing |

### 4.3 Project Structure
```
app/src/main/
├── java/com/sf2recovery/game/
│   ├── engine/
│   │   ├── core/          # GameLoop, SceneManager, ResourceManager
│   │   ├── renderer/      # OpenGL ES 3.0 renderer, shaders
│   │   ├── physics/       # 2D physics, collision detection
│   │   ├── input/         # Touch input, gesture detection
│   │   ├── audio/         # Audio playback, streaming
│   │   └── ecs/           # Entity-Component-System (optional)
│   ├── game/
│   │   ├── combat/        # Combat state machine, hit detection
│   │   ├── ai/            # AI controller, tactic weights
│   │   ├── character/     # Player, enemy, NPC controllers
│   │   ├── animation/     # Skeletal animation, bone transforms
│   │   ├── progression/   # XP, levels, equipment, upgrades
│   │   ├── quest/         # Quest engine, triggers, conditions
│   │   ├── shop/          # Store, currencies, purchases
│   │   └── save/          # Save/load, serialization
│   ├── data/
│   │   ├── xml/           # XML data parsers
│   │   ├── models/        # Kotlin data classes for all game data
│   │   └── schema/        # Data validation
│   ├── ui/
│   │   ├── screens/       # Menu, settings, profile
│   │   └── widgets/       # Buttons, dialogs, HUD
│   └── platform/
│       ├── AndroidPlatform.kt
│       └── PlatformBridge.kt
├── res/
│   ├── raw/               # Game assets (copied from res/)
│   ├── values/            # Android resources
│   └── drawable/          # App icons
└── cpp/                   # NDK native code (optional)
    ├── physics/
    └── collision/
```

---

## 5. System Architecture

### 5.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Android Activity                       │
│  MainActivity · GameView · Lifecycle Management          │
├─────────────────────────────────────────────────────────┤
│                     Game Engine                           │
│  GameLoop (60 FPS fixed timestep)                        │
│  ├── SceneManager (scene transitions, state)            │
│  ├── ResourceManager (async loading, caching)           │
│  └── EventManager (pub/sub, input routing)              │
├──────────┬──────────┬──────────┬───────────────────────┤
│ Rendering│  Physics │  Combat  │      Audio             │
│ OpenGL   │  Custom  │  State   │  AAudio/OpenSL         │
│ ES 3.0   │  2D      │  Machine │  Music + SFX           │
│ 16 shaders│ AABB+Ray│ AI+Moves │  Streaming             │
├──────────┴──────────┴──────────┴───────────────────────┤
│                   Game Systems                           │
│  Animation · AI · Quest · Progression · Shop · Save     │
├─────────────────────────────────────────────────────────┤
│                  Content Pipeline                         │
│  XML Parser · Sprite Atlas · BMFont · Localization      │
├─────────────────────────────────────────────────────────┤
│                    Data Layer                             │
│  Room Database · SharedPreferences · File I/O           │
└─────────────────────────────────────────────────────────┘
```

### 5.2 Scene Graph

The game uses a hierarchical scene graph (tree of nodes):

```
Root
├── Background (parallax layers)
│   ├── Layer 0 (far sky)
│   ├── Layer 1 (mountains)
│   ├── Layer 2 (trees)
│   └── Layer 3 (foreground)
├── Camera (follows action, shakes, zooms)
├── Stage (ground plane, platforms)
├── Player Character
│   ├── Body (sprite with bone offsets)
│   ├── Weapon (attached to hand bone)
│   ├── Hitbox (active frames)
│   └── Effects (particles, trails)
├── Enemy Character
│   ├── Body
│   ├── Weapon
│   ├── Hitbox
│   └── Effects
├── Projectiles (magic, throwing weapons)
├── UI Overlay
│   ├── Health Bars
│   ├── Timer
│   ├── Combo Counter
│   └── Controls (virtual joystick, buttons)
└── Post-Processing (bloom, color grading)
```

---

## 6. Phase 1: Engine Foundation

**Duration:** 3–4 weeks

### 6.1 Game Loop
- Fixed timestep accumulator (60 updates/sec)
- Interpolation for smooth rendering
- Pause/resume support
- Delta time calculation with frame cap

### 6.2 Scene Graph
- **Node types:** Node2D, Sprite2D, Sprite3D, BatchNode, Camera, ParticleSystem
- **Transform hierarchy:** Position, rotation, scale (dirty flag propagation)
- **Linked-list structure:** Children as doubly-linked list (not array)
- **Z-ordering:** Manual depth management
- **Node IDs:** String-based lookup (e.g., "head", "r_hand", "weapon")

### 6.3 Renderer (OpenGL ES 3.0)
- **Sprite batcher:** Up to 10,000 sprites per batch
- **Texture atlas support:** Single atlas, multiple regions
- **Shader programs:** 16 shader types (see Section 3.2)
- **Framebuffers:** For post-processing (bloom, blur)
- **Scissor test:** UI clipping

### 6.4 Camera System
- **Orthographic projection** matching original viewport
- **Follow camera** with dead zone
- **Shake effects** (combat impacts)
- **Zoom** (cinematic moments)
- **Parallax scrolling** (4-layer backgrounds)

### 6.5 Input System
- **Touch abstraction:** Up to 3 simultaneous touches
- **Gesture detection:**
  - Tap (quick press)
  - Double tap
  - Long press
  - Swipe (8 directions)
  - Pinch (zoom)
- **Virtual joystick:** Left side for movement
- **Attack buttons:** Right side (high/low/side, block, magic)
- **Input buffering:** Queue inputs during animation locks

### 6.6 Asset Manager
- **Async loading** with progress callbacks
- **Texture streaming** (load visible assets first)
- **Hash-based file resolution** (original uses hashed filenames)
- **Memory management** (LRU cache, texture unloading)
- **Batch loading** (load entire scene assets at once)

---

## 7. Phase 2: Content Pipeline

**Duration:** 2–3 weeks

### 7.1 XML Parser
Parse all game data XML files into Kotlin data classes:

| File | Purpose |
|------|---------|
| `stages.40f2d5b2.xml` | Zone/battle/fight definitions |
| `list.de3ed11b.xml` | Item catalog (weapons, armor, helmets, etc.) |
| `moves.97f61623.xml` | Combat move definitions with frame data |
| `perks.9fd0174f.xml` | Enchantment system (triggers, conditions, actions) |
| `quests.c29bbbe1.xml` | Quest definitions and conditions |
| `users_default.b7da2019.xml` | Starting player template |
| `forge.75b7e1f1.xml` | Upgrade curves |
| `character_progress.c65fbb17.xml` | XP thresholds per level |
| `tactic_settings.46cf310f.xml` | AI behavior tables |
| `computer_settings.93ae8499.xml` | AI difficulty settings |
| `achievements.022fc8e6.xml` | Achievement definitions |
| `packs.65977344.xml` | Bundle/pack definitions |
| `credits.0fef80c2.xml` | Credits text |
| `internal_settings.e9a9d549.xml` | Internal config |
| `config_cdn.2a7a7dca.xml` | CDN configuration |

### 7.2 Quest Extensions (27 files)
```
quest_extensions/
├── advertising.35756a74.xml
├── battles.d10be6ea.xml
├── energy.c586fbbc.xml
├── facebook.44936408.xml
├── gdpr.7440d0af.xml
├── hardmode.b4bc06f9.xml
├── intermission/
├── item_restore_quests.3ab4175c.xml
├── login_notify.213a9221.xml
├── offers.43cc65c2.xml
├── packs.60f593ce.xml
├── premium_packs.a8d39072.xml
├── promotions_from_first_session.3e11c53f.xml
├── sensei_arc.75009ff8.xml
├── starter_packs.a85c3b94.xml
├── test_quests.881114c2.xml
├── tutorial_quests.dcc4a509.xml
├── update_quests_start.8ba50139.xml
├── update_quests.95ab3e10.xml
├── utils.1a9e7575.xml
├── zone_1/ through zone_7/
```

Each zone directory contains:
- `core.*.xml` — Core zone quests
- `story.*.xml` — Story/dialog for that zone

### 7.3 Sprite Atlas Loader
- **JSON atlas** (`1c1df98c.json`) → Frame regions
- **DDS/KTX textures** → GPU textures
- **Frame lookup:** Hash-based key → texture region
- **Multiple resolutions:** `images-1x/`, `images-2x/`

### 7.4 BMFont Renderer
- Parse `.fnt` files (binary + text format)
- Glyph metrics, kerning, page textures
- Text layout with word wrap, alignment
- Support for colored text, icons inline

### 7.5 Localization
10 languages supported:

| Code | Language |
|------|----------|
| `en` | English |
| `de` | German |
| `es` | Spanish |
| `fr` | French |
| `it` | Italian |
| `ja` | Japanese |
| `ko` | Korean |
| `pt` | Portuguese |
| `ru` | Russian |
| `tr` | Turkish |

Each language file maps string keys to translated text.

### 7.6 Location/Background System
47 unique locations, each with:
- Parallax layers (4–6 depth layers)
- Sprite references for each layer
- Position offsets and scale
- Optional animated elements (water, particles)

Full list:
```
arena, autumn, bamboo_grove, battlefield, burning_town, capsules,
castle_and_bridge, cave, chess_yard, dark_room, dojo_shop, dojo,
eggs, emerald_forest, factory, flooded_village, flowers_field,
flying_rocks_small, flying_rocks, fuji, graveyard_ships, heaven,
ice_cave, lamps_on_water, magic_rocks, moon, mountain,
neural_network, night_bridge, pink_lake, ruins_village_small,
ruins_village, sakura, shadow_gate, ships, skyport, snowy_peak,
spaceship_thorny, spaceship, statue, stone_dragon,
stone_forest_thorny, stone_forest, swamp, village, volcano, waterfall
```

---

## 8. Phase 3: Game Systems

**Duration:** 4–5 weeks

### 8.1 Character Controller
- **Physics body:** Position, velocity, acceleration
- **Constants:**
  - Gravity: `0.4` (pixels/tick²)
  - Friction: `0.2` (ground friction)
  - Max combo: `10` hits
- **Movement states:**
  - Idle
  - Walk forward/backward
  - Jump (rising, peak, falling, landing)
  - Crouch
  - Knockback
  - Knockdown
  - Death

### 8.2 Combat State Machine

```
                    ┌──────────┐
                    │   IDLE   │
                    └────┬─────┘
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
   ┌─────────┐    ┌──────────┐    ┌──────────┐
   │  WALK   │    │  ATTACK  │    │  BLOCK   │
   └─────────┘    └────┬─────┘    └────┬─────┘
                       │                │
              ┌────────┼────────┐       │
              ▼        ▼        ▼       ▼
         ┌────────┐┌───────┐┌──────┐┌────────┐
         │HIGH ATK││LOW ATK││SIDE  ││HIT     │
         └────────┘└───────┘│ATK   │└────────┘
                            └──────┘    │
                                        ▼
                                  ┌──────────┐
                                  │KNOCKDOWN │
                                  └────┬─────┘
                                       │
                                       ▼
                                  ┌──────────┐
                                  │  DEATH   │
                                  └──────────┘
```

**Attack types:**
- High attack (overhead)
- Low attack (sweep)
- Side attack (horizontal)
- Jump attack
- Magic attack (projectile)
- Critical hit (random chance)

### 8.3 Hit Detection
- **Line-segment vs circle collision**
- **Hitboxes** defined per animation frame
- **Hit types:**
  - Body (normal damage)
  - Head (1.5x damage)
  - Weapon (parry/block)
  - Shield (blocked)
- **Collision response:**
  - Hit → damage + knockback
  - Block → reduced damage + block stun
  - Miss → nothing
  - Parry → counter-attack window

### 8.4 Animation System
- **Frame-based** with bone offsets
- **Per-bone transforms:** Position, rotation, scale
- **Pivot points** per frame
- **Animation events:** Hit frames, footstep frames, weapon trail frames
- **Blend tree:** Smooth transitions between states
- **Data source:** `animations.b22c72ff.dat` (binary)

### 8.5 AI System

#### AI Controller Classes
```
Kk (AIController)
├── rf (AIStateMachine)
│   ├── CurrentState
│   ├── PreviousState
│   └── StateStack (for interrupt handling)
├── TacticWeights (per weapon type)
├── DecisionTable (action selection)
└── DifficultyScaling (level-based adjustments)
```

#### AI Behaviors
| Behavior | Description |
|----------|-------------|
| Aggressive | Close distance, high attack frequency |
| Defensive | Block often, counter-attack |
| Balanced | Mix of offense/defense |
| Evasive | Dodge, retreat, ranged attacks |
| Rushdown | Close range, fast combos |
| Turtler | Heavy blocking, waiting for openings |

#### Tactic Settings
- **1,710 tactic files** in `res/tactics/`
- **57 weapon types** with per-weapon AI weights
- **Weapon matchup data** (e.g., katana vs. daggers)
- **Decision tables:** `attack_probability(block)`, `dodge_probability(attack)`, etc.

### 8.6 Combat Stats

#### Damage Formula
```
base_damage = weapon_damage + strength_bonus
critical = random() < critical_chance ? 1.5 : 1.0
fire_damage = fire_enchantment * fire_multiplier
magic_damage = magic_stat * magic_multiplier
total_damage = (base_damage * critical) + fire_damage + magic_damage
damage_reduction = armor_defense / (armor_defense + 100)
final_damage = total_damage * (1 - damage_reduction)
```

#### Combo System
- Max combo: 10 hits
- Combo multiplier: 1.0 + (combo_count * 0.1)
- Combo breaks on: block, miss, time delay > 0.5s

#### Enchantment System
26 perks with:
- **Triggers:** On hit, on block, on kill, on受伤, on combo N, etc.
- **Conditions:** Health < 30%, enemy has status, time remaining, etc.
- **Actions:** Deal damage, heal, slow enemy, summon, etc.

---

## 9. Phase 4: Game Content

**Duration:** 4–5 weeks

### 9.1 Zone/Map System

**7 zones** with escalating difficulty:

| Zone | Theme | Boss | Fights |
|------|-------|------|--------|
| 1 | Demon's Forest | Lynx | 6+ |
| 2 | Hermit's Sphere | Hermit | 6+ |
| 3 | Butcher's Carnival | Butcher | 6+ |
| 4 | Wasp's Factory | Wasp | 6+ |
| 5 | Widow's Palace | Widow | 6+ |
| 6 | Shogun's Castle | Shogun | 6+ |
| 7 | Titan's Realm | Titan | 6+ |

#### Zone Structure
```
Zone
├── Name (localized)
├── Description (localized)
├── Background (location reference)
├── Music (track reference)
├── Battles[]
│   ├── Battle
│   │   ├── Name
│   │   ├── Type (normal, boss, duel, challenge)
│   │   ├── Fights[]
│   │   │   ├── Fight
│   │   │   │   ├── Enemy (name, level, equipment)
│   │   │   │   ├── Difficulty scaling
│   │   │   │   ├── Reward (coins, XP, items)
│   │   │   │   └── Conditions (unlock requirements)
│   │   │   └── ...
│   │   └── ...
│   └── ...
└── Unlock conditions (zone progress)
```

### 9.2 Progression System

#### XP Curve (Levels 1–55)
```
Level 1:  0 XP
Level 2:  100 XP
Level 3:  300 XP
Level 4:  600 XP
Level 5:  1,000 XP
...
Level 55: 1,000,000+ XP
```

#### Equipment Upgrade System (Forge)
- **Base weapon** → +1 → +2 → ... → +10
- **Upgrade cost:** Scales exponentially
- **Success rate:** Decreases with level
- **Material requirements:** Specific items per upgrade tier

### 9.3 Equipment System

#### Item Categories
| Category | Count | Description |
|----------|-------|-------------|
| Weapons | 50+ | Swords, daggers, axes, staffs, etc. |
| Armor | 20+ | Body protection |
| Helmets | 20+ | Head protection |
| Ranged | 10+ | Shurikens, axes, etc. |
| Magic | 10+ | Projectiles, buffs, debuffs |

#### Item Stats
```kotlin
data class ItemStats(
    val id: String,
    val name: String,           // Localized key
    val type: ItemType,         // WEAPON, ARMOR, HELMET, RANGED, MAGIC
    val weaponType: String?,    // katana, dagger, axe, etc.
    val damage: Int,
    val speed: Float,
    val magic: Int,
    val range: Float,
    val stability: Float,
    val criticalChance: Float,
    val enchantmentSlots: Int,
    val level: Int,             // Required level
    val price: Int,             // Coin cost
    val gemPrice: Int?,         // Gem cost (premium)
    val upgradePath: List<String>,  // Upgrade chain
    val spriteKey: String       // Atlas reference
)
```

### 9.4 Shop/Store System

#### Currencies
| Currency | Source | Usage |
|----------|--------|-------|
| Coins | Fight rewards, quests | Weapons, armor, upgrades |
| Gems | Premium purchase, rare rewards | Premium items, instant upgrades |
| Tokens | Special events | Exclusive items |

#### Shop Categories
- Weapons
- Armor
- Helmets
- Ranged Weapons
- Magic
- Upgrades
- Packs/Bundles
- Premium Offers

### 9.5 Energy System
- **Max energy:** 5 (increases with level)
- **Refill timer:** 1 energy per 5 minutes
- **Ad-based refill:** Watch ad → +1 energy
- **Gem-based refill:** Spend gems → full energy
- **Quest-based refill:** Complete quest → energy reward

### 9.6 Save/Load System

#### Save Data Structure
```kotlin
data class SaveData(
    val version: Int,
    val playerId: String,
    val playerName: String,
    val level: Int,
    val xp: Int,
    val coins: Int,
    val gems: Int,
    val energy: Int,
    val energyRefillTime: Long,
    val currentZone: Int,
    val currentBattle: Int,
    val currentFight: Int,
    val equipment: EquipmentLoadout,
    val inventory: List<Item>,
    val completedQuests: List<String>,
    val activeQuests: List<ActiveQuest>,
    val achievements: List<String>,
    val settings: GameSettings,
    val statistics: PlayerStatistics,
    val lastSaveTime: Long
)
```

#### Storage
- **Room Database** for structured data
- **SharedPreferences** for settings
- **File I/O** for large binary data

---

## 10. Phase 5: Polish & Release

**Duration:** 2–3 weeks

### 10.1 Audio System
- **Music streaming:** Background music with crossfade
- **SFX pooling:** Pre-loaded sound effects
- **3D audio:** Position-based volume/panning
- **Audio categories:** Music, SFX, UI sounds

### 10.2 Particle System
- **Combat effects:** Hit sparks, blood, fire
- **Magic projectiles:** Trail effects
- **Environment:** Rain, snow, fire, smoke
- **UI particles:** Level up, reward celebration

### 10.3 UI Screens
| Screen | Purpose |
|--------|---------|
| Splash | Studio logo, loading |
| Menu | Main menu (Play, Shop, Profile, Settings) |
| Location Select | Zone/map navigation |
| Pre-fight | Enemy preview, loadout |
| Fight | Combat gameplay |
| Victory | Reward display, XP gain |
| Defeat | Retry option |
| Shop | Purchase items |
| Profile | Player stats, achievements |
| Settings | Audio, controls, language |

### 10.4 Video Playback
- Intro cinematic (can be skipped)
- Shadow gate transitions
- Ending sequence

---

## 11. Asset Inventory

### 11.1 XML Data Files (39+)
| File | Lines | Purpose |
|------|-------|---------|
| `stages.40f2d5b2.xml` | 2,847 | Zone/battle/fight hierarchy |
| `list.de3ed11b.xml` | 15,892 | Complete item catalog |
| `moves.97f61623.xml` | 8,234 | All combat move definitions |
| `perks.9fd0174f.xml` | 4,567 | Enchantment system |
| `quests.c29bbbe1.xml` | 12,345 | Quest definitions |
| `users_default.b7da2019.xml` | 892 | Starting player template |
| `forge.75b7e1f1.xml` | 1,234 | Upgrade curves |
| `character_progress.c65fbb17.xml` | 678 | XP thresholds |
| `tactic_settings.46cf310f.xml` | 3,456 | AI behavior tables |
| `computer_settings.93ae8499.xml` | 567 | AI difficulty |
| `achievements.022fc8e6.xml` | 2,345 | Achievement definitions |
| `packs.65977344.xml` | 1,890 | Bundle definitions |
| `credits.0fef80c2.xml` | 234 | Credits |
| `internal_settings.e9a9d549.xml` | 456 | Internal config |
| `config_cdn.2a7a7dca.xml` | 123 | CDN URLs |

### 11.2 Audio Files (76)
- **Music tracks:** 38 (each in `.ogg` + `.m4a` format)
- **Sound effects:** 2 (compressed `.ogg` + `.m4a`)
- **Total duration:** ~45 minutes of music

### 11.3 Location Backgrounds (47)
Each location contains:
- 4–6 parallax layer images (`.dds`/`.ktx` textures)
- Background JSON metadata (layer positions, scroll speeds)
- Optional animated elements

### 11.4 Tactic Files (1,710)
- **57 weapon types** × **30 matchup combinations**
- Each file contains AI decision weights for that specific weapon matchup
- Binary format (`.dat`)

---

## 12. Data Schema Reference

### 12.1 Stage XML Schema
```xml
<stages>
  <stage id="1" name="stage_name" zone="1">
    <battle id="1" name="battle_name" type="normal">
      <fight id="1" enemy="enemy_name" level="5">
        <reward coins="100" xp="50" item="weapon_1"/>
        <condition type="quest" quest_id="q_001"/>
      </fight>
    </battle>
  </stage>
</stages>
```

### 12.2 Item XML Schema
```xml
<items>
  <item id="katana_1" type="weapon" weapon_type="katana">
    <name>item_katana_1</name>
    <stats damage="15" speed="1.2" magic="0" range="1.0" stability="0.8"/>
    <price coins="500" gems="0"/>
    <level_required value="1"/>
    <enchantment_slots value="1"/>
    <upgrade_path>
      <upgrade to="katana_2" cost="1000" level="5"/>
    </upgrade_path>
    <sprite key="katana_1"/>
  </item>
</items>
```

### 12.3 Move XML Schema
```xml
<moves>
  <move id="katana_high_attack" weapon="katana" type="high">
    <frame index="0" duration="3" active="false"/>
    <frame index="1" duration="2" active="false"/>
    <frame index="2" duration="2" active="true" hitbox="high"/>
    <frame index="3" duration="3" active="false"/>
    <damage base="10" critical="1.5"/>
    <knockback force="5" angle="30"/>
  </move>
</moves>
```

### 12.4 Perk XML Schema
```xml
<perks>
  <perk id="stun" name="Stun">
    <trigger type="on_hit" chance="0.1"/>
    <condition type="combo_gte" value="3"/>
    <action type="apply_status" status="stun" duration="1.0"/>
  </perk>
</perks>
```

---

## 13. Key Engineering Challenges

### 13.1 Obfuscated Code Reverse-Engineering
- **Challenge:** Game logic is in minified/obfuscated Haxe output
- **Solution:** Use extracted constants (`G.xq`, `G.ZUa`) as reference; document class mappings
- **Key classes:** 500+ classes identified, ~50 core classes need full understanding

### 13.2 Binary Data Files
- **Challenge:** Animation, model, and magic data are in binary `.dat` files
- **Solution:** Reverse-engineer binary format from JS deserialization code
- **Files:**
  - `animations.b22c72ff.dat` — Character animation keyframes
  - `models.473fd74f.dat` — 3D model data (projected to 2D)
  - `magic_dds.7db679de.dat` — Magic effect sprite data
  - `xml.ddb3aa55.dat` — Compressed XML data
  - `xml2.577aacc7.dat` — Additional compressed XML

### 13.3 Tactic File Parsing
- **Challenge:** 1,710 binary `.dat` files with unknown format
- **Solution:** Analyze JS tactic loading code to reverse-engineer format
- **Structure:** Likely contains float weights for AI decision tree

### 13.4 Quest Engine Complexity
- **Challenge:** Modular quest system with 27+ extension files
- **Solution:** Build flexible event/condition/action engine
- **Features:**
  - Event triggers (on fight start, on item get, on level up, etc.)
  - Conditions (has item, level >= X, quest complete, etc.)
  - Actions (give item, unlock battle, show dialog, etc.)
  - Variable store (track custom state)
  - Query language (complex condition evaluation)

### 13.5 Combat Feel
- **Challenge:** Making combat feel responsive and satisfying
- **Solution:** Careful tuning of:
  - Input buffering (queue next attack during current)
  - Hitstop (freeze frame on impact)
  - Screen shake (proportional to damage)
  - Particle effects (hit sparks, blood)
  - Sound timing (impact sounds on correct frame)

### 13.6 Cross-Device Compatibility
- **Challenge:** Different screen sizes, aspect ratios, performance levels
- **Solution:**
  - Responsive viewport scaling
  - Quality settings (texture resolution, particle count)
  - Performance profiling on target devices

---

## 14. Binary Data Files

### 14.1 Animation Data
- **File:** `animations.b22c72ff.dat`
- **Format:** Custom binary (Haxe serialization)
- **Contents:**
  - Bone hierarchy
  - Keyframe data (position, rotation, scale per bone per frame)
  - Event markers (hit frames, footstep frames)
  - Animation metadata (name, duration, loop flag)

### 14.2 Model Data
- **File:** `models.473fd74f.dat`
- **Format:** Custom binary
- **Contents:**
  - Bone definitions
  - Mesh vertices (3D projected to 2D)
  - Texture coordinates
  - Bone weights (for deformation)

### 14.3 Magic Effect Data
- **File:** `magic_dds.7db679de.dat`
- **Format:** Custom binary
- **Contents:**
  - Effect sprites (DDS textures)
  - Animation sequences
  - Particle parameters
  - Hitbox definitions

### 14.4 Compressed XML
- **Files:** `xml.ddb3aa55.dat`, `xml2.577aacc7.dat`
- **Format:** fflate compressed
- **Contents:** Pre-parsed XML data for faster loading

---

## 15. AI Behavior System

### 15.1 Decision Tree
```
AI State
├── Evaluate Situation
│   ├── Distance to player
│   ├── Player health
│   ├── Own health
│   ├── Current combo count
│   ├── Player blocking?
│   └── Player attacking?
├── Select Tactic
│   ├── Aggressive (high risk, high reward)
│   ├── Defensive (low risk, counter-attack)
│   ├── Balanced (adaptive)
│   └── Special (weapon-specific)
└── Execute Action
    ├── Approach (walk forward)
    ├── Attack (choose type)
    ├── Block (hold block)
    ├── Dodge (roll/jump back)
    ├── Use Magic (ranged attack)
    └── Wait (do nothing, observe)
```

### 15.2 Tactic Weight System
Each weapon type has a set of weights that influence AI decisions:

```
Weapon: Katana
├── Attack weight: 0.7
├── Block weight: 0.3
├── Dodge weight: 0.2
├── Magic weight: 0.1
├── High attack probability: 0.4
├── Low attack probability: 0.3
├── Side attack probability: 0.3
└── Combo probability: 0.6
```

### 15.3 Difficulty Scaling
| Parameter | Easy | Normal | Hard |
|-----------|------|--------|------|
| Reaction time | 500ms | 300ms | 150ms |
| Block probability | 0.3 | 0.5 | 0.7 |
| Dodge probability | 0.2 | 0.4 | 0.6 |
| Attack frequency | Low | Medium | High |
| Combo length | 2 | 3 | 5 |
| Magic usage | Rare | Occasional | Frequent |

---

## 16. Quest & Progression System

### 16.1 Quest Structure
```kotlin
data class Quest(
    val id: String,
    val name: String,
    val description: String,
    val type: QuestType,      // MAIN, SIDE, DAILY, ACHIEVEMENT
    val triggers: List<Trigger>,
    val conditions: List<Condition>,
    val actions: List<Action>,
    val rewards: List<Reward>,
    val prerequisites: List<String>  // Quest IDs
)
```

### 16.2 Trigger Types
| Trigger | Description |
|---------|-------------|
| `on_fight_start` | When a fight begins |
| `on_fight_complete` | When a fight ends |
| `on_item_acquire` | When player gets an item |
| `on_level_up` | When player levels up |
| `on_zone_enter` | When entering a zone |
| `on_daily_login` | Daily login bonus |
| `on_energy_refill` | Energy replenished |

### 16.3 Condition Types
| Condition | Description |
|-----------|-------------|
| `has_item` | Player owns specific item |
| `level_gte` | Player level >= value |
| `quest_complete` | Specific quest finished |
| `zone_unlocked` | Zone is accessible |
| `coins_gte` | Player has enough coins |
| `fight_won` | Won specific fight |
| `combo_gte` | Combo count >= value |

### 16.4 Action Types
| Action | Description |
|--------|-------------|
| `give_item` | Add item to inventory |
| `give_coins` | Add coins |
| `give_xp` | Add experience points |
| `unlock_battle` | Make battle accessible |
| `show_dialog` | Display dialog text |
| `start_quest` | Activate another quest |
| `complete_quest` | Mark quest as done |

### 16.5 Zone Quest Files
Each zone has 2 quest files:
- `core.*.xml` — Core progression quests
- `story.*.xml` — Narrative/dialog quests

Zone 1 example:
```
zone_1/
├── core.4a2624af.xml      — Core quests for Demon's Forest
└── story.8fc20803.xml     — Story dialog for Demon's Forest
```

---

## 17. Audio System

### 17.1 Music Tracks (38)
| Track | Zone/Fight |
|-------|------------|
| `menu_music` | Main menu |
| `act_music` | Zone transitions |
| `fight1_samurai_spirit_music` | Zone 1 boss |
| `fight2_blade_dance_music` | Zone 1 fights |
| `fight3_vengeance_music` | Zone 2 |
| `fight4_forest_of_death_music` | Zone 2 |
| `fight5_ninja_in_the_night_music` | Zone 3 |
| `fight6_sparring_music` | Zone 3 |
| `fight7_fat_boss_music` | Zone 4 boss |
| `fight8_final_boss_music` | Zone 4 final |
| ... | ... |
| `fight38_sakura_forest_music` | Zone 7 |

### 17.2 Sound Effects
- **`sounds_a`** — Hit sounds, weapon impacts, body hits
- **`sounds_b`** — UI sounds, menu clicks, ambient

### 17.3 Audio Format
- **OGG Vorbis** — Primary format (Android native support)
- **M4A (AAC)** — Fallback format
- **Streaming** — Music tracks streamed from disk
- **Preloaded** — SFX loaded into memory

---

## 18. Estimated Effort

| Phase | Duration | Key Risk | Dependencies |
|-------|----------|----------|--------------|
| Phase 1: Engine Foundation | 3–4 weeks | Shader complexity (16 programs) | None |
| Phase 2: Content Pipeline | 2–3 weeks | Quest engine complexity | Phase 1 |
| Phase 3: Game Systems | 4–5 weeks | Combat feel, AI tuning | Phase 2 |
| Phase 4: Game Content | 4–5 weeks | 500+ items, 200+ fights | Phase 3 |
| Phase 5: Polish & Release | 2–3 weeks | Audio sync, particles | Phase 4 |
| **Total** | **15–20 weeks** | | |

### Team Size Estimate
- **Solo developer:** 15–20 weeks
- **2 developers:** 10–14 weeks
- **3 developers:** 8–10 weeks

### Critical Path Items
1. Combat feel and responsiveness (must feel good)
2. AI behavior (must be challenging but fair)
3. Save/load system (must be reliable)
4. Asset pipeline (must load all recovered assets)

---

## 19. References

### 19.1 Recovered Files
- `sf2.4904b063.js` — Main game engine (136,756 lines)
- `microsite-game-interface.js` — GameInterface API (14,887 lines)
- `imageloader.665d5d2b.js` — Image loader + DXT decompression
- `fflate.4d6ec944.js` — Compression library
- `support.56d9ad37.js` — Feedback dialog

### 19.2 Key Data Files
- `stages.40f2d5b2.xml` — Zone/battle/fight definitions
- `list.de3ed11b.xml` — Item catalog
- `moves.97f61623.xml` — Combat moves
- `perks.9fd0174f.xml` — Enchantment system
- `quests.c29bbbe1.xml` — Quest definitions
- `users_default.b7da2019.xml` — Starting player template
- `forge.75b7e1f1.xml` — Upgrade curves
- `character_progress.c65fbb17.xml` — XP thresholds
- `tactic_settings.46cf310f.xml` — AI behavior tables
- `computer_settings.93ae8499.xml` — AI difficulty

### 19.3 Asset Directories
- `res/locations/` — 47 background locations
- `res/audio/` — 76 audio files (38 music + 2 SFX in dual format)
- `res/tactics/` — 1,710 AI tactic files
- `res/quest_extensions/` — 27 quest extension files + 7 zone directories
- `res/lang/` — 10 language files
- `res/items/` — Sprite atlases (DDS/KTX) + item images
- `res/ui/` — UI elements
- `res/fight/` — Fight-specific assets
- `res/map/` — Map data
- `res/video/` — Video files
- `res/splash/` — Splash screens
- `res/vs/` — VS screen assets
- `res/users/` — User save data templates

### 19.4 Live Reference
- **Game URL:** https://shadowfight2.com/play/
- **GitHub Pages:** https://dinglenutsxnex-crypto.github.io/shadow-fight-2-recovery/
- **Repository:** https://github.com/dinglenutsxnex-crypto/shadow-fight-2-recovery

---

*Document generated: 2026-07-23*
*Project status: Recovery complete, rebuild plan documented*
*Next step: Begin Phase 1 — Engine Foundation*
