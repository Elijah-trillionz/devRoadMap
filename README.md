## Contributing.

If you're seeing this, then you probably wanna contribute to this project. I say to you welcome.

There are few rules:

1. Don't open the javascript file, is pretty messed up; you won't understand a thing. I don't even understand what I did :(

2. No other rules.

Your contribution is only needed in the resources folder which contains json files of gamedev, webdev, desktopdev, and mobiledev.

Each of them contains the roadmap of what to learn (ordered), and where to learn them, you can ask questions to get user's interest.

The way it works is simple, but initially complicated. It works like a link list, each primary object holds a reference to the next primary object.

It is designed thus:

primary object
|
|_ title
|_ options: array of
|_ id
|_ title
|_ more_info
|_ next

The id of the options array in previous primary object is used as an identifier for a secondary object in the next primary object. Confusing?

Let's see it in something you're familiar with

```js
const obj = {
  primary: {
    title: "Learn a programming language",
    options: [
      {
        id: "python",
        title: "Learn Python",
        more_info: "Python is a very popular language, so learn it" // a tooltip that explains the option
      },
      {
        id: "JavaScript",
        title: "Learn JavaScript",
        more_info: "JavaScript is for the web, so learn it" // recommending languages shouldn't be like this; just an example
      }
    ],
    next: "ask_funny_question"
  },
  ask_funny_questions: { // primary object
    python: { // a secondary object
      title: "Are you sure you wanna learn python?",
      options: [
        {
          id: "python_yes",
          title: "Yes",
          more_info: "Click if you wanna learn python"
        },
        {
          id: "python_no",
          title: "No",
          more_info: "Click if you don't wanna learn python"
        }
      ],
      next: "learning_resources"
    },
    javascript: {
      // some title and options
    }
  },
  learning_resources: {
    python_yes: {
      title: "Here are free resources to learn Python",
      options: [
        {
          id: "w3schools",
          title: "W3Schools",
          link: "https://w3schools.com", // rather than leading to the next primary object; it opens this url
          more_info: "Click if you wanna learn python"
        },
        {
          id: "freecodecamp",
          title: "FreeCodeCamp",
          link: "https://freecodecamp.org"
          more_info: "Click if you don't wanna learn python"
        }
      ],
      next: "more_resources" // if all options above is a link, this can be ignored
    }
  }
}
```

### Explanation

What this shows is that, initially a paragraph of "Learn a programming language" and options as a list will come up (python, JavaScript).
When "Python" is clicked for example, a paragraph of "Are you sure you wanna learn Python" with a list of yes and no will pop up.

This is possible because we told the "primary" object to redirect to "ask_funny_questions" object. And this "ask_funny_questions" has turned the options of "primary" object into an object with a key of their id (when in option).

I hope this is clear.

This is how it works generally.

### TODO: where resources are needed

1. provide more info describing the Java and Kotlin language in relative to Android
2. provide more info describing the Swift and Objective-c language in relative to Android
3. Provide resources for learning Java, Kotlin, Swift, and Objective-C for free
4. provide more info describing how to learn flutter and resources for learning it

CSS COURSES:

1. https://www.freecodecamp.org/learn/responsive-web-design/#basic-css
2. https://www.w3schools.com/css/default.asp => W3Schools CSS Tutorial
3. https://youtu.be/1Rs2ND1ryYc => CSS Video Tutorial - Zero to Hero
4. https://youtu.be/yfoY53QXEnI => CSS Crash Course
5. https://www.udemy.com/course/modern-html-css-from-the-beginning/ => Paid Udemy Course (ult)
6. https://codewithmosh.com/p/the-ultimate-html-css => Ultimate HTML & CSS course - from zero to hero
7. https://css-for-js.dev/ => CSS for JavaScript Developers
8. https://www.udemy.com/course/the-complete-web-development-bootcamp/ => Ultimate Web Development Bootcamp (ult)
9. https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/ => CSS Complete Guide
10. https://www.udemy.com/course/the-web-developer-bootcamp/ => Web Developer Bootcamp
11. https://www.sololearn.com/learning/1023 => Sololearn CSS Course
12. https://www.codecademy.com/catalog/language/html-css => Codecademy HTML & CSS Courses (ult)

HTML

1.
2. https://www.w3schools.com/html/default.asp => W3Schools HTML Tutorial
3. https://www.sololearn.com/learning/1014 => Sololearn HTML Course
4. https://youtu.be/UB1O30fR-EE => HTML Crash Course
5. https://www.udemy.com/course/modern-html-css-from-the-beginning/ => Paid Udemy Course (ult)

6. https://www.udemy.com/course/the-complete-web-development-bootcamp/ => Ultimate Web Development Bootcamp (ult)
7. https://www.codecademy.com/catalog/language/html-css => Codecademy HTML & CSS Courses (ult)
