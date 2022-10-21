import axios from 'axios';
import { useQuery } from 'react-query';

const productsInfo = () =>
  axios.get('/api/v1/product', {
    headers: { 'Content-Type': 'application/json' },
  });
//내가 어떤걸가져온다

export const useGetProducts = () =>
  useQuery('productsInfo', productsInfo, {
    onError: (e) => {
      console.log(e.message);
    },
  });
