---
date: 2026-07-03
layout: post.njk
title: "Hex Map Editor"
preview: "A native and web-based hex map editor written in Rust, built on top of the iced GUI framework. It's my excuse to build hex-tile worlds for tabletop games while learning canvas rendering and cross-compiling Rust to WASM and Windows."
image: "/assets/img/hex-map-editor-icon.png"
---

I wanted an easy way to sketch out hex-tile maps for tabletop games without wrestling with a general-purpose drawing tool, so I built one myself. Hex Map Editor is a lightweight Rust application for drawing and exporting hexagonal grid maps, and it runs both as a native desktop app and directly in the browser.

## Try it

**[stephens.ac/hex-map-editor](https://www.stephens.ac/hex-map-editor/)** • There is nothing to install, it runs straight in the browser.

![](/assets/img/hex-map-editor-icon.png)

## Upcoming features
- **Perlin noise layers** for adding texture, detail, or cover to a scene
- **Paint bucket tool** for quickly filling terrain or carving out space in cave maps
- **Resizable brush** for faster placement of coarse detail
- **Local saves** so you can come back and keep editing later

## How I built it

It's built on [iced](https://iced.rs/), a Rust GUI framework using an Elm Architecture. The same codebase compiles to two different targets: a native binary, and a WebAssembly bundle (built with [trunk](https://trunk-rs.github.io/trunk/) that renders through WebGL. File handling currently uses [rusty file dialogs](https://github.com/PolyMeilex/rfd), a widely used cross-platform library. Getting one codebase to behave sensibly across both has been most of the actual work.
    
## Open source

**[github.com/redpanda20/hex-map-editor](https://github.com/redpanda20/hex-map-editor)**

It's still an early, evolving project, but it's already replaced my old workflow. If you're curious how a Rust GUI app compiles down to both a desktop binary and a WASM/WebGL bundle, or want to file an issue or contribute, the repo's open.
