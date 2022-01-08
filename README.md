## Contributing.

If you're seeing this, then you probably wanna contribute to this project. I say to you welcome.

There are few rules:

1. Don't open the javascript file, is pretty messed up; you won't understand a thing. I don't even understand what I did :(

2. No other rules.

Your contribution is only needed in the resources folder which contains json files of gamedev, webdev, desktopdev, and mobiledev.

Each of them contains the roadmap of what to learn (ordered), and where to learn them.

Each section of the JSON, is organized the same and thus

1. what_to_learn:

- name_of_dev (webdev, gamedev):
  - title => the information that is displayed on the website to introduce options for picking
  - options => an array of options containing
    - title => the title of the option
    - id => the id of the option, used for ordering the next set of options
    - more_info => a detailed description of what the option is, shows up as a tooltip
  - next => indicates the next thing to move to when an option is picked

2. learning_curve
