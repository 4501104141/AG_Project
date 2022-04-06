import { axiosClient } from "./axiosClient";

export const userApi = {
    loginGoogle: (token) => {
        return axiosClient.post("/api/v1/user/loginGoogle", {
            token,
        });
    },
};
