import { axiosClient } from "./axiosClient";

export const userApi = {
    loginGoogle: (token) => {
        return axiosClient.post("/api/v1/user/loginGoogle", {
            token,
        });
    },
    currentUser: () => {
        return axiosClient.get("/api/v1/user/", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
    },
    updateUser: (data) => {
        return axiosClient.patch("/api/v1/user",
            data,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        );
    }
};
