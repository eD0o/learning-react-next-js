import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
    posts: [],
    photos: [],
  };

  componentDidMount() {
    this.loadPosts().then();
  }

  loadPosts = async () => {
    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

    // .then(response => response.json())
    // .then(posts => this.setState({posts}))

    //better way with async, await and promises
    const [posts,photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return {...post, cover: photosJson[index].url}
    })

    this.setState({ posts: postsAndPhotos });
  };


  handleTimeout = async () => {
    const { posts, counter } = this.state;
    posts[0].title = "title has changed";
    setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 1000);
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <img src={post.cover} alt={post.title} />
              <div className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
export default App;
