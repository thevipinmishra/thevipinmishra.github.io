---
layout: post
title: "Getting Started with CSS Flexbox in 2020 - Part 1"
comments: true
description: CSS Flexbox for absolute begginers, Learn Flexbox the right way!
author: "Vipin Mishra"
---

CSS Flexbox is probably the most ideal way to handle your one-dimensional layouts, to align the contents inside any container and distribute the space among the items inside it.

Today, lets get to know the basics of Flexbox and I'm pretty sure that at the end of this post, you'll be pretty confident to use it in your layouts.

Before that, I assume you already know what CSS is (obviously !!) , the syntax, how it works, and at-least the basics of a CSS box-modal.

Flexbox, as the name says, is flexible, and flexible enough to lay-out the items inside it and give them a best fit, no matter their height and width. 👽

## Getting Started with Flexbox

Flexbox is not a property, but a whole other layout module or technique you can say. it consists a set of the properties you can play with when you got a flex container and items inside it to work with.

#### This is the HTML we will be dealing with

{% highlight html %}

<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
</div>
{% endhighlight %}

A container, with a class of **container**, and 4 items inside it with a class of **box** (why am I writing it here, you already know it. 🤐)

### Let's add some basic CSS to get started!

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

### Here's how it looks so far

<div class="browser__preview">
  <div class="browser__window">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="browser__output">
  <div class="dblock">
    <div class="box m10">1</div>
    <div class="box m10">2</div>
    <div class="box m10">3</div>
    <div class="box m10">4</div>
  </div>
  </div>
  </div>

Pretty straight forward output, boxes go from top to bottom.

