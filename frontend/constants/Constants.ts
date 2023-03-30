//API FROM NODE JS
const API_NODE_URL = process.env.NEXT_PUBLIC_API_NODE_URL;

export const URL_LOGIN: string = `${API_NODE_URL}auth/login`;
export const URL_SIGNUP: string = `${API_NODE_URL}auth/signup`;
export const URL_GETUSER: string = `${API_NODE_URL}auth/user/`;
export const URL_GET_PRODUCT: string = `${API_NODE_URL}product`;
export const URL_GET_PRODUCT_BY_CATEGORY: string = `${API_NODE_URL}product/category/`;
export const URL_CREATE_PRODUCT: string = `${API_NODE_URL}product`;

// API FROM NEXT JS
const API_NEXT_URL = process.env.NEXT_PUBLIC_API_NEXT_URL;

export const URL_FILTER: string = `${API_NEXT_URL}filtreProduct`;
export const URL_CATEGORY: string = `${API_NEXT_URL}allCategory`;
export const URL_SHOP_INDICATOR: string = `${API_NEXT_URL}shopIndicator`;
export const URL_SIGNUP_FORM_DATA: string = `${API_NEXT_URL}dataFormSignUp`;

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
export const SHOES_CATEGORY =
  "Nous sommes fiers de vous offrir une large sélection de chaussures de haute qualité conçues pour répondre aux besoins des randonneurs les plus exigeants. Nous avons des chaussures pour tous les types de randonnées, des sentiers de montagne les plus escarpés aux chemins de terre plus doux. Nos chaussures sont conçues pour offrir un confort maximal et une protection contre les éléments...";
export const CLOTHES_CATEGORY =
  " Que vous cherchiez des vêtements légers pour une randonnée estivale ou des tenues chaudes pour l'hiver, vous trouverez tout ce dont vous avez besoin ici. Nos vêtements sont spécialement conçus pour répondre aux besoins des randonneurs et des amoureux de la nature. Ils sont résistants aux intempéries, respirants et confortables pour vous permettre de profiter pleinement de vos activités en plein air.";
export const ACCESSORY_CATEGORY =
  "Nous proposons une grande variété d'accessoires essentiels pour la randonnée, tels que des sacs à dos, des bâtons de marche, des lampes frontales, des cartes topographiques, des sacs de couchage et bien d'autres encore. Tous nos équipements sont sélectionnés avec soin pour répondre aux besoins des randonneurs, qu'ils soient débutants ou experts.";

// ACCOUNT

export const DOUBLE_EMAIL_ERROR = "User validation failed: email: Error, expected `email` to be unique. Value: `paul.sonvico@free.fr`"