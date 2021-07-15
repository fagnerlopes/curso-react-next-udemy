export const PostCard = ({id, title, body, cover}) => (
    <div className="post">
        <div  className="post-image">
            <img src={cover} alt={title}></img>
        </div>
        <div className="post-content">
            <h2>{id} {title}</h2>
            <p>{body}</p>
        </div>
    </div>
);