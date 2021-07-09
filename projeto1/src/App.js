import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: [],
    photos: []
  }

  loadPosts = async () => {
    // método 1
    // const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await postsResponse.json();

    //método 2
    // retorna uma promise
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse ]);
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index.url] }
    });
  
    this.setState({posts: postsJson, photos: photosJson });
  }

  // function life-cycle onde se coloca buscas em API
  componentDidMount() {
    this.loadPosts();      
  }

  componentDidUpdate(){

  }

  componentWillUnmount(){
    
  }

  render() {
    const { posts } = this.state;
    console.log(posts);

    return (
      <section className="container">
        <div className="posts">
          {posts.map(post => (
            <div className="post">
              <div key={post.id} className="post-content">
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
