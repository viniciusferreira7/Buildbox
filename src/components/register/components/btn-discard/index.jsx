import P from 'prop-types';

import './styles.css';

export const BtnDiscard = ({ inputRef, textareaRef }) => {
  return (
    <button
      className="btn-discard"
      onClick={() => {
        (inputRef.current.value = ''), (textareaRef.current.value = '');
      }}
    >
      Descartar
    </button>
  );
};

BtnDiscard.propTypes = {
  inputRef: P.object,
  textareaRef: P.object,
};
