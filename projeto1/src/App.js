import './App.css';
import { Component } from 'react';
import { loadPosts } from './utils/load-posts';
import { Post } from './components/Post';
 
class App extends Component {
  state = {
    posts: [],
    photos: []
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();  
    this.setState({posts: postsAndPhotos });
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
      </section>
    );
  }
}

export default App;
