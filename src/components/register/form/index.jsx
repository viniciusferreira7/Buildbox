import React, { useRef, useState } from 'react';

import { Button } from '../components/btn-publish';
import { Input } from '../components/input';
import { Textarea } from '../components/textarea';
import { BtnDiscard } from '../components/btn-discard';

import './styles.css';

function Register() {
  const inputRef = useRef();
  const textareaRef = useRef();

  const [fields, setFields] = useState({
    input: false,
    textarea: false,
  });

  const disabled = fields.input == true && fields.textarea == true ? false : true;

  console.log(fields);
  console.log('form: ', disabled);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="photo-upload"></div>

      <Input inputRef={inputRef} fields={fields} setFields={setFields} />
      <Textarea textareaRef={textareaRef} fields={fields} setFields={setFields} />

      <div className="group-buttons">
        <BtnDiscard inputRef={inputRef} textareaRef={textareaRef} />
        <Button inputRef={inputRef} textareaRef={textareaRef} disabled={disabled} />
      </div>
    </form>
  );
}
export default Register;
