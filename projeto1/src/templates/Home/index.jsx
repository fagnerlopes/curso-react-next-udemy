import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Post } from '../../components/Post';
import { Button } from '../../components/Button';
 
class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();  
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  // function life-cycle onde se coloca buscas em API
  async componentDidMount() {
    await this.loadPosts();      
  }

  componentDidUpdate(){

  }

  componentWillUnmount(){
    
  }

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <Post posts={posts} />
        <Button 
          text="Load more posts"
          onClick={this.loadMorePosts}
        />
      </section>
    );
  }
}

export default Home;
