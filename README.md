# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Secrets integration

Create the following file `secrets.js` at project's root:
```
export const TOKEN = 'yourtoken'
export const ACCOUNT_ID = 'account_id'
export const ALERT_ID = 'alert_id'
```

Then replace placeholders.

## Launching the app

### CORS handling

To avoid CORS issues when requesting Mention API, please add the following line to your `/etc/hosts`:
```
127.0.1.1   web.test.mention.com
```

Then, start the app with [`yarn start`](#yarn-start)

### `yarn start`

Runs the app in development mode and should open [http://web.test.mention.com:3000/](http://web.test.mention.com:3000/).\
In case it doesn't properly handle opening the app, go to [http://web.test.mention.com:3000/](http://web.test.mention.com:3000/) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Fetching API

Once app started, click on button `Load Mentions!` to fetch mentions from the API endpoint provided

## Exercise synthesis

### Github PRs

I followed a github flow with a master branch and feature branches related to hypothetical issues to develop step by step.

I could have kept a single feature branch with commits, as I really implemented a single feature - which is what I'm used to at work - but I preferred following my thought process here:

1. Handle CORS with CRA config, rework README basics
2. Integrate linter, because I had forgotten...
3. Handle API call to fetch mentions
4. Handle listing of mentions and text highlighting
5. Add a conclusion to README with some thoughts, cleanup (I don't count this as part of implementation time)

### Time spent

It took me **about 3 hours** to finish implementing this requirement. 

I expected it would take me only 2, I think I was underestimating a bit the time it took me to compute the highlights on text.

I didn't foresee the `dangerouslySetInnerHTML` issue with string replacement, so I had to quickly seek a solution.

I tried to work as quickly as possible, I really challenged myself on my time estimation - I must admit I tend to estimate too short, but I wanted to follow my first impression.

### Considerations on my work

I stayed true to the asked visuals, overall, because I don't think it was important for this assessment. There's room for visual improvements, even for a thing as simple as a list, though.

I followed my usual code structure and file architecture, because I find it really clear and helpful, sometimes also better for long term scaling.

Some examples :
- importing foreign helpers into my own helper files => avoid refactoring the whole app if we change some external library
- separating helpers, hooks, components
  - I also split dumb/smart components most of the time
  - Here I also kept the Context Provider component in its own folder, because it wasn't really related to other components
- keeping helper's implementation locally if specific to a component

I took time to build helpers and hooks apart from components, because it helps me a lot focus on building functional code.

#### Extra

I added a button to fetch data to simplify my dev workflow.


#### Libraries

I used `material-ui` for visual components and jss integration, being used to it, I always gain some time not designing from scratch.

I added some plugins for linting, exactly the ones I use on my personal project, to have quick fix of my code without the hassle.

I used `lodash` for some basics I always use, such as changing case of object keys (`objectToCamelCase`), checking nil values (`isNil`).

Finally, I used `react-string-replace`, after looking for a quick solution to the text highlighting issue. 
I could have copied the logic, which is not that complex, instead of using this library, but I didn't want to be later than already regarding my expectations.