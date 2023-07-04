import Dropzone from 'react-dropzone';
import styles from './DropZone.module.css';

const KILOBYTE = 1024;

export const DropzoneBox = ({
  setIsShowEditor,
  setUploadImg,
  maxFileSize = 10,
}) => {
  const handleDrop = acceptedFiles => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setUploadImg(reader.result);
      setIsShowEditor(true);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div
            className={styles.input_box}
            {...getRootProps()}
            maxSize={maxFileSize * KILOBYTE}
          >
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
    </>
  );
};
