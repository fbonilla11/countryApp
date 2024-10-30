import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesServiceService } from '../../services/countries-service.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent implements OnInit {
  // Declare new empty Country array to save the result from the http request
  public countries: Country[] = [];

  public placeholder: string = '';

  public isLoaded: boolean = false;

  constructor(private CountriesService: CountriesServiceService) {}

  ngOnInit(): void {
    this.placeholder = this.CountriesService.cacheStore.byCountries.searchTerm;
    this.countries = this.CountriesService.cacheStore.byCountries.countries;
  }

  searchByCountry(term: string): void {
    this.isLoaded = true;
    this.CountriesService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoaded = false;
    });
  }
}
