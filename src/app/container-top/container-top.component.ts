import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-container-top',
  templateUrl: './container-top.component.html',
  styleUrls: ['./container-top.component.css']
})
export class ContainerTopComponent implements OnInit {

  constructor() { }

  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;
  ngOnInit(): void {
  }
  openMenu() {
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }

}
