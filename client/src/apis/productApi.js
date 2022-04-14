import { axiosClient } from "./axiosClient";

export const productApi = {
    getProducts: () => {
        return axiosClient.get("/api/v1/product");
    },
    getProduct: (id) => {
        return axiosClient.get(`/api/v1/product/${id}`);
    },
    createProduct: (data) => {
        return axiosClient.post("/api/v1/product", data);
    },
    updateProduct: (id, data) => {
        return axiosClient.put(`/api/v1/product/${id}`, data);
    },
    deleteProduct: (id) => {
        return axiosClient.delete(`/api/v1/product/${id}`);
    }
};
