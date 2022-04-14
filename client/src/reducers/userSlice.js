import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        _id: "",
        name: "",
        email: "",
        avatar: "",
        addresses: [],
    },
    isLogin: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.data._id = payload.user._id;
            state.data.name = payload.user.name;
            state.data.email = payload.user.email;
            state.data.avatar = payload.user.avatar;
            state.data.addresses = payload.user.addresses;
            state.isLogin = true;
            localStorage.setItem("token", payload.token);
        },
        logout: (state) => {
            state.data = initialState.data;
            state.isLogin = false;
            localStorage.removeItem("token");
        }
    },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
