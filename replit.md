# Shadow Fight 2 Recovery

## Project overview

This repository is a recovered static browser build of Shadow Fight 2. The game is a Haxe-generated JavaScript runtime with WebGL/Web Audio browser dependencies and a large local `res/` asset tree.

## Running

- `npm run dev` starts the static server on port 5000.
- The Replit preview uses the configured `Start application` workflow.
- `npm run beautify` writes non-destructive formatted copies under `readable/`.
- `npm run analyze-map` writes `analysis/map-report.md` from the map atlases and stage XML.

## Important constraints

- The original hashed bundles remain the source of truth and are not overwritten by analysis tools.
- The bundle references source maps that are not included, so readable output is formatted compiled JavaScript, not recovered original Haxe source.
- The map is assembled at runtime from atlas JSON, textures, and stage XML; it is not stored as a Godot scene.