import axios from 'axios';

const uploadImage = async (file) => {
  try {
    const apiKey = '690c200c36211dbbf9634dc12eadb291'; // Replace with your imgBB API key
    const apiUrl = 'https://api.imgbb.com/1/upload';

    const formData = new FormData();
    formData.append('image', file);

    const response = await axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      params: {
        key: apiKey
      }
    });

    return response.data.data.url; // Return the URL of the uploaded image
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
};

export default uploadImage;
