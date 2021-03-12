import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { ProgramsService } from 'src/app/services/programs.service';
import { Program } from 'src/app/models/program';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnChanges {
  @Input() cityWord = '';

  programs: Program[];
  constructor(private programsService: ProgramsService) {}

  ngOnInit(): void {
    this.programs = this.programsService.getPrograms();
  }
  ngOnChanges() {
    console.log(this.cityWord);
    if (this.cityWord === '' || this.cityWord === null) return;
    this.programs = this.programsService.filterProgram('city', this.cityWord);
  }
}
