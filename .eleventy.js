const htmlmin = require("html-minifier");
const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

  // Resolves a URL against a base - leaves already-absolute URLs (e.g. external
  // thumbnail images) untouched, and turns relative paths (e.g. "/posts/foo/")
  // into full URLs for use in canonical links, og:image, og:url, etc.
  eleventyConfig.addFilter("absoluteUrl", (url, base) => {
    try {
      return new URL(url, base).toString();
    } catch (e) {
      return url;
    }
  });

  // Format post dates as e.g. "4 November 2025" instead of the raw JS Date string
  eleventyConfig.addFilter("readableDate", (date) => {
    return new Date(date).toLocaleDateString("en-NZ", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
  });

  // Add posts collection
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });

  // HTML minification
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if(outputPath && outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        minifyCSS: true,
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
      });
    }
    return content;
  });

  // CSS Minification
  eleventyConfig.addPlugin(lightningCSS);

  return {
    dir: {
      input: "src",
    },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
  };
};
