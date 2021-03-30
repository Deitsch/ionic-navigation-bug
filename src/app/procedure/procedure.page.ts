import { Component, OnInit } from '@angular/core';
import { AppSubRoutes, SubPage } from '../start/start.page';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.page.html',
  styleUrls: ['./procedure.page.scss'],
})
export class ProcedurePage implements OnInit {

  subRoutes: SubPage[];

  constructor() { }

  ngOnInit() {
    this.subRoutes = [
      new SubPage(`Buildings`, `${AppSubRoutes.buildings}`, ''),
      new SubPage(`Procedures`, `${AppSubRoutes.procedures}`, ''),
    ];
  }
}
