import P from 'prop-types';

import { useContext } from 'react';

import { Context } from '../../../../contexts/homeContext';
import './styles.css';

import './styles.css';

export const Button = ({ inputRef, textareaRef, disabled }) => {
  const context = useContext(Context);

  console.log(disabled);

  return (
    <button
      className={`btn-publish ${disabled ? '' : 'btn-active'}`}
      onClick={() => context.dispatch({ type: ['add', inputRef.current.value, textareaRef.current.value] })}
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
};
