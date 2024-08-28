export type ErrorValidation = {
  property: string;
  children?: ErrorValidation[];
  constraints: {
    [text: string]: string;
  };
};
