import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesServiceService } from '../../services/countries-service.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  // Declare new empty Country array to save the result from the http request
  public countries: Country[] = [];

  constructor(private CountriesService: CountriesServiceService) {}

  searchByCountry(term: string): void {
    this.CountriesService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }

}
