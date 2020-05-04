---
layout: post
title: "Getting Started with CSS Flexbox in 2020 - Part 2"
comments: true
description: CSS Flexbox for absolute begginers, Learn Flexbox the right way! - Part 2
author: "Vipin Mishra"
---

Hey, welcome back. this is **part 2** of the [Flexbox Guide](https://thevipinmishra.github.io/2020/05/01/all-about-flexbox.html) I published a few days back. I hope part 1 was easy enough to digest, if it was, lets start with the part 2!

In the last post, I talked about the properties we add to the flexbox container that control the layouts alignment (on both axes) and extra space inside it. today, it's all about the flex-items we will be dealing with.

## Properties for Flex Items

Let's start with `flex-grow`

### Flex Grow

By using flex-grow, we define how much a flex-item should grow if there's extra space available, the default value is **0** as element will only occupy the space it needs.

It requires a relative value or think of it as an factor.

Let's understand it with an example. we have same HTML from Part 1.

{% highlight html %}

<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
</div>
{% endhighlight %}

The CSS

<!-- prettier-ignore-start -->
{% highlight css %}

.container {
  padding: 10px;
}

.box {
  height: 50px;
  width: 50px;
  background-color: #34495e;
  margin: 10px;
}
{% endhighlight %}
<!-- prettier-ignore-end -->

As you can see, there's some extra space available in the container.

<div class="browser__preview">
  <div class="browser__window">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="browser__output">
  <div class="flex">
    <div class="box m10">1</div>
    <div class="box m10">2</div>
    <div class="box m10">3</div>
    <div class="box m10">4</div>
  </div>
  </div>
  </div>

Now, let's set `flex-grow: 1` to the box 1 and see what happens!

<!-- prettier-ignore-start -->
{% highlight css %}
.box:nth-child(1) {
   flex-grow: 1;
}
{% endhighlight %}
<!-- prettier-ignore-end -->

<div class="browser__preview">
  <div class="browser__window">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="browser__output">
  <div class="flex">
    <div class="box m10 fg-1">1</div>
    <div class="box m10">2</div>
    <div class="box m10">3</div>
    <div class="box m10">4</div>
  </div>
  </div>
  </div>

What happend?

the target element grew by a factor of 1, as no other flex-items has a `flex-grow` value, it took the entire free space available.

Let's do one more thing. add `flex-grow: 2` to the 2nd box and things will be clear enough to understand

<!-- prettier-ignore-start -->
{% highlight css %}
.box:nth-child(1) {
   flex-grow: 1;
}

.box:nth-child(2) {
   flex-grow: 2;
}
{% endhighlight %}
<!-- prettier-ignore-end -->

<div class="browser__preview">
  <div class="browser__window">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="browser__output">
  <div class="flex">
    <div class="box m10 fg-1">1</div>
    <div class="box m10 fg-2">2</div>
    <div class="box m10">3</div>
    <div class="box m10">4</div>
  </div>
  </div>
  </div>

The free space was divided into 3 parts (2 + 1), in which 2nd box took the 2 parts of that free space and 1st box took 1 part.

I think it's easy one! isn't it?

### Flex Shrink

Its just the opposite of `flex-grow`, & it defines how much a flex-item should shrink if there's not enough space.

This is the property that makes the CSS Flexbox, flexible.

It has a default value of 1 and it means that if there's no extra space available, flex-item will shrink by a factor of 1.

I don't think you would need any demo here. so let's move on.

### Flex Basis

Using it, you can define the initial size of a flex-item along th main-axis before any extra space is distributed by flex-grow or shrink properties.

The default value is **auto** and in that case, extra space is distributed accordion to its flex-grow value.

You can put any value in it that width accepts but setting it to **0**, the extra space around content isn't factored in. [see this](https://www.w3.org/TR/css-flexbox-1/#flex-basis-property) for more on it.

### Flex

It's a shorthand for - `flex-grow`, `flex-shrink` and `flex-basis`.

w3c recommends using this shorthand rather that individual values as it works intelligently!

default value of flex is - **0 1 auto** that restricts the flex-item to grow when there's extra space available but allows it to shrink when there's unsufficient space.

For some common values `flex` can have, you can refer to [this](https://www.w3.org/TR/css-flexbox-1/#flex-common).

### align-self

This is an interesting property. using it, you can override the flex container's `align-items` value (default or set) for a individual flex-item.

it accepts the following values.

<!-- prettier-ignore-start -->
{% highlight css %}
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
{% endhighlight %}
<!-- prettier-ignore-end -->

Okay. so it almost done here and its up to you now.

Reading these properties and values, even learning them won't help at all if you don't look at the practical examples of it.

Here are some resources that you use to strong your flexbox skills.

Here are 2 fun things for you, a game by which you can get good at Flexbox

- Flexbox Froggy - [check out](http://flexboxfroggy.com/)
- Flexbox Defense - [check out](http://www.flexboxdefense.com/)

& here's the [ultimate guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) from CSS-Tricks where things and concepts are widely explained.

If you love reading, you can also check [w3c's documentation](https://www.w3.org/TR/css-flexbox-1/).

So there you go, that's all I got for you on CSS Flexbox. It's highly recommended to make some layouts using Flexbox and you will understand the core concepts pretty easily.

If you have any issues with your layouts, put it in a codepen or JSBin and comment below. Also, suggest some topics to cover on this blog related to web design and I'll try my best to write it for you!
