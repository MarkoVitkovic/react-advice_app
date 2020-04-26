# Covid19 - tracker
> Project made with react. Advice app

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
App that on every refresh give you random advice, I made this app to better understand react axios. On this link[https://api.adviceslip.com/advice](https://api.adviceslip.com/advice) you can find api. 

## Screenshots
![](https://github.com/MarkoVitkovic/react-advice_app/blob/master/img.png)

## Technologies
* [React](https://reactjs.org/docs/getting-started.html) - version 16.13.1
* [Node.js](https://nodejs.org/en/docs/) - version 13
* [CSS](https://devdocs.io/css/) - version 3
* [React-dom](https://github.com/facebook/react) - version 16.13.1
* Axios


## Setup
Open terminal(cmd) and navigate:</br>
`npx create-react-app my-app`</br>
`cd my-app`</br>
`npm start`</br>
Open source in Visual Studio Code.

## Available Scripts

In the project directory, you can run:

npm start</br>
npm test</br>
npm run build</br>
npm run eject</br>
npm run build

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Code Examples
Code:</br>

  `fetchAdvice = () =>{`</br>
    `axios.get('	https://api.adviceslip.com/advice')`</br>
    `.then((res) => {`</br>
      `const  {advice} = res.data.slip;`</br>
     ` this.setState({`</br>
        `advice: advice`</br>
      `})`</br>
   ` })`</br>
    `.catch((err) => {console.log(err)})`</br>
 ` }`</br>


## Features
List of features ready and TODOs for future development
* Random advice on every refresh
To-do list:
* none

## Status
Project is: _finished_

## Inspiration
To learn deeper react, correctly axios

## Contact
Created by [Marko Vitkovic](https://github.com/MarkoVitkovic) - feel free to contact me!
