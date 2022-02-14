import P from 'prop-types';

import notImage from '../../../../images/image@2x.png';
import trash from '../../../../images/trash.png';

import './styles.css';

export const PhotoUpload = ({ image, setImage, randomPhoto }) => {
  const whatImage = image ? (
    <img className="image" src={randomPhoto} alt="photo" />
  ) : (
    <img className="notImage" src={notImage} alt="sem imagem" />
  );

  return (
    <div className="wrapper">
      <div onClick={() => setImage(true)} className="photo-upload">
        {whatImage}
      </div>
      {image && <img onClick={() => setImage(false)} className="trash" src={trash} alt="trash" />}
    </div>
  );
};

PhotoUpload.propTypes = {
  image: P.bool,
  setImage: P.func,
  randomPhoto: P.func,
};
