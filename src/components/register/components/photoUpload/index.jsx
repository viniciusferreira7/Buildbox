import P from 'prop-types';

import notImage from '../../../../images/image@2x.png';
import trash from '../../../../images/trash.png';

import './styles.css';

export const PhotoUpload = ({ fields, setFields, randomPhoto }) => {
  const whatImage = fields.photo ? (
    <img className="image" src={randomPhoto} alt="photo" />
  ) : (
    <img className="notImage" src={notImage} alt="sem imagem" />
  );

  return (
    <div className="wrapper">
      <div onClick={() => setFields({ ...fields, photo: true })} className="photo-upload">
        {whatImage}
      </div>
      {fields.photo && (
        <img onClick={() => setFields({ ...fields, photo: false })} className="trash" src={trash} alt="trash" />
      )}
    </div>
  );
};

PhotoUpload.propTypes = {
  fields: P.object,
  setFields: P.func,
  randomPhoto: P.string,
};
