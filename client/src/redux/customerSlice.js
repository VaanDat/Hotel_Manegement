import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
    name:"customer",
    initialState: {
        customers: {
            allCustomers: null,
            isFetching: false,
            error: false,
        },
    },
    reducers: {
        getCustomersStart: (state) => {
            state.customers.isFetching = true;
        },
        getCustomersSuccess: (state, action) => {
            state.customers.isFetching = false;
            state.customers.allCustomers = action.payload;
            state.customers.error = false;
        },
        getCustomerFailed: (state) => {
            state.customers.isFetching = false;
            state.customers.error = true;
        },
    },
})
export const {getCustomersStart, getCustomersSuccess, getCustomerFailed} = customerSlice.actions;
export default customerSlice.reducer;