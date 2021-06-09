import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'O título 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O título 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O título 3',
        body: 'O corpo 3'
      },
    ]
  };

  componentDidMount(){
    this.handleTimeout()
  }

  componentDidUpdate(){
    this.handleTimeout()
  }

  componentWillUnmount(){
    clearTimeout()
  }

  handleTimeout = () =>{
    const { posts, counter } = this.state;
    posts[0].title = "title has changed"
    setTimeout(()=>{
      this.setState({posts, counter: counter + 1});
    }, 1000)
  }

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <p>{counter}</p>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default App;