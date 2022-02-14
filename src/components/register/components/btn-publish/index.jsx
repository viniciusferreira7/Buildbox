import P from 'prop-types';

import { useContext } from 'react';

import { Context } from '../../../../contexts/homeContext';
import './styles.css';

import './styles.css';

export const Button = ({ inputRef, textareaRef, disabled, randomPhoto }) => {
  const context = useContext(Context);

  return (
    <button
      className={`btn-publish ${disabled ? '' : 'btn-active'}`}
      onClick={() =>
        context.dispatch({ type: ['add', randomPhoto, inputRef.current.value, textareaRef.current.value] })
      }
      disabled={disabled}
    >
      Publicar
    </button>
  );
};

Button.propTypes = {
  inputRef: P.object,
  textareaRef: P.object,
  disabled: P.bool,
  randomPhoto: P.func,
};
