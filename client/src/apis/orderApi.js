import { axiosClient } from "./axiosClient";

export const orderApi = {
    getOrder: () => {
        return axiosClient.get(`/api/v1/order/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
    },
    createOrder: (data) => {
        return axiosClient.post("/api/v1/order", data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
    },
    cancelOrder: (id) => {
        return axiosClient.patch(`/api/v1/order/${id}`, null, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
    },
    feedbackOrder: (id, data) => {
        return axiosClient.put(`/api/v1/order/${id}`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
    }
};
