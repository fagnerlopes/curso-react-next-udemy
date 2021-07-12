import { PostCard } from '../PostCard/index';

export const Post = ({posts}) => (
    <div className="posts">
        {posts.map(({ id, title, body, cover }) => (
        <PostCard
            key={id}
            id={id}
            title={title}
            body={body}
            cover={cover}
        />
        ))}        
    </div>
);