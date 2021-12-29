---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
title: Customizing Bootstrap 5 Using Sass
publishDate: 27 Dec 2021
author: Vipin Mishra
heroImage: "../../../public/assets/blog/customizing-bootstrap-5-sass.png"
description: A quick guide to customizing Bootstrap 5 using Sass. Following it, you can get a fully customized Bootstrap build as per you project needs.
tags: [Sass, bootstrap]
---

Bootstrap is the most popular CSS Library/Framework to build mobile-first responsive websites with powerful grid system, pre-built components and a good amount of utility classes.

## Defaults are Good, But not Always Enough

For most of the times, the default build can get the work done and it's all good, but sometimes you need to customize the default values of what Bootstrap provides by default.

Let's say you are at your work working on a big project, or maybe you got a project to work on that has different colors, spacings, fonts, etc. and you want the bootstrap to get all the work done but with the custom values.

What if you need more than 12 columns in the grid-system for some reason, what if you want to extend the spacing utilities - let's say 10, what if you want to change the set of colors you have (`bg-primary`, `bg-secondary`, etc..)

To do this, we need 2 things, the Bootstrap's Sass source files and the **Sass** itself to manuplate and compile the source files.

We can download the bootstrap source files from [GitHub releases](https://github.com/twbs/bootstrap/releases/tag/v5.1.3) but we will be doing it through [npm](https://www.npmjs.com/) to avoid extra work & get future updates very easily.

Let's see how we can leverage the true power of Bootstrap using Sass.

### Customizing Bootstrap 5 Using Sass.

For this article, the goal would be to customize bootstrap 5 the way so that we can have following things.

1. Let's say **15** grid columns, instead of 12.
2. spacing utilities till 10 units. (by default it's 5).
3. Only have the CSS for **Container**, **Grid**, **Utilities** & **Buttons** in our final bootstrap build.
4. We will get rid of border-radius on all our buttons. (just for fun, lol).

& this should give you a clear idea on how you can get your own customized Bootstrap build in almost no time.

Let's start. I'll be doing this on a **vanilla html/css/Sass** project, but you can do this for any project that has Sass + Bootstrap available.

If you have NodeJS installed, you should have `npm` available that you can verify using `npm -v` to get the version of Node Package Manager. Install it from [here](https://nodejs.org/en/) if you don't already have it.

I've an empty directry named **custom-bootstrap** & I'll do a `npm init y` to initialize a base **package.json** file that you can ignore for now.

Let's install Sass & Bootstrap as a dependency.

I'm using **npm** to do this, but you can use _yarn_ or _pnpm_, whatever you prefer. open the terminal and run the following command.

```bash
npm install sass bootstrap
```

If everything goes well, your package.json will now have `Sass` & `bootstrap` as a dependency. You will also have a folder named **node_modules** which have the source for our dependencies.

Now let's create our source files. we will have 2 files, `index.html` & `bootstrap.scss`. Add a very basic boilerplate to your `index.html` file.

<p class="message info">You can hit <kbd>! + Tab</kbd> in a <code>html</code> file to create a basic html boilerpate inside VS Code using <a href="https://emmet.io/">emmet</a>.</p>

Now that we have our setup done, let's move on to the good part. open `bootstrap.scss` file inside your code editor & paste the below snippet.

```scss
// 1. Functions
@import "./node_modules/bootstrap/scss/functions";

// 2. Put your variable overrides here

// 3. Mixins
@import "./node_modules/bootstrap/scss/mixins";
// 4. Variables
@import "./node_modules/bootstrap/scss/variables";
// 5. Container
@import "./node_modules/bootstrap/scss/containers";
// 6. Grid
@import "./node_modules/bootstrap/scss/grid";
// 7. Buttons
@import "./node_modules/bootstrap/scss/buttons";
// 8. Utilities
@import "./node_modules/bootstrap/scss/utilities";
// 9. Utilities API to extend them
@import "./node_modules/bootstrap/scss/utilities/api";
```

Now the path to import can differ with the project & folder structure you have, all we want is the scss files from bootstrap that we downloaded through npm.

Here in this `bootstrap.scss` file, we are importing only the files that are required to achieve our goals that we set before getting started. Now the order for first 3 things matter here.

1. **Functions [Required]** - you need them at top to manipulate colors, SVGs, do calculations, etc.
2. **Variable overrides** - We need to change the default values from bootstrap here, we'll make our changes here, but later.
3. **Mixins [Required]** - Reusable mixins required to generate css.
4. **Variables** - Whole set of default Sass variables from bootstrap.
5. **Container** - scss for bootstrap container.
6. **Grid** - Grid scss so that we can manuplate the columns.
7. **Buttons** - to remove the border-radius from them. (Remember the goals we set earlier.)
8. **Utilities** - Utilities like position, floats, margin & padding, height & width etc. (Again, we need to extend them till 10 units.)
9. **Utilities API** to generate class names based on the Sass map in `_utilities.scss`.

This should be enough to compile our custom build with only the parts we have imported. Now, open the `package.json` file, it should have a test script that we need to customize or you can also add a new one.

```json
 "scripts": {
    "compile-css": "sass --watch bootstrap.scss:bootstrap.css"
},
```

Here we have defined a npm-script with the name of **compile css** and added a command to compile the `bootstrap.scss` into `bootstrap.css` (refer to [Sass cli](https://Sass-lang.com/documentation/cli/dart-Sass) options for more).

Now, open your terminal and run the following command to build the css files.

```bash
npm run compile-css
```

If you've done everything as explained above, it should throw a message in console that `Compiled bootstrap.scss to bootstrap.css.`.

Note that we've also added the `--watch` flag to the script so that we don't have to run the script every time we make any change to our .scss file.

Now let's customize this build as per our needs. we will be adding following scss lines to our **Variable overrides** section.

1. Getting 15 Grid columns instead of 12.

```scss
$grid-columns: 15;
```

2. Extending Spacing Utilities till 10 Units.

```scss
$spacer: 1rem;
$spacers: (
  0: 0,
  1: $spacer * 0.25,
  2: $spacer * 0.5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3,
  6: $spacer * 4,
  7: $spacer * 5,
  8: $spacer * 6,
  9: $spacer * 7,
  10: $spacer * 8,
);
```

3. We have already achieved ths part. Our bootstrap.css file already has css for the parts we imported, Container, Grid, Utilities & Buttons.

4. Getting rid of border-radius on our Buttons.

```scss
$btn-border-radius: 0;
```

That should be enough to get things done. Check your console, you should have your scss compiled message. Now do check the final css to confirm the changes.

Bootstrap documentation provides the Sass variables relevant to the component you want to customize, and you can also visit the `_variables.scss` file on github to see them all at once.

I hope this guide was helpful for you, I think Custom Bootstrap builds are very powerful to achieve custom designs very quickly and in very less time compared to custom css or any other time-taking methods.
