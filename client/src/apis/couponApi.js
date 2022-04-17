import { axiosClient } from "./axiosClient";

export const couponApi = {
    getCoupon: (id) => {
        return axiosClient.get(`/api/v1/coupon/${id}`);
    },
    createCoupon: (data) => {
        return axiosClient.post("/api/v1/coupon", data);
    },
};
