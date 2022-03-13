---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
title: Easy Media Queries using SASS Mixin
publishDate: 09 Mar 2022
author: Vipin Mishra
description: A easy to use SASS mixin for responsive design using plain sass/scss.
tags: [Sass, Responsive Design]
---

One of the pain points of designing with Vanilla CSS/SCSS is handling and structuring of the media queries you write for the responsive design.

If you're using SASS (which you should, instead of plain CSS), you can of course nest the media queries like this.

```scss
.circle {
  background: #2c3e50;
  color: #fff;

  @media (min-width: 992px) {
    background: #ddd;
  }
}
```

Yeah, it works, but it's too repetitive if you're writing breakpoints every single time.

The number of breakpoints might also vary across the project, that may bring inconsistency to your overall strategy of making the layouts responsive.

[SASS mixins](https://sass-lang.com/documentation/at-rules/mixin) can do wonder and reduces so much of repetitive work, you just define a mixin and can re-use it throughout your stylesheet.

## The SASS Media Query Mixin

Here I am sharing a mixin that I personally use in my projects or at my work if I'm using plain SCSS to style my layouts.

It's based on **mobile-first** pattern and goes like this.

```scss
$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px,
);

@mixin media($size) {
  @media (min-width: map-get($breakpoints, $size)) {
    @content;
  }
}
```

Here you have a [SASS map](https://sass-lang.com/documentation/values/maps) that basically holds pairs of keys and values. Keys being the short code of breakpoints that we will be using in our project and their respective values in `px` that you can of course change with `em` or any other unit you prefer.

I got these values from the [bootstrap breakpoints](https://getbootstrap.com/docs/5.1/layout/breakpoints/). You can use [breakpoints from Tailwind CSS](https://tailwindcss.com/docs/responsive-design) or whatever you want, it's just about putting key-value pairs.

### Usage of the mixin

You can import the mixin to any stylesheet (.scss) and can use it like this.

```scss
// Import the mixin from the relative path
@use "../styles/mixins" as *;

a {
  font-weight: 600;
  font-size: var(--size-3);
  transition: color 150ms ease;

  // Use it like this
  @include break(md) {
    font-size: var(--size-4);
  }
}
```

Here I'm using `@use` rule from sass, that basically loads mixins, functions and variables from other sass files, also called modules.

Make sure you have the latest sass version available, as it's not supported on older versions of sass. You can read more about it [here](https://sass-lang.com/documentation/at-rules/use).
