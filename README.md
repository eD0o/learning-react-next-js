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

Video Thmb Test
[![aaa](https://i.ytimg.com/an_webp/Ohf0wDJp9O4/mqdefault_6s.webp?du=3000&sqp=CKCz_YUG&rs=AOn4CLCjIcdyrWzG52b9mPhdo72DfKEAKg)](https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

- What is a React component?
> A React component is a class that has one render method and returns jsx, or, a function that also returns jsx.

### Class Component

```javascript
import {Component} from 'react';

class App extends Component{
  render (){
    return(
      <p>Stateless Class Component Example</p>
    )
  }
}

export default App;
```

### Lifecycle Methods
[![React Lifecycle](https://i.imgur.com/NDDggF8.png)](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)


#### componentDidMount
This method is used triggered when the component is fully loaded in the page.

#### componentDidUpdate
This method is triggered when there's some change in the component.

### componentWillUnmount
This method is triggered when the component stops being rendered in the page. Really necessary to remove the trash from the componentDidUpdate changes.

### Observations:

> React is **standardized with PascalCase**.

> Components in React are always capitalized: "App", "Header", "Helmet", etc. As well as classes and constructors.

> Some words are reserved in .js, as class, that to add an html class for an element it's necessary to use className.

> It's only allowed to have **one parent element in the JSX**.

> .map() requires a key value in the father element to React better identify and compile.
![](https://i.imgur.com/EWYoQIM.png)
