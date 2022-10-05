# Contributing Guidelines 🎉

If you're seeing this, then you probably wanna contribute to this project. Thanks for your interest.

## Just a quick note

1. Kindly make an issue before contributing
2. Reference the issue in your pull request
3. Please don't add resources that already exists
4. Folk the repo before making your pull request with this repo

## If you're new to contributing, [read this contributing guide for beginners 📌](https://github.com/firstcontributions/first-contributions)


__IMPORTANT read this 👇__

## How to contribute resources to devRoadMap

The way it works is simple, but initially complicated. It works like a linked list, each primary object holds a reference to the next primary object.

It is designed thus:

primary object
```
|
|_ title
|_ options: array of
    |_ id
    |_ title
    |_ more_info
    |_ link (optional): only if option is a link
|_ next
```

The `id` of the options array in previous primary object is used as an identifier for a secondary object in the next primary object. Confusing?

For example

```js
const jsonObj = {
  "primary": {
    "title": "Learn a programming language",
    "options": [
      {
        "id": "python",
        "title": "Learn Python", // what displays as the option
        "more_info": "Python is a very popular language, so learn it" // a tooltip that explains the option
      },
      {
        "id": "JavaScript",
        "title": "Learn JavaScript",
        "more_info": "JavaScript is for the web, so learn it" // recommending languages shouldn't be like this; just an example
      }
    ],
    "next": "step2:resources" // specify steps to track
  },
  "step2:resources": {
    "javascript": {
      "title": "Resources to learn JavaScript",
      "order": true, // displays the options below in order, with the first being step 1, and next step 2...
      "options": [
        {
          "id": "freecodecamp",
          "title": "FreeCodeCamp JavaScript Course",
          "link": "https://freecodecamp.org",
          "more_info": "More information about the course"
        },
        {
          "id": "codecademy",
          "title": "Codecademy Intermediate Course",
          "link": "https://codecademy.org",
          "more_info": "More information about the course"
        }
      ]
    },
    "python": {
      "title": "Resources to learn Python"
      // ... repeat the same structure above
    }
  }
}
```


### Explanation

What this shows is that, initially a paragraph of "Learn a programming language" and options as a list will come up (python, JavaScript).
When "JavaScript" is clicked for example, a list of ordered options (with links) of "FreeCodeCamp JavaScript Course" and "Codecademy Intermediate Course" will pop up.

This is possible because we told the "primary" object to redirect to "step2:resources" object. And this "step2:resources" has turned the options of "primary" object into an object with a key of their id (when in option).

I hope this is clear.
