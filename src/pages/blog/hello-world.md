---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
title: New Year, New Portfolio!
publishDate: 25 Dec 2021
author: Vipin Mishra
heroImage: "/assets/blog/hello-world.jpeg"
description: All about my new portfolio re-design, built with Astro, Bootstrap, SASS + Open Props.
tags: [astro, sass]
---

Hey there, welcome to my brand new portfolio!

Even though I never started doing web-design with the intentions to pursue my career in this, I finally got a job in April 2020 after trying several other career options that I don't even want to mention now, but the bottom line is, I'm a full-time Web Designer now, hurray!?

## The New Portfolio Design

Ever since I got a new job, I wanted to update my portfolio, like to make it a little bit Job-oriented, I started working on a couple of portfolio designs as well, but they never actually made it to the Internet because I never got enough time to focus on those.

I finally started working on a new re-design in first week of December 2020, and here it is, live!

### My Choice of Framework

I've used [jekyll](https://jekyllrb.com/) a lot in the past to create static sites, but setting up the dev environment to run jekyll is very old school now, you need Ruby + Jekyll as a Ruby Gem to run, which is pretty heavy on resources.

With so many options in the community right now, I decided to go ahead with [Astro](https://astro.build/), their tagline being **Build faster websites with less client-side Javascript**.

The thing I liked most about Astro is, you can use any JavaScript frontend library like React, Vue, Svelte, etc., & in return you get just plain old html with zero javascript by default. now, that doesn't mean, you can't get client side javascript for your interactive components, Astro got them covered as well, they call it **Partial Hydration** & you can read the documentation [here](https://docs.astro.build/core-concepts/component-hydration/).

They also have their special `.astro` file which is pretty similar to [Vue's Single File Component](https://vuejs.org/v2/guide/single-file-components.html), with scoped styles, JSX like expressions, etc.

Here's a valid `.astro` file, the optional style block is scoped to this component/page only (can be global as well).

```astro
---
const message = "Hello World";
---

<p>{message}</p>

<style>
  p {
    font-weight: 600;
    font-family: "Source Code Pro";
  }
</style>
```

### Tools I've used to Built this Portfolio.

- Astro as my main framework.
- Custom Bootstrap build + SASS to design my components & web pages.
- [Open Props](https://open-props.style/) for a good amount of CSS Custom Properties to use them as my design tokens.
- [Phosphor Icons](https://phosphoricons.com/) for all the icons I've used in this site.
- `Astro.fetchContent()` to fetch my `.md` files that can be used with `paginate()` to get paginated data for my blog.
- [Dracula theme](https://draculatheme.com/) for the syntax highlighing on my code blocks along with **Source Code Pro** font.

This can not be the best set of tools & tech you'll see for what I needed, but I'm pretty satisfied with the experience I had building this.

Got a quick feedback? or anything to talk about? please send them on my [telegram](https://t.me/thevipinmishra).

With that note, thanks for the read and **Happy New Year** :)
