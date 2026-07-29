---
date: 2025-05-09
layout: post.njk
title: "Alumina"
preview: "A hobbyist programming language I'm building from scratch in Rust, compiling down to assembly with nasm and ld. Named after aluminium oxide, since it's meant to be lightweight and unglamorous rather than flashy."
image: "https://opengraph.githubassets.com/c2a031e8ab6ed628999ec3664a9d13584624e7b9fe07844cb71c2fc98fe033cd/redpanda20/alumina-lang"
---

<p>Every so often I get the urge to understand a tool from the ground up instead of just using it, and for a while that urge pointed at compilers. <a href="https://github.com/redpanda20/alumina-lang">Alumina</a> is the result: a small hobbyist programming language and compiler, written in Rust, that I've been chipping away at for fun.</p>

<p>The name comes from aluminium oxide, the common natural oxide of aluminium; the project itself borrows that same spirit of being unglamorous but sturdy. It was kicked off after following along with <a href="https://github.com/orosmatthew/hydrogen-cpp">orosmatthew's Hydrogen language series</a>, which is a genuinely great resource if you want to see a compiler built step by step.</p>

<p>The compiler is split into a few focused pieces, a <code>char_reader</code> for lexing source text, a <code>flat_tree</code> structure for representing the parsed program, and the main <code>alumina_compiler</code> crate that ties it together and emits output assembled with <code>nasm</code> and linked with <code>ld</code>. Building it has meant spending a lot of time thinking about how source text turns into something a CPU can actually run, which is exactly the kind of rabbit hole I enjoy.</p>

<br>
    
<p>It's a solo, ongoing project and I'm not taking pull requests on it for now, since half the point is doing the design thinking myself. That said, the repo is public if you want to see how it's put together or follow along as it grows.</p>
</div>
