import { Dispatch , SetStateAction} from 'react';

export type indicator = {
  actif: boolean;
  name: string;
};

export type SummaryProps = {
  numberIndicator: indicator[];
  setNumberIndicator: Dispatch<SetStateAction<indicator[]>>;
  isAbleNextStep: boolean;
  deliveryPrice: number;
};
