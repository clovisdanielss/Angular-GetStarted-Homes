import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  housingService: HousingService = inject(HousingService);
  housingLocationList: HousingLocation[] = [];
  
  async filterBySearch(search : string){
    this.housingLocationList = await this.housingService.getFilteredHousingLocations(search);
  }
  

  constructor(){
    this.housingService.getAllHousingLocations()
    .then((hl: HousingLocation[]) =>{
      this.housingLocationList = hl;
    })
  }
}
