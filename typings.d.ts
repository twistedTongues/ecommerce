interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface StripeBody {
  id: string;
  currency: string; 
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface Description {
  slogan: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
  image: Image;
}

interface HowItWorks {
  description1: string;
  description2: string;
  image: Image;
}

interface Disclaimer {
  slogan: string;
  description: string;
  disclaimer: string;
  image: Image;
}

interface Technology {
  technology1: string;
  technology2: string;
  technology3: string;
  description1: string;
  description2: string;
  description3: string;
  image: Image;
}

export interface Product extends SanityBody, StripeBody {
  _type: "product";
  mainProduct: boolean;
  name: string;
  image: Image;
  description: string;
  slogan: string;
  price: number;
  score: number;
  productGallery: Image[];
  mainProductBigPicture: Image;
  descriptionSection: Description;
  howItWorksSection: HowItWorks;
  disclaimerSection: Disclaimer;
  technologySection: Technology;
}
