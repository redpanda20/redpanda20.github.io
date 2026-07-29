---
date: 2024-09-30
layout: post.njk
title: "Web Elements"
preview: "A grab bag of standalone web UI components (login, register, upload-picture) that I kept rebuilding from scratch, so I finally collected them in one place and tested them properly across devices."
image: "https://opengraph.githubassets.com/34bf194a4d930e701d3fd2b83841a377db00185173b575659d4205d42b6dd323/redpanda20/web-elements"
---

<p>Every project seems to need a login form, a register form, or a profile picture uploader, and every time I found myself rebuilding the same thing slightly differently. <a href="https://stephens.ac/web-elements">Web Elements</a> is my attempt to stop doing that: a small collection of standalone web components I keep reaching for.</p>

<br>
    
<p>Right now it covers a <code>login</code> form, a <code>register</code> form, and an <code>upload-picture</code> element, each built in plain HTML and CSS so they can be dropped into a project without dragging in the rest of a framework. Because these are the kind of components people actually interact with on their phones, I've made a point of testing them across multiple devices rather than just checking them in one browser window on a desktop monitor.</p>

<br>
    
<p>The whole thing is MIT licensed, so it's free to copy into your own projects. Requests or contributions are welcome if there is a common element you find yourself rebuilding too.</p>
