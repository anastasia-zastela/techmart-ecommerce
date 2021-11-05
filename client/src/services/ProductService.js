import { $host } from "../httpCommon";

export default class ProductService {
  static getAll = async () => {
    const { data } = await $host.get("/api/products");

    return data;
  };

  static getById = async (id) => {
    const { data } = await $host.get(`/api/products/${id}`);

    return data;
  };
}
