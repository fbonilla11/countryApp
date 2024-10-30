import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from '../../services/countries-service.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent implements OnInit {
  // Declare new empty Country array to save the result from the http request
  public countries: Country[] = [];

  public isLoaded: boolean = false;

  public placeholder: string = 'Buscar por capital';

  constructor(private CountriesService: CountriesServiceService) {}

  // Persistencia de datos
  ngOnInit(): void {
    this.placeholder = this.CountriesService.cacheStore.byCapital.searchTerm;
    this.countries = this.CountriesService.cacheStore.byCapital.countries;
  }

  searchByCapital(term: string): void {
    this.isLoaded = true;
    this.CountriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoaded = false;
    });
  }
}
