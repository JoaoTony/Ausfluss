export interface Address {
  city: string;
  country: string;
  district: any;
  isoCountryCode: string;
  name: string;
  postalCode: any;
  region: string;
  street: string;
  streetNumber: any;
  subregion: string;
  timezone: any

}

export interface Coordinates {
  coords: {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
  },
  mocked: boolean,
  timestamp: number;
}
