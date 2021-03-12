import { Component, OnInit } from '@angular/core';

import { ProgramsService } from 'src/app/services/programs.service';
import { Program } from 'src/app/models/program';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  programs: Program[];
  constructor(private programsService: ProgramsService) {}

  ngOnInit(): void {
    // this.programs = this.programsService.filterProgram('length', '3 years');
    // console.log(this.programs);
  }
}
