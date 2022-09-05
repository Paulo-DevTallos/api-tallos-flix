export interface ITheaters {
  address: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  geo: {
    type: string;
    coordinate: [];
  };
}
