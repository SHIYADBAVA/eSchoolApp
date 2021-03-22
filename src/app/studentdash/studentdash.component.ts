import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-studentdash',
  templateUrl: './studentdash.component.html',
  styleUrls: ['./studentdash.component.css']
})
export class StudentdashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'My Timetable', cols: 1, rows: 1 },
          { title: 'My Attandance', cols: 1, rows: 1 },
          { title: 'My Performance', cols: 1, rows: 1 },
          { title: 'Assignments', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'My Timetable', cols: 2, rows: 1 },
        { title: 'My Attandance', cols: 1, rows: 1 },
        { title: 'My Performance', cols: 1, rows: 2 },
        { title: 'Assignments', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
