---
name: WebGL2 preview limitation
description: Environment constraint affecting the recovered browser game preview
---

The recovered Shadow Fight 2 browser runtime requires a hardware-accelerated WebGL2 context. The Replit screenshot browser in this environment cannot create WebGL2, so a black canvas is not evidence that local assets or the static server failed.

**Why:** The runtime reaches its Haxe startup log and local resource routes return successfully, but the preview browser reports that WebGL context creation fails.

**How to apply:** Keep the WebGL capability check and fallback screen in the entry page. Validate the original game path in a hardware-accelerated browser before investigating asset-loading failures.