Every `div` here is a block-level element and I guess you already know about them, if don't, here's what they are ( <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements" target='_blank'>Read at MDN</a> )

> A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

Okay. now, lets go flexy with CSS Flexbox & start using it 🔥.

## Flex Container

This is where it all starts. you gotta make your container **flexible** to use the flex properties. to work with Flexbox and all of it's properties, we need a flex container.

& Whenever you set `display: flex` (or **inline-flex** for inline elements) to any element, its now a flex-container, and all of the **direct children** are now **flex-items**.

> Without having a **flex-container**, all of its properties are completely useless and have no effect at all.

So, coming back to our CSS, lets add `display: flex` to the container div. 😇

<!-- prettier-ignore-start -->
{% highlight css %}
.container {
  display: flex; /* we added it */
}
{% endhighlight %}
<!-- prettier-ignore-end -->

### & this is what it becomes 🤯🤯

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

Lets look at some of the properties by which we can change the default behaviour of flex-containers, all the below properties will apply to the flex-container itself and not on flex-items. I'll keep the flex-items property for a new post to make things easy!

### Lets Start 🤩

By default, flexbox aligns the **flex-items** (direct children of the flexbox container) from left to right & its kinda tricky here as its not just a left to right thing. It follows the content-flow or the **text-direction**. default is `ltr` but web pages with Hebrew or Arabic are generally in **right to left**, so in that case, it'll follow that.

though, we can control that with **flex-direction**.

## Flex Direction

its a property we define on the flex container and it sets the default direction of the flex-items. it accepts following values:

- row (default)
- row-reverse
- column
- column-reverse

Default is row and you know about how it works. what about `row-reverse` now ?

Let's set the `flex-direction` to row-reverse!

<!-- prettier-ignore-start -->
{% highlight css %}
.container {
  display: flex;
  flex-direction: row-reverse; /* we added it */
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
  <div class="flex rowr">
    <div class="box m10">1</div>
    <div class="box m10">2</div>
    <div class="box m10">3</div>
    <div class="box m10">4</div>
  </div>
  </div>
  </div>

Let's move on to the next one. `flex-direction` to **column** changes the main axis to **top to bottom** and here, one this to notice that is the main-axis is now changed.

<!-- prettier-ignore-start -->
{% highlight css %}
.container {
  display: flex;
  flex-direction: column; /* we added it */
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
  <div class="flex column">
    <div class="box m10">1</div>
    <div class="box m10">2</div>
    <div class="box m10">3</div>
    <div class="box m10">4</div>
  </div>
  </div>
  </div>

> Earlier when flex-items were going left to right, that was the main axis (x-axis) and now they are going top-to-bottom and main-axis is changed (its y-axis now).

& now as you already might have guessed, column-reverse is just the opposite of **column**

<!-- prettier-ignore-start -->
{% highlight css %}
.container {
  display: flex;
  flex-direction: column-reverse; /* we added it */
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
  <div class="flex column-r">
    <div class="box m10">1</div>
    <div class="box m10">2</div>
    <div class="box m10">3</div>
    <div class="box m10">4</div>
  </div>
  </div>
  </div>

Alright, so it was all about the flex-direction thing. I guess it was pretty easy, isn't it?

Now, I want you to play with the properties we have learned so far and you'll know the things clearly. I had a very limited example in which my divs were having a defined width and height which doesn't really demonstrate the capabilities of CSS Flexbox.

## Flex Wrap

Another property for flex containers, but its an important one.

By default, flexbox items will always be in a single line no matter how wide they are! elements may overflow but they can't wrap to a new line. here's an example:

Say we got 6 boxes this time.

{% highlight html %}

<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
</div>
{% endhighlight %}

but this time, lets set the width of 6th div to 1000px 😶

<!-- prettier-ignore-start -->
{% highlight css %}
.container {
  display: flex;
}

.box:nth-child(6) {
  width: 1000px;
}
{% endhighlight %}

<!-- prettier-ignore-end -->

Here's how it looks 🙄. untill and unless, you got the free space of 1000px, it will never be that wide. (My preview window has a max-width of 600px bdw )

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
    <div class="box m10">5</div>
    <div class="box m10 w1000">6</div>
  </div>
  </div>
  </div>

Okay, so the default value of `flex-wrap` is **no-wrap** and the flex-items will not go the single line by default. it accepts another two values, that are `wrap` and `wrap-reverse`.

`flex-wrap: wrap` will allow the flex-items to go the new line or multiple lines if needed and they will still be flexible in that space.

<!-- prettier-ignore-start -->
{% highlight css %}
.container {
  display: flex;
  flex-wrap: wrap;
}

.box:nth-child(6) {
  width: 1000px;
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
  <div class="flex wrap">
    <div class="box m10">1</div>
    <div class="box m10">2</div>
    <div class="box m10">3</div>
    <div class="box m10">4</div>
    <div class="box m10">5</div>
    <div class="box m10 w1000">6</div>
  </div>
  </div>
  </div>

`flex-wrap: wrap-reverse` will allow the lines to wrap but newly generated lines will go above the previous line. Let's see the example.

<!-- prettier-ignore-start -->
{% highlight css %}
.container {
  display: flex;
  flex-wrap: wrap-reverse;
}

.box:nth-child(6) {
  width: 1000px;
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
  <div class="flex wrap-reverse">
    <div class="box m10">1</div>
    <div class="box m10">2</div>
    <div class="box m10">3</div>
    <div class="box m10">4</div>
    <div class="box m10">5</div>
    <div class="box m10 w1000">6</div>
  </div>
  </div>
  </div>

here's the newly generated line is of 6th div but instead of going to a new line, `wrap-reverse` adds the line before the previous one. it was pretty clear I guess!

## Justify Content

**Its the most important one in my opinion.**

Justify-content helps to distribute the **empty-space between the flex-items** along the main-axis. things may get tricky here so I want you to concentrate here as you're gonna use it around 99% of the times.

See this example. say we got 4 boxes this time.

{% highlight html %}

<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
</div>
{% endhighlight %}

Let's also change the width of the boxes, they won't have same width.

<!-- prettier-ignore-start -->
{% highlight css %}
.container {
  display: flex;
}

.box {
  width: 50px;
  height: 50px;
}

.box:nth-child(2) {
  width: 80px;
}

.box:nth-child(4) {
  width: 100px;
}
{% endhighlight %}

<!-- prettier-ignore-end -->

Here's by default a box is 50px tall & wide but the 2nd box is 80px wide and 4th one is 100px. (there's some extra CSS under the hood for demo purposes.)

Notice that there will be no margins on the box this time. & here's the output.

<div class="browser__preview">
  <div class="browser__window">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="browser__output">
  <div class="flex">
    <div class="box">1</div>
    <div class="box w80">2</div>
    <div class="box">3</div>
    <div class="box w100">4</div>
  </div>
  </div>
  </div>

Now, in my case, the browser-output has a max-width of 600px and you can see the empty space on right. most of the times, we may want to share that empty space among the flex-items and flexbox makes it so easy.

`justify-content` has a default value of `flex-start` and you can see what it does at the above example. apart from that, it accepts **5** other values and they are:

- flex-end
- center
- space-between
- space-around
- space-evenly

These values are self explanatory but Let's dig them. from the above example, Let's set `justify-content: flex-end` on the container.

<!-- prettier-ignore-start -->
{% highlight css %}
.container {
  display: flex;
  justify-content: flex-end; /* we added it */
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
  <div class="flex justify-end">
    <div class="box">1</div>
    <div class="box w80">2</div>
    <div class="box">3</div>
    <div class="box w100">4</div>
  </div>
  </div>
  </div>

Hmmm 🤔, what it did? flex-items are now pushed towards the end of the container.

I think you already made your guess about what `justify-content: center` does!

<!-- prettier-ignore-start -->
{% highlight css %}
.container {
  display: flex;
  justify-content: center; /* we added it */
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
  <div class="flex justify-center">
    <div class="box">1</div>
    <div class="box w80">2</div>
    <div class="box">3</div>
    <div class="box w100">4</div>
  </div>
  </div>
  </div>

> Doesn't matter how many flex-items are there, they will be centered along the main-axis.

what about space-between? lets see!

<!-- prettier-ignore-start -->
{% highlight css %}
.container {
  display: flex;
  justify-content: space-between; /* we added it */
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
  <div class="flex justify-between">
    <div class="box">1</div>
    <div class="box w80">2</div>
    <div class="box">3</div>
    <div class="box w100">4</div>
  </div>
  </div>
  </div>

Yeah 😍, that's what we love about Flexbox! it automatically distributes the extra space `between` the flex-items along the main axis!

Now, about other 2 values, I want you to play them with yourself and I am pretty sure it won't be tough on you! Here's the [codepen link](https://codepen.io/vipinmishra/pen/wvKrWYg), fork it & play with the values.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="vipinmishra" data-slug-hash="wvKrWYg" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox - justify-content">
  <span>See the Pen <a href="https://codepen.io/vipinmishra/pen/wvKrWYg">
  Flexbox - justify-content</a> by Vipin Mishra (<a href="https://codepen.io/vipinmishra">@vipinmishra</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

`space-around` - free space is distributed **around** the flexbox items.

`space-evenly` - free space is distributed equally between any two items in the container and space-between the edges.

> `space-between` and `space-evenly` may confuse at first as they look similar. the difference is, in space-between, first and last items are always on the end-line and in space-evently, they have the space between first and last item against container.

## Align Items

**Another important property to take care of**

`align-items` in CSS Flexbox helps aligning the content on the **cross-axis**. we haven't seen this alignment-issue as our elements are of same height as they have same amount of content (the numeric value) so far.

To understand it clearly, Let's look at this HTML. we got 3 paragraphs with different amount of content inside them.

{% highlight html %}

<div class="container">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores necessitatibus facere sequi, sunt fugit voluptatum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga molestiae atque quibusdam tempora laudantium rem adipisci, reprehenderit labore enim vitae accusamus corporis suscipit odio doloremque, hic consequatur, nisi dolores voluptates debitis eum dicta in dolor quaerat. Atque a, totam, minus ex dolores excepturi vitae asperiores nobis at labore tempore aut.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto perspiciatis ullam labore, dolore doloribus esse vitae debitis, ea quisquam reprehenderit aspernatur suscipit neque maxime. Blanditiis maxime quis facere consequatur doloribus consectetur modi harum veritatis! Fuga dolores natus hic vitae, reprehenderit deleniti officiis velit numquam eius corrupti architecto dolorem magnam tempore fugiat blanditiis pariatur consectetur nisi inventore at! Dicta, eaque culpa? Quos hic laboriosam, velit quia. Amet accusantium dolor tempora at repellendus eveniet ea unde voluptate, molestias ipsum praesentium sequi, facilis eius omnis maxime, quo veniam ratione harum, quasi! Totam necessitatibus maxime libero iure suscipit similique eos quaerat, nobis enim molestiae.</p>
</div>
{% endhighlight %}

For a better understanding, I've this [codepen](https://codepen.io/vipinmishra/pen/qBOPPjX) for you, set-up with base styles.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="vipinmishra" data-slug-hash="qBOPPjX" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox - Align Items">
  <span>See the Pen <a href="https://codepen.io/vipinmishra/pen/qBOPPjX">
  Flexbox - Align Items</a> by Vipin Mishra (<a href="https://codepen.io/vipinmishra">@vipinmishra</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

These are the values you need to care, there are a few more but Let's proceed with these main ones.

![Flexbox - Align Items]({{'/images/flexbox/align-items.svg' | relative_url}} "Flexbox - Align Items")

I think this illustration is enough to understand enough to know how `align-items` works. you can also see this [reference from CSS-TRICKS](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#prop-align-items).

Alright guys, hese are the main properties that you can apply on a flex-container to control how flex-items position inside the container.

Now, there are properties for flex-items as well, but I'm keeping it for a **Part-2** else it will be too much for day 1.

I hope things were clear and easy enough to understand throughout the post. Let me know what you think about it in the comments below, also feel free to ask any queries you got and I'll be there to help 😇

Expect the next part in 3-4 days & meanwhile, work on the properties I've mentioned in this post.
