import { Injectable } from '@angular/core';

import * as data from 'src/assets/data/data.json';
import { Program } from 'src/app/models/program';

@Injectable({
  providedIn: 'root',
})
export class ProgramsService {
  programs: Program[] = (data as any).default;
  constructor() {}

  getPrograms() {
    return this.programs;
  }

  filterProgram(prop: string, value: string) {
    const res = this.programs.filter((p) => p[prop] === value);

    return res;
  }
}
