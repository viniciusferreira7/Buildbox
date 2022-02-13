import P from 'prop-types';

import { AiOutlineCloseCircle } from 'react-icons/ai';

import './styles.css';

export const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-photo"></div>
      <div className="content">
        <h2>{post.message}</h2>
        <div className="author">
          <p>Enviado por</p>
          <p>{post.name}</p>
        </div>
      </div>
      <AiOutlineCloseCircle className="close-icon" />
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    name: P.string,
    message: P.string,
  }),
};
