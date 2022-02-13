import P from 'prop-types';

import { useContext } from 'react';
import { Context } from '../../contexts/HomeContext';

import './styles.css';

export const Button = ({ inputRef, textareaRef }) => {
  const context = useContext(Context);

  return (
    <button
      className="publish-button"
      onClick={() => context.dispatch({ type: inputRef.current.value, payload: textareaRef.current.value })}
    >
      Publicar
    </button>
  );
};

Button.propTypes = {
  inputRef: P.object,
  textareaRef: P.object,
};
