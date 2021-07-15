import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Post } from '../../components/Post';
import { Button } from '../../components/Button';
import { Search } from '../../components/Search';
 
class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
    searchValue: ''
  }

  // function life-cycle onde se coloca buscas em API
  async componentDidMount() {
    await this.loadPosts();      
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({searchValue: value});
    console.log(value);
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

  componentDidUpdate(){

  }

  componentWillUnmount(){
    
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = (page + postsPerPage) >= allPosts.length;
    const filteredPosts = !!searchValue ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue);
    }) : posts;
    let displayButton = true;

    return (
      <section className="container">
        <Search
          value={searchValue}
          handleChange={this.handleChange}
        />

        {filteredPosts.length > 0 && (
          <Post posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>A pesquisa não retornou nenhum post :(</p>
        )}

        { !searchValue && (
          <Button 
            text="Load more posts"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
            displayButton={displayButton}
          />
        )}
        
      </section>
    );
  }
}

export default Home;
