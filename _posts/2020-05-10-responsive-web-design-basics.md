---
layout: post
title: "Responsive Web Design for Absolute Beginners"
comments: true
author: "Vipin Mishra"
description: "Get started with Responsive Web Design in a few minutes & make your layouts accesible for all kind of screen sizes"
featuredImage: "https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
---

Hey all, What's up?

Today, let's talk about **Responsive Web Design** and I'll go through the basics of it like how you can get started, the syntax & things to take care of while doing it.

A couple of basic examples will be here, not very real world things but simple ones to help you understand the basics of it.

So, what is 'Responsive Web Design' actually ?

Most of you already know it if you're into writing HTML/CSS and it's all about making your websites accessible on all kind of screen sizes.

Today, websites aren't viewed only on just a particular device but on all kind of devices, & mostly smartphones.

Long story short, a Responsive Website is must now a days and I rarely come accross any website that's not responsive now a days. like not even .1%.

## Get Started with Responsive Web Design

Suppose we have a design we are working on & got an **index.html** file.

So, first of all, make sure that your .html file got a meta viewport tag!

It looks like this:

{% highlight html %}

<meta name="viewport" content="width=device-width, initial-scale=1">
{% endhighlight %}

& what it does is very simple.

It tells the browser to keep the width of the page equal to the screen size, not zommed-in or zoomed out.

Chances are high that you already have it in your project but if not, make sure it's there. you can read more about it on [CSS Tricks](https://css-tricks.com/snippets/html/responsive-meta-tag/).

### CSS Media Queries

Think of these like a special filter that can be applied to your CSS. you put a query related to media it's being rendered on and if it matches, styles will be changed.

There are a bunch of media types but it's just `screen` (by default) that we will be dealing with.

So, it's just some additional CSS that we add to our design and there are a couple of ways to do it.

### `media` attribute in the stylesheet

You can do something like this:

{% highlight html %}

<link rel="stylesheet" media="(min-width: 900px)" href="desktop.css">
{% endhighlight %}

& in this case, the styles defined in **desktop.css** will only reflect when the screen size has a **minimum width of 900px**. I will talk about these keywords in a few seconds.

& then, there's another way and that's by using `@import`.

& I'm not going to talk about it as it's not a recommended way to doing things and you should completely avoid it because of performance issues.

### Query keywords

well, there are a lot of things we can query on & you can see them [here](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp).

but most of the times, or I would say 99% of the times, you will be dealing with these:

<table class="ui fixed celled compact table">
  <thead>
    <tr><th>Parameters/Keywwords</th>
    <th>Use Cases</th>
  </tr></thead>
  <tbody>
    <tr>
      <td><code>min-width</code></td>
      <td>Applied only when the browser width is equal to or greather than the defined value.</td>
    </tr>
    <tr>
       <td><code>max-width</code></td>
      <td>Applied only when the browser's width is equal to or less than the defined value.</td>
    </tr>
    <tr>
       <td><code>min-height</code></td>
      <td>Applied only when the browser's height is equal to or greater than the defined value.</td>
    </tr>
    <tr>
       <td><code>max-height</code></td>
      <td>Applied only when the browser's height is equal to or less than the defined value.</td>
    </tr>
    <tr>
       <td><code>orientation=portrait</code></td>
      <td>for Portrait orientation. how does it know? - when browser's height is greather than the width.</td>
    </tr>
    <tr>
       <td><code>orientation=landscape</code></td>
     <td>for landscape orientation. how does it know? - when browser's height is less than the width.</td>
    </tr>
  </tbody>
</table>

### The Preferred way of Writing Media Queries

so, this is what I & MOST of other people do.

**Write your media queries in the CSS File itself**

now that might change when you are dealing with any CSS Preprocessors but for plain and simple CSS, this is what you should do.

Now, before going further, here are a few things to know.

#### The Syntax (too late to mention 🤐?)

![media query - Syntax]({{'/images/media.png' | relative_url}} "media query - Syntax")

> Here, `.container` will have a **max-width** of 600px at minimum viewport width of **769px & above**.

#### Always add your media-queries at the very end of your CSS.

& why? because it will keep things organized! you don't have to write a different media-query block for every single thing you design.
also, it may cause, **specificity** issues and you'll have hard time dubugging that for sure!

#### Take care of the **specificity**.

This is kind of important as I myself faced it so many, like 5-6 times untill I figured it out.

So suppose, you got a style defined like this:

<!-- prettier-ignore-start -->
{% highlight css %}
.container section .title span {
  font-size: 2rem;
}
{% endhighlight %}
<!-- prettier-ignore-end -->

So, you're being very specific for you `span` element here. & now, for media queries, what if you do something like this:

<!-- prettier-ignore-start -->
{% highlight css %}
@media (min-width: 900px) {
  span {
    font-size: 3rem;
  }
}
{% endhighlight %}
<!-- prettier-ignore-end -->

Do you think its gonna work? `span` will have a 3rem of font-size on a minimum width of 900px ?

_No, It wont!!!!_

font-size of 3rem will be overridden by 2rem and that's because of the specificity, **a very important concept of CSS**.

### Responsive Web Design - Basic Examples

Yeah, only basic examples in this post, don't want to put too much on you as it's all about the fundamentals.

So, 1st example is so basic that you would never do it in any of your actual layouts! 😂

Say we have a box of 100px height & width, with a background of black.

{% highlight html %}

<div class="box"></div>
{% endhighlight %}

<!-- prettier-ignore-start -->

{% highlight css %}
.box {
  height: 100px;
  width: 100px;
  background-color: #000;
}
{% endhighlight %}

<!-- prettier-ignore-end -->

Now, I want you to open a codepen or JSBin and write this code to know things on your own.

You should now see a black box of 100px height & width.

Now, what if we want to change its background color and even the height & width at a minimum-width (viewport width) of lets say **769px** ?

let's add this CSS:

<!-- prettier-ignore-start -->

{% highlight css %}
@media screen and (min-width: 769px) {
  .box {
    height: 150px;
    width: 150px;
    background-color: #f34949;
  }
}
{% endhighlight %}

<!-- prettier-ignore-end -->

& boom -- your box will become red & have a height & width of 150px as soon as the browser width/viewport width hits the 769px and above.

You can also try `max-width` istead of min-width and observe the things.

### Wrapping it Up

So, it was all about basics in this post and I think this is the thing most people seem diffucult to understand. I hope it was clear enough, let me know what you thing of it in the comments below.

& suggest me some real word design patterns to cover as an practical example of Responsive Design 🙂
