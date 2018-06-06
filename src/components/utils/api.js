import axios from 'axios';

export const makeApiRequest = (path) => {
    const baseRoute=`http://hartpr20180601085617.azurewebsites.net`
    return axios.get(`${baseRoute}/api/${path}`)
}