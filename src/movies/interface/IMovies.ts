export interface Movies {
  Awards: {
    wins: number;
    nominations: number;
    text: string;
  };

  Imdb: {
    rating: number;
    votes: number;
    id: number;
  };

  Tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    lastUpdated: Date;
  };
}

/*export interface Movies {
  Award: awards;

  Tomatores: {
    name: string;
    year: number;
  };
}

type awards = {
  name: string;
  year: number;
};*/
