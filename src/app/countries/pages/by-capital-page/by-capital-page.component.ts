import { Component } from '@angular/core';
import { CountriesServiceService } from '../../services/countries-service.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  // Declare new empty Country array to save the result from the http request
  public countries: Country[] = [];

  constructor(private CountriesService: CountriesServiceService) {}

  searchByCapital(term: string): void {
    this.CountriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
