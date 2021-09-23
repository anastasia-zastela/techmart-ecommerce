import { $host } from '../httpCommon';

export default class ProductService {
  static getAll = async () => {
    const { data } = await $host.get('/products');

    return data;
  };

  static getById = async (id) => {
    const { data } = await $host.get('/products/' + id);

    return data;
  };
}
