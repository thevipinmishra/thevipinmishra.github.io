// src/pages/rss.xml.js
import rss from "@astrojs/rss";

const postImportResult = import.meta.globEager("./blog/*.md");
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    // `<title>` field in output xml
    title: `Vipin Mishra's Blog`,
    // `<description>` field in output xml
    description:
      "I design & develop modern websites with pixel-perfection in mind, love solving complex design problems & have a strong devotion towards CSS",
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: import.meta.env.SITE,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: posts.map((post) => ({
      link: post.frontmatter.slug,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.publishDate,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
