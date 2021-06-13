import { Component } from "react";
import "./styles.css";
import { loadPosts } from "../../components/utils/load-posts";
import { Posts } from "../../components/Posts/index";
import { Button } from "../../components/Button";
import {TextInput} from "../../components/TextInput"

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 20,
    searchValue: "",
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
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    //avoiding creating a new array
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue && <h1>Search value: {searchValue}</h1>}
          <TextInput searchValue={searchValue} handleChange={this.handleChange}/>
        </div>
        
        {filteredPosts.length && <Posts posts={filteredPosts} />}

        {filteredPosts.length === 0 && <p>Posts não encontrados.</p>}

        <div className="button-container">
          {!searchValue && (
            <Button
              text="Load more posts"
              //it's not the event, but an attribute being sent to Button
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}
export default Home;
