import axios, { HttpStatusCode } from 'axios';

const IMG_UPLOAD_SERVER = 'https://api.imgbb.com/1/upload';

const uploadImage = async (image: string) => {
  const request: UploadImageAPIRequest = {
    key: process.env.NEXT_PUBLIC_IMGBB_API_KEY ?? '',
    image: image.replace('data:image/png;base64,', ''),
    expiration: 5000,
  };
  try {
    const response = await axios.post<UploadImageAPIResponse>(IMG_UPLOAD_SERVER, request, {
      withCredentials: true,
    });
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

interface UploadImageAPIRequest {
  key: string;
  image: string;
  name?: string;
  expiration?: number;
}

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
