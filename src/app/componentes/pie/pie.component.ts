import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  copyright: string = '© M.lio';
  hoy: any = new Date();

  constructor() { }

  ngOnInit() {
  }

}
