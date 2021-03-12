import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ProgramsService } from 'src/app/services/programs.service';
import { Program } from 'src/app/models/program';
@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.css'],
})
export class SideFilterComponent implements OnInit {
  moreCityControl = new FormControl();
  moreFieldsControl = new FormControl();
  moreSchoolsControl = new FormControl();

  cities: string[];
  fields: string[];
  schools: string[];

  selectedCities: string[] = [];
  selectedFields: string[] = [];
  selectedSchools: string[] = [];

  selectedProgram: string;
  selectedLang: string;
  selectedPrice: string;
  rbProgram = [
    { key: 1, value: 'Bachelor' },
    { key: 2, value: 'Master' },
    { key: 3, value: 'MBA' },
    { key: 4, value: 'BHD' },
  ];
  rbLang = [
    { key: 5, value: 'All' },
    { key: 6, value: 'English' },
    { key: 7, value: 'French' },
  ];
  rbPrice = [
    { key: 8, value: 'Price: low to high' },
    { key: 9, value: 'Price: high to low' },
  ];
  removable = true;
  selectable = true;

  constructor(private programsService: ProgramsService) {}

  ngOnInit(): void {
    this.cities = this.programsService.getCities();
    this.fields = this.programsService.getFields();
    this.schools = this.programsService.getSchools();
  }

  getSelectedCity(city) {
    this.selectedCities.push(city);
    // console.log(this.selectedCities);
  }
  getSelectedField(field) {
    this.selectedFields.push(field);
    // console.log(this.selectedFields);
  }
  getSelectedSchool(school) {
    this.selectedSchools.push(school);
    // console.log(this.selectedSchools);
  }

  onRemoveSelectedCity(c) {
    const cIndex = this.selectedCities.indexOf(c);
    this.selectedCities.splice(cIndex, 1);
  }
  onRemoveSelectedField(f) {
    const fIndex = this.selectedFields.indexOf(f);
    this.selectedFields.splice(fIndex, 1);
  }
  onRemoveSelectedSchool(s) {
    const sIndex = this.selectedSchools.indexOf(s);
    this.selectedSchools.splice(sIndex, 1);
  }

  getSelectedProgram(rb) {
    this.selectedProgram = rb;
  }
  getSelectedLang(rb) {
    this.selectedLang = rb;
  }
  getSelectedPrice(rb) {
    this.selectedPrice = rb;
  }

  onFilter() {
    console.log(this.selectedCities);
    console.log(this.selectedFields);
    console.log(this.selectedSchools);
    console.log(this.selectedLang);
    console.log(this.selectedProgram);
    console.log(this.selectedPrice);
  }
}
