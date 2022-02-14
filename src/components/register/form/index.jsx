import React, { useContext, useRef, useState } from 'react';

import { Button } from '../components/btn-publish';
import { Input } from '../components/input';
import { Textarea } from '../components/textarea';
import { BtnDiscard } from '../components/btn-discard';
import { Context } from '../../../contexts/homeContext';

import './styles.css';
import { PhotoUpload } from '../components/photoUpload';
import { photo } from '../../../contexts/homeContext/data';

function Register() {
  const context = useContext(Context);
  console.log(context.state);

  const [image, setImage] = useState(false);

  const inputRef = useRef();
  const textareaRef = useRef();

  const [fields, setFields] = useState({
    input: false,
    textarea: false,
    photo: image,
  });

  console.log(fields);
  console.log(image);

  const randomPhoto = photo[Math.round(Math.random() * (2 - 0) + 0)];

  const disabled = fields.input == true && fields.textarea == true ? false : true;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <PhotoUpload image={image} setImage={setImage} randomPhoto={randomPhoto} fields={fields} setFields={setFields} />
      <Input inputRef={inputRef} fields={fields} setFields={setFields} />
      <Textarea textareaRef={textareaRef} fields={fields} setFields={setFields} />

      <div className="group-buttons">
        <BtnDiscard inputRef={inputRef} textareaRef={textareaRef} />
        <Button inputRef={inputRef} textareaRef={textareaRef} disabled={disabled} randomPhoto={randomPhoto} />
      </div>
    </form>
  );
}

export default Register;
