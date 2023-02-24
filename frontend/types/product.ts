export type productsData = {
  name: string;
  url: string;
  _id: string;
  like: boolean;
  price: number;
  category: string;
  sex: string;
  smallDescription: string;
  bigDescription: string;
  type: string;
  star: number[];
  comments: string[];
}[];

export type productsItem = {
  name: string;
  url: string;
  _id: string;
  price: number;
  like: boolean;
  category: string;
  sex: string;
  smallDescription: string;
  bigDescription: string;
  type: string;
  star: number[];
  comments: string[];
};

export type productComment = {
  name: string;
  firstname: string;
  date: Date;
  description: string;
  title: string;
  star: number;
};

export type productFilter = {
  name: string;
  keyRequest: string;
  filterData: string[];
}[];

export type toggleFilter = {
  toggleFilter: Boolean;
  setToggleFilter: any;
  category: productsData;
};
