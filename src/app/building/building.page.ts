import { Component, OnInit } from '@angular/core';
import { AppSubRoutes, SubPage } from '../start/start.page';

@Component({
  selector: 'app-building',
  templateUrl: './building.page.html',
  styleUrls: ['./building.page.scss'],
})
export class BuildingPage implements OnInit {

  subRoutes: SubPage[];

  constructor() { }

  ngOnInit() {
    this.subRoutes = [
      new SubPage(`Buildings`, `${AppSubRoutes.buildings}`, ''),
      new SubPage(`procedures`, `${AppSubRoutes.procedures}`, ''),
    ];
  }
}
