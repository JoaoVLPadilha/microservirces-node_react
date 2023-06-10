import axios from 'axios';
import React from 'react';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
  const [posts, setPosts] = React.useState({});

  const fetchPost = async () => {
    const res = await axios.get('http://localhost:4000/posts');

    setPosts(res.data);
  };

  React.useEffect(() => {
    fetchPost();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        key={post.id}
        className="card"
        style={{ width: '30%', marginBottom: '20px' }}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
        </div>
        {<CommentList postId={post.id} />}
        {<CommentCreate postId={post.id} />}
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
