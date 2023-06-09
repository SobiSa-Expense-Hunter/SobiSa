import axios, { HttpStatusCode } from 'axios';

const IMG_UPLOAD_SERVER = 'https://api.imgbb.com/1/upload';

const uploadImage = async (image: string) => {
  const data = new FormData();
  data.append('image', image.replace('data:image/png;base64,', ''));

  try {
    const response = await axios.post<UploadImageAPIResponse>(
      `${IMG_UPLOAD_SERVER}?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (response.statusText !== 'OK') {
      throw new Error(`Error ${response.status} : ${response.statusText}`);
    }
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default uploadImage;

interface UploadImageAPIResponse {
  data: {
    id: string;
    title: string;
    url_viewer: string;
    url: string;
    display_url: string;
    width: string;
    height: string;
    size: string;
    time: string;
    expiration: string;
    image: {
      filename: string;
      name: string;
      mime: string;
      extension: string;
      url: string;
    };
    thumb: {
      filename: string;
      name: string;
      mime: string;
      extension: string;
      url: string;
    };
    medium: {
      filename: string;
      name: string;
      mime: string;
      extension: string;
      url: string;
    };
    delete_url: string;
  };
  success: boolean;
  status: HttpStatusCode;
}
