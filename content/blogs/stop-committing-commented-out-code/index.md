---
layout: blogs
title: Stop Committing Commented Out Code
publishedDate: 2020-06-17T16:02:14.363Z
author: Siabsish Mohanty
banner: post5.jpg
bannerCredit: Photo by [Yancy
  Min](https://unsplash.com/@yancymin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  on
  [Unsplash](/s/photos/code?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
category: Technology
summary: Some solid reasons to make you understand why commented out code are
  like dead bodies and your working code repository is not a suitable place to
  bury them.
keywords:
  - code
  - version control
  - productivity
---
I often find code like this in code bases I work on:

```javascript
function foo(bar) {
  const { baz } = bar;
  // we no longer use the following logic for some reason
  // if (baz === 'baz') {
  // return baz + 1;
  // } else {
  // return baz + 2;
  // }
  return baz + 3;
}
```

This function should look like this:

```javascript
function foo(bar) {
  const { baz } = bar;
  return baz + 3;
}
```

Your argument behind keeping the code commented out and not actually deleting must be at some point that "some reason" is no longer true and we need the old logic back. The counter argument to that, is *[git diff](https://git-scm.com/docs/git-diff).*

It is 2020 and there is absolutely no excuse to develop software without using version controlling. You can always go check your commit history and grab that precious block of old logic and you're back in business. However this will take a few seconds more than just hitting Ctrl + / in your favorite code editor. 

Now you might be thinking: "Ok, cool, but what's the problem with leaving the commented code in there? It's easier for people to see how things used to be, it *might* be helpful to them, and it's a way for me to leave my mark on the code base **forever**!!"

Here are a few of the reasons you should probably not commit commented out code:

1. Focus and cognitive load
2. Hides what is important
3. Out of date