import P from 'prop-types';

import { useContext } from 'react';

import { Context } from '../../contexts/homeContext';
import logo from '../../images/delete.png';

import './styles.css';

export const Post = ({ post }) => {
  const context = useContext(Context);
  //eslint-disable-next-line

  const handleClick = (id) => {
    context.dispatch({ type: ['new', context.state.filter((post) => post.id !== id)] });
  };

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
      <img src={logo} alt="delete-btn" className="delete" onClick={() => handleClick(post.id)} />
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    name: P.string,
    message: P.string,
    id: P.number,
  }),
};
