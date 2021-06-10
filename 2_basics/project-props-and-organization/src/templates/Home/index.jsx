import { Component } from "react";
import "./styles.css";
import { loadPosts } from "../../components/utils/load-posts";
import { Posts } from "../../components/Posts/index";
import { Button } from "../../components/Button";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 20,
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts 
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    //avoiding creating a new array
    posts.push(...nextPosts)

    this.setState({posts, page: nextPage})
  };

  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length

    return (
      <section className="container">
        <Posts posts={posts} />
        
        <div className="button-container">
          <Button
            text="Load more posts"
            //it's not the event, but an attribute being sent to Button
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
        </div>
      </section>
    );
  }
}
export default Home;
