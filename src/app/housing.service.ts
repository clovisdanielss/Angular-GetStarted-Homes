import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly url = 'http://localhost:3000/locations';

  public async getAllHousingLocations(): Promise<HousingLocation[]> {
    var data = await fetch(this.url);
    return data.json() ?? []
  }

  public async getFilteredHousingLocations(search: string): Promise<HousingLocation[]> {

    return (await this.getAllHousingLocations())
          .filter(item => item.name.toLocaleLowerCase().indexOf(search.trim().toLowerCase()) !== -1);
  }
  
  public async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    var data = await fetch(`${this.url}/${id}`);
    return data.json() ?? undefined;
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

  constructor() { }
}


