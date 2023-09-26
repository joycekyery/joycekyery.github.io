# Getting Started with frontend

## :bangbang: Prerequisite

This project is run by

### `yarn`

check if you have yarn installed by running:
`yarn --version`

Installing yarn through npm:
`npm install --global yarn`

see [more about yarn](https://classic.yarnpkg.com/en/docs/getting-started)

## Run The App Locally

If you just cloned the repository, run:

### `yarn install`

to install dependencies, no need to run it again until there is a change in dependecies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Deployment

view here https://www.yungchingl.com/
Deployed using Heroku

## Coding Style

Enf
Enforced by Prettier and ESlint
Make sure to use `VScode` and install extensions

#### [`Prettier`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) [`ESlint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

#### Setup Auto formatting

use `crtl+shift+p` to open Vscode panel

under the panel, type and select `format document wit`h, choose `Prettier` as the formatter

In VScode settings, find `Editor: format on save` and click on the option.

### End-of-Line Character Sequences: LF

Check at the bottom line of your VScode
![image](https://user-images.githubusercontent.com/76548593/183066753-b3c8a3b1-89b7-42c4-9007-ae5fa7cc0401.png)
:bangbang: if you are on Windows system, git will tempt to convert LF to CRLF. To cahnge this, configured your git by
`git config core.autocrlf false`

### Using PropTypes

import PropTypes with
`import PropTypes from 'prop-types'`

example:

```
const Component =({prop1='', prop2=()=>{})=>{

}

Component.propTypes = {
    /** description of the prop**/
    prop1=PropTypes.string,
    prop2=PropTypes.func,
}
```

[see more about typechecking and using PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
