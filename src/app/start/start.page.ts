import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  subRoutes: SubPage[];

  constructor() { }

  ngOnInit() {
    this.subRoutes = [
      new SubPage(`Buildings`, `${AppSubRoutes.buildings}`, ''),
      new SubPage(`Procedures`, `${AppSubRoutes.procedures}`, ''),
    ];
  }
}

export class SubPage {
  title: string;
  component: string;
  base: string;

  constructor(title: string, base: string, component: string) {
    this.title = title;
    this.base = base;
    this.component = component;
  }

  /**
   * It shouldn't be needed to have such a method; routerLink should work fine with relative path, but it does not.
   **/
  getAbsLinkForPage(): string {
    return '/' + this.base + '/' + this.component;
  }
}

export enum AppSubRoutes {
  procedures = 'procedures',
  buildings = 'buildings',
  start = 'start',
}
