# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: (https://github.com/lucafisc/interactive-rating-component)
- Live Site URL: (https://lucafisc.github.io/interactive-rating-component/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learned how to enable the submit button if an option is selected. Also if the user can cancel his last selection by clicking it and thus disabling the submit button.


```css
.disabled {
  background-color: hsl(207deg 20% 18%);
  pointer-events: none;
}
```

```js
function defineRating(btn) {
  if (btn.textContent === rating) {
    rating = "";
    submitButton.classList.add("disabled");
  } else {
    rating = btn.textContent;
    submitButton.classList.remove("disabled");
  }
}
```

### Useful resources

- [Solve - forEach is not a function Error](https://bobbyhadz.com/blog/javascript-typeerror-foreach-is-not-a-function#:~:text=The%20%22forEach%20is%20not%20a,arrays%2C%20Map%20or%20Set%20objects.) - This helped me because I tried using the `forEach()` method on a value that was not an array, map or set. To convert the array-like object to an actual array I used the `Array.from` method and then could call the `forEach()` method.


## Author

- Website - [Luca Fischer](https://github.com/lucafisc)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/lucafisc)