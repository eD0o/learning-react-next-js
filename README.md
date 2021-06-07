## 2 - Basics

### npx create-react-app

```npx create-react-app 'folderProjectName'``` or ```npx create-react-app .``` to use the current folder for the project.

Is also possible to use ```npm install -g create-react-app``` and then just ```create-react-app .``` to decrease the loading time.

Babel and/or Webpack are always required to develop React, but using npx create-react-app everything is already settled.

However, to manually configure React.js to your index.html, is possible import the scripts thus:

```html
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```
Image Test ![](https://i.imgur.com/j4zBXdN.png)

### Observations:

React is **standardized with PascalCase**.

Components in React are always capitalized: "App", "Header", "Helmet", etc. As well as classes and constructors.

Some words are reserved in .js, as class, that to add an html class for an element it's necessary to use className.

It's only allowed to have **one parent element in the JSX**.
