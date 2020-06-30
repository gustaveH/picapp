import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID vJNPK6y4HuYvJ_IUx75IzsVuAAEAa05Jy9NxByNn3C4',
  },
});
