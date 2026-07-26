# Shadow Fight 2 Recovery

## Project overview

This repository is a recovered static browser build of Shadow Fight 2. The game is a Haxe-generated JavaScript runtime with WebGL/Web Audio browser dependencies and a large local `res/` asset tree.

## Running

- `npm run dev` starts the static server on port 5000.
- The Replit preview uses the configured `Start application` workflow.
- `npm run beautify` writes non-destructive formatted copies under `readable/`.
- `npm run analyze-map` writes `analysis/map-report.md` from the map atlases and stage XML.

## Build workflow

The game runtime is split across `src/sf2/` (numbered source files). After editing any file there, rebuild the deployed bundle:

```
npm run build
```

This concatenates all `src/sf2/NNN-*.js` files (in numeric order) into `sf2.4904b063.js` at the project root.

The following support bundles are **not** rebuilt by the build script — they live at the project root and their originals are backed up in `old/`:

- `microsite-game-interface.js` — GameInterface SDK stub (loaded before the game)
- `fflate.4d6ec944.js` — decompression library
- `imageloader.665d5d2b.js` — image loader
- `support.56d9ad37.js` — platform support utilities

If any of these are missing from the root (e.g. after a fresh clone), copy them from `old/`:

```
cp old/fflate.4d6ec944.js old/imageloader.665d5d2b.js old/support.56d9ad37.js old/microsite-game-interface.js .
```

## Important constraints

- The original hashed bundles remain the source of truth and are not overwritten by analysis tools.
- The bundle references source maps that are not included, so readable output is formatted compiled JavaScript, not recovered original Haxe source.
- The map is assembled at runtime from atlas JSON, textures, and stage XML; it is not stored as a Godot scene.
- The game requires WebGL2 with hardware acceleration. Replit's internal screenshot browser shows "WebGL2 is required" — this is expected. Open the preview in a real browser to play.