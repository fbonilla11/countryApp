import { Component } from '@angular/core';
import { CountriesServiceService } from '../../services/countries-service.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  // Declare new empty Country array to save the result from the http request
  public countries: Country[] = [];

  constructor(private CountriesService: CountriesServiceService) {}

  searchByRegion(term: string): void {
    this.CountriesService.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
