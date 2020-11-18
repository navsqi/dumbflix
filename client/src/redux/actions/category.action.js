import { GET_CATEGORY } from '../constant/category.constant';
import { API } from '../../utils/baseAxios';
import { sendError } from '../../utils/errorAsync';

export const getCategories = (queryString = '') => {
  return {
    type: GET_CATEGORY,
    payload: async () => {
      try {
        const response = await API.get(`/categories${queryString}`);

        if (response.data.status === 'success') {
          return response.data.data.categories;
        }
      } catch (err) {
        sendError(err);
      }
    },
  };
};
