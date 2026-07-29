---
date: 2026-06-29
layout: post.njk
title: "Hex Map Editor"
preview: "A native and web-based hex map editor written in Rust, built on top of the iced GUI framework. It's my excuse to build hex-tile worlds for tabletop games while learning canvas rendering and cross-compiling Rust to WASM and Windows."
image: "/assets/img/hex-map-editor-icon.png"
---


<p>I wanted an easy way to sketch out hex-tile maps for tabletop games without wrestling with a general-purpose drawing tool, so I built one myself. <a href="https://stephens.ac/hex-map-editor">Hex Map Editor</a> is a small Rust application for drawing and exporting hexagonal grid maps, and it runs both as a native desktop app and directly in the browser.</p>

<p>Under the hood it's built with <a href="https://iced.rs/">iced</a>, a Rust GUI framework with a canvas widget that made it straightforward to draw and interact with a hex grid. That same codebase compiles to two very different targets: a Linux native binary (including a cross-compiled Windows build using mingw) and a WebAssembly bundle built with <a href="https://trunkrs.dev/">Trunk</a> that renders through WebGL. Getting one Rust project to behave sensibly across both was most of the interesting work.</p>

<p>A couple of practical bits round it out: file dialogs are handled with the <code>rfd</code> crate so opening and saving maps feels native on every platform, and finished maps can be exported as PNGs using the <code>image</code> crate. The release profile is tuned for size over speed, which matters a lot more when the whole thing has to be downloaded before it runs in a browser tab.</p>

<img src="/assets/img/hex-map-editor-icon.png" alt="" />
    
<p>It's still an early, evolving project (currently sitting at v0.4.0), but it's already replaced my old workflow of manually placing hexagons in a vector editor.</p>
