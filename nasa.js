import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID p0T9v7PbzK_jYHMrcxOXNsv4RncSohLqzSB7f_VUOM8'
    },
});