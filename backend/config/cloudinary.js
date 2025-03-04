import {v2 as clodinary} from 'cloudinary';

const connectCloudinary = async() =>{

    connectCloudinary.config({
        cloud_name:process.env.CLOUDINARY_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        secret_api_key: process.env.CLOUDINARY_SECRET_KEY
    })
}

export default connectCloudinary