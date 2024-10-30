import { Region } from './region.type';
import { Country } from './country';

export interface CacheStore {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCountries;
}

export interface TermCountries {
  searchTerm: string;
  countries: Country[];
}

export interface RegionCountries {
  region?: Region;
  countries: Country[];
}
