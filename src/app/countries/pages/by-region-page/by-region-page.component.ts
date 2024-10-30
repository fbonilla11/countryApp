import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from '../../services/countries-service.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent implements OnInit {
  // Declare new empty Country array to save the result from the http request
  public countries: Country[] = [];

  public isLoaded: boolean = false;

  public regions: Region[] = [
    'Africa',
    'Europe',
    'America',
    'South America',
    'Asia',
    'Oceania',
  ];

  public selectedRegion?: Region;

  constructor(private CountriesService: CountriesServiceService) {}


  ngOnInit(): void {
    this.selectedRegion = this.CountriesService.cacheStore.byRegion.region;
    this.countries = this.CountriesService.cacheStore.byRegion.countries;
  }

  searchByRegion(term: Region): void {
    this.selectedRegion = term;
    this.isLoaded = true;
    this.CountriesService.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoaded = false;
    });
  }
}
