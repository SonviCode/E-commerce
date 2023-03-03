export const COMPANY_NAME = "Montagne Addicte";

//API FROM NODE JS
const API_NODE_URL = process.env.NEXT_PUBLIC_API_NODE_URL;

export const URL_LOGIN:string = `${API_NODE_URL}auth/login`;
export const URL_GETUSER:string = `${API_NODE_URL}auth/user/`;
export const URL_GET_PRODUCT:string = `${API_NODE_URL}product`;
export const URL_GET_PRODUCT_BY_CATEGORY:string = `${API_NODE_URL}product/category/`;

// API FROM NEXT JS
const API_NEXT_URL = process.env.NEXT_PUBLIC_API_NEXT_URL;

export const URL_FILTER:string = `${API_NEXT_URL}filtreProduct`;
export const URL_CATEGORY:string = `${API_NEXT_URL}imgHome`;
