import { Country } from '../interfaces/country';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root',
})
export class CountriesServiceService {
  private apiURL: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: {
      searchTerm: '',
      countries: [],
    },
    byCountries: {
      searchTerm: '',
      countries: [],
    },
    byRegion: {
      region: '',
      countries: [],
    },
  };

  constructor(private HttpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }
  private loadFromLocalStorage(): void {
    if (!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiURL}/alpha/${code}`;

    return this.HttpClient.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null)),
      delay(2000)
    );
  }

  private getHttpRequest(url: string): Observable<Country[]> {
    return this.HttpClient.get<Country[]>(url).pipe(
      catchError(() => of([])),
      delay(1500)
    );
  }

  // This method sends an http request to the API and returns an array of Country
  searchCapital(capital: string): Observable<Country[]> {
    // Send a request to api with a dynamic URL
    const url = `${this.apiURL}/capital/${capital}`;

    // Return the request
    return this.getHttpRequest(url).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCapital = {
            searchTerm: capital,
            countries,
          })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchCountry(country: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${country}`;

    return this.getHttpRequest(url).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCountries = {
            searchTerm: country,
            countries,
          })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiURL}/region/${region}`;

    return this.getHttpRequest(url).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byRegion = {
            region: region,
            countries,
          })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }
}
