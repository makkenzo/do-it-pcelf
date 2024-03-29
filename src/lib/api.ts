import axios from 'axios';

const isDev = process.env.NODE_ENV === 'development';

const baseURL: string = 'https://dip-api.vercel.app';

const server = axios.create({ baseURL: baseURL });

export default server;
