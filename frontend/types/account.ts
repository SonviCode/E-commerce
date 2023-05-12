export type dataFormSignUp = {
  id: string;
  name: string;
  example: string;
  type: string;
  required: boolean;
}[];

export type itemFormSignUp = {
  id: string;
  name: string;
  example: string;
  type: string;
  required: boolean;
};

interface CustomElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

export interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}
