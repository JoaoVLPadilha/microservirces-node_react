import axios from 'axios';
import React from 'react';

const CommentList = ({ postId }) => {
  const [comments, setComments] = React.useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`,
    );

    setComments(res.data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
