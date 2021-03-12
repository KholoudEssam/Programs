import { Injectable } from '@angular/core';

import * as data from 'src/assets/data/data.json';
import { Program } from 'src/app/models/program';

@Injectable({
  providedIn: 'root',
})
export class ProgramsService {
  private programs: Program[] = (data as any).default;

  constructor() {
    this.assignImage();
  }

  assignImage() {
    this.programs.map((p) => {
      switch (p.school) {
        case 'Nova SBE':
          p.image = 'assets/images/Nova SBE.png';
          break;
        case 'EPITA':
          p.image = '';
          break;
        case 'IMT Atlantique':
          p.image = '';
          break;
        case 'TOULOUSE BUSINESS SCHOOL':
          p.image = 'assets/images/TOULOUSE BUSINESS SCHOOL.png';
          break;
        case 'KEDGE BS':
          p.image = 'assets/images/KEDGE BS.png';
          break;
        case 'PARIS SCHOOL OF BUSINESS':
          p.image = 'assets/images/PARIS SCHOOL OF BUSINESS.png';
          break;
        case 'AUDENCIA':
          p.image = 'assets/images/AUDENCIA.png';
          break;
        case 'Montpellier BS':
          p.image = 'assets/images/Montpellier BS.png';
          break;
        case 'EISTI':
          p.image = 'assets/images/EISTI.png';
          break;
        case 'ESC CLERMONT':
          p.image = 'assets/images/ESC CLERMONT.png';
          break;
        case 'SKEMA':
          p.image = 'assets/images/Skema.png';
          break;
        case 'ESAIP':
          p.image = 'assets/images/ESAIP.png';
          break;
        case 'ESSEC':
          p.image = '';
          break;
        case 'ICN':
          p.image = 'assets/images/ICN.png';
          break;
        case 'IESEG':
          p.image = 'assets/images/IESEG.png';
          break;
        case 'IPAG':
          p.image = 'assets/images/IPAG.png';
          break;
        case 'RENNES BUSINESS SCHOOL':
          p.image = '';
          break;
        case 'NEOMA':
          p.image = 'assets/images/NEOMA.png';
          break;
        case 'ECAM Lyon':
          p.image = 'assets/images/ECAM Lyon.png';
          break;
        case 'ISEP':
          p.image = 'assets/images/ISEP.png';
          break;
        case 'EM NORMANDIE':
          p.image = '';
          break;
        case 'EXCELIA':
          p.image = 'assets/images/EXCELIA.png';
          break;
        case 'ESSCA':
          p.image = '';
          break;
        case 'IUBH':
          p.image = 'assets/images/IUBH.png';
          break;
        case 'SRH : Germany':
          p.image = '';
          break;
        case 'UE Germany':
          p.image = '';
          break;
      }
    });
  }

  getPrograms() {
    return this.programs;
  }

  filterProgram(prop: string, value: string) {
    const cities = this.getCities();
    const isCity = cities.includes(value);
    if (!isCity) return;
    return this.programs.filter((p) => p[prop] === value);
  }
  getCities() {
    const cities = this.programs.map((p) => p.city.trim());
    const uniqueCities = new Set(cities);
    return [...uniqueCities];
  }
  getSchools() {
    const schools = this.programs.map((p) => p.school.trim());
    const uniqueSchools = new Set(schools);
    return [...uniqueSchools];
  }
  getFields() {
    const fields = this.programs.map((p) => p.type.trim());
    const uniqueFields = new Set(fields);
    return [...uniqueFields];
  }
}
