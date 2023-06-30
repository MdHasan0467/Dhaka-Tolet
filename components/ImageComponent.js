
import uploadImage from './uploadImage';

const ImageComponent = ({setImages}) => {



  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = await uploadImage(file);

      if (imageUrl) {
        // Do something with the uploaded image URL
        console.log('Image uploaded:', imageUrl);
        setImages(imageUrl)
      } else {
        console.log('Image upload failed');
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
    </div>
  );
};

export default ImageComponent;
