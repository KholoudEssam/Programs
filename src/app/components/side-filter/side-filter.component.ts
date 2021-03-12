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
  cities: string[];
  selectedCities: string[] = [];

  constructor(private programsService: ProgramsService) {}

  ngOnInit(): void {
    this.cities = this.programsService.getCities();
  }

  getSelectedCity(city) {
    this.selectedCities.push(city);
    console.log(this.selectedCities);
  }
}
