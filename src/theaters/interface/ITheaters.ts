export interface ITheaters {
  location: {
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
}
