import { Component } from "react";
import "./App.css";
import { PostCard } from "./components/PostCard/index";

class App extends Component {
  state = {
    counter: 0,
    posts: [],
    photos: [],
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

    // .then(response => response.json())
    // .then(posts => this.setState({posts}))

    //better way with async, await and promises
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });

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
            <PostCard key={post.id} id={post.id} 
              cover={post.cover}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </section>
    );
  }
}
export default App;
