import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    coupon: {
        _id: "",
        code: "",
        discount: 0,
    },
    shippingFee: 0,
    totalPrice: 0,
    totalPriceAfter: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        storage: (state) => {
            let storageCart = JSON.parse(localStorage.getItem("cart"));
            if (storageCart) {
                state.items = storageCart.items;
                state.coupon = storageCart.coupon;
                state.totalPrice = storageCart.totalPrice;
                state.totalPriceAfter = state.totalPrice - state.coupon.discount;
            }
        },
        add: (state, { payload }) => {
            state.items.push(payload);
            state.totalPrice = state.items.reduce((acc, item) => acc + item.priceAfter, 0);
            state.totalPriceAfter = state.totalPrice;
            localStorage.setItem("cart", JSON.stringify(state));
        },
        remove: (state, { payload }) => {
            state.items = state.items.filter(item => item._id !== payload);
            state.totalPrice = state.items.reduce((acc, item) => acc + item.priceAfter, 0);
            state.totalPriceAfter = state.totalPrice;
            localStorage.setItem("cart", JSON.stringify(state));
        },
        setItems: (state, { payload }) => {
            state.items = payload.items;
            state.totalPrice = state.items.reduce((acc, item) => acc + item.priceAfter, 0);
            state.totalPriceAfter = state.totalPrice;
            localStorage.setItem("cart", JSON.stringify(state));
        },
        setCouponStore: (state, { payload }) => {
            state.coupon = payload;
            state.totalPriceAfter = state.totalPrice - state.coupon.discount;
            localStorage.setItem("cart", JSON.stringify(state));
        },
        setShipping: (state, { payload }) => {
            payload ? (state.shippingFee = 1) : (state.shippingFee = 0);
            state.totalPriceAfter = state.totalPrice + state.shippingFee - state.coupon.discount;
        },
        setTotalPriceAfter: (state, { payload }) => {
            state.totalPriceAfter = payload;
            localStorage.setItem("cart", JSON.stringify(state));
        },
        resetCart: (state) => {
            state.items = [];
            state.coupon = initialState.coupon;
            state.shippingFee = initialState.shippingFee;
            state.totalPrice = initialState.totalPrice;
            state.totalPriceAfter = initialState.totalPriceAfter;
            localStorage.setItem("cart", JSON.stringify(state));
        },
    },
}
);
export const { resetCart, storage, add, remove, setItems, setTotalPriceAfter, setShipping, setCouponStore } = cartSlice.actions;
export default cartSlice.reducer;
