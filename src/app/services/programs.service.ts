import { Injectable } from '@angular/core';

import * as data from 'src/assets/data/data.json';
import { Program } from 'src/app/models/program';

@Injectable({
  providedIn: 'root',
})
export class ProgramsService {
  programs: Program[] = (data as any).default;

  constructor() {
    this.programs.map((p) => {
      if (p.school === 'Nova SBE') p.image = 'assets/images/Nova SBE.png';
    });
  }

  getPrograms() {
    return this.programs;
  }
  getCities() {
    const cities = this.programs.map((p) => p.city.trim());
    const uniqueCities = new Set(cities);
    return [...uniqueCities];
  }
  filterProgram(prop: string, value: string) {
    const cities = this.getCities();
    const isCity = cities.includes(value);
    // console.log(cities);
    // console.log(isCity);
    if (!isCity) return;
    return this.programs.filter((p) => p[prop] === value);
  }
}
