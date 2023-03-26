# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Environment

Create .env file in root folder, and copy paste example.env into it.

## Installation

### `yarn install`

Install all packages needed to run this project locallly

## Running Scripts

### `yarn tw-watch`

Generate ntailwind css file use for whole application. This file is injected in public/index.html.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## API

This project use a postman mockserver api to return some data (for now is chart and list food part).
The api endpoint url may reach limit calling times (1000 times) and not return data. In this case, please use preventive endpoint url in .env file instead

Postman invite link: https://app.getpostman.com/join-team?invite_code=dacd357187766413d648b2842cc35778
