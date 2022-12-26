import axios from 'axios';

export const goodsListApi = axios.create({
    baseURL: 'https://gist.githubusercontent.com/styleshare-frontend/18089356186790c942c75e6dd5f90b90/raw/40517fc4a027233a03c6b220a2b069e1be7c7c39/goods-response-1.json',
    headers: {
        'Content-Type': 'text/plain',
    },
    withCredentials: false,
});