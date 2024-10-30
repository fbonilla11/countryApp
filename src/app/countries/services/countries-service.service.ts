import { Country } from '../interfaces/country';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesServiceService {
  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor(private HttpClient: HttpClient) {}

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiURL}/alpha/${code}`;

    return this.HttpClient.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  private getHttpRequest(url: string): Observable<Country[]> {
    return this.HttpClient.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  // This method sends an http request to the API and returns an array of Country
  searchCapital(capital: string): Observable<Country[]> {
    // Send a request to api with a dynamic URL
    const url = `${this.apiURL}/capital/${capital}`;

    // Return the request
    return this.getHttpRequest(url);
  }

  searchCountry(country: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${country}`;

    return this.getHttpRequest(url);
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiURL}/region/${region}`;

    return this.getHttpRequest(url);
  }
}
