import axios from 'axios';
import React from 'react';

const CommentCreate = ({ postId }) => {
  const [content, setContent] = React.useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  };

  return (
    <div className="p-2">
      <form onSubmit={onSubmit} action="">
        <div className="form-group mb-4">
          <label className="mb-2" htmlFor="">
            New Comment
          </label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
            type="text"
          />
        </div>
        <button className="btn btn-primary mb-2">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
