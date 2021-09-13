# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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