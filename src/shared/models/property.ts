export interface IProperty {
  property: {
    area: number;
    agency: any;
    baths: string;
    coverPhoto: any;
    externalID: string;
    price: number;
    rentFrequency: number;
    rooms: number;
    title: any;
    isVerified: boolean;
  };
}


export interface IPropertyQuery {
  areaMax?: string;
  bathsMin?: number;
  categoryExternalID?: number;
  locationExternalIDs?: number;
  minPrice?: number;
  maxPrice?: number;
  roomsMin?: number;
  purpose?: string;
  rentFrequency?: number;
  sort?: string;
}
