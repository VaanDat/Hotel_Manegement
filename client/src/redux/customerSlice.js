import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customers: {
      allCustomers: null,
      isFetching: false,
      error: false,
    },
    addCustomer: {
      customer: null,
      isFetching: false,
      error: true,
      success: false,
    },
    deleteCustomer: {
      isFetching: false,
      error: false,
    },
    msg: "",
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
    addCustomerStart: (state) => {
      state.addCustomer.isFetching = true;
    },
    addCustomerSuccess: (state, action) => {
      state.addCustomer.isFetching = false;
      state.addCustomer.customer = action.payload;
      state.addCustomer.error = false;
    },
    addCustomerFailed: (state) => {
      state.addCustomer.isFetching = false;
      state.addCustomer.error = true;
    },
    deleteCustomerStart: (state) => {
      state.deleteCustomer.isFetching = true;
    },
    deleteCustomerSuccess: (state, action) => {
      state.deleteCustomer.isFetching = false;
      state.deleteCustomer.error = false;
      state.msg = action.payload;
    },
    deleteCustomerFailed: (state, action) => {
      state.deleteCustomer.isFetching = false;
      state.deleteCustomer.error = true;
      state.msg = action.payload;
    },
  },
});
export const {
  getCustomersStart,
  getCustomersSuccess,
  getCustomerFailed,
  addCustomerStart,
  addCustomerSuccess,
  addCustomerFailed,
  deleteCustomerStart,
  deleteCustomerSuccess,
  deleteCustomerFailed,
} = customerSlice.actions;
export default customerSlice.reducer;
