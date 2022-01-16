export interface IProperty {
  property: {
    amenities?: any;
    area: number;
    agency: any;
    baths: string;
    coverPhoto: any;
    description?: string,
    externalID: string;
    furnishingStatus?: string,
    photos?: any,
    purpose?: string,
    price: number;
    rentFrequency: number;
    rooms: number;
    title: any;
    type?: string;
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

