//API FROM NODE JS
const API_NODE_URL = process.env.NEXT_PUBLIC_API_NODE_URL;

export const URL_LOGIN: string = `${API_NODE_URL}auth/login`;
export const URL_GETUSER: string = `${API_NODE_URL}auth/user/`;
export const URL_GET_PRODUCT: string = `${API_NODE_URL}product`;
export const URL_GET_PRODUCT_BY_CATEGORY: string = `${API_NODE_URL}product/category/`;

// API FROM NEXT JS
const API_NEXT_URL = process.env.NEXT_PUBLIC_API_NEXT_URL;

export const URL_FILTER: string = `${API_NEXT_URL}filtreProduct`;
export const URL_CATEGORY: string = `${API_NEXT_URL}allCategory`;
export const URL_SHOP_INDICATOR: string = `${API_NEXT_URL}shopIndicator`;

// HOME
export const COMPANY_NAME: string = "Montagne Addicte";
export const TEXT_HOME: string = `${COMPANY_NAME} vous propose la vente en ligne de vêtements et d'accessoires pour le ski et pour le snowboard, de streetwear, et biensur pour la montagne.`;

// PRODUCT
export const NO_PRODUCT_FOR_FILTER: string = "Désolé, aucun produit correspond";
export const ASCENDING_PRICE = "Prix croissants";
export const DECREASING_PRICE = "Prix décroissants";
export const THE_NEWS = "Les nouveautés";
export const THE_MOST_POPULAR = "Les plus populaires";
export const SHOPPING_CART = "panier";
