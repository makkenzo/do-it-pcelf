import axios from 'axios';

const baseURL: string = 'https://dip-api.vercel.app';

const server = axios.create({ baseURL: baseURL });

export default server;
