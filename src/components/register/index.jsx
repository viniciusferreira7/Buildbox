import React, { useRef } from 'react';
import { Button } from '../button';

import './styles.css';

function Register() {
  const inputRef = useRef();
  const textareaRef = useRef();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="photo-upload"></div>
      <input id="input-name" ref={inputRef} type="text" placeholder="Digite seu nome" />
      <textarea id="text-message" ref={textareaRef} placeholder="Mensagem"></textarea>
      <div className="group-buttons">
        <button>Descartar</button>
        <Button inputRef={inputRef} textareaRef={textareaRef} />
      </div>
    </form>
  );
}
export default Register;
