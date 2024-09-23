import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared-module";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: { ngSkipHydration: 'true' }
})
export class HomeComponent implements OnInit {
  slides = [
    {
      name: 'Promoção Combo Irresistível',
      path: 'assets/layout/images/banner-home-combo.jpg',
    },
    {
      name: 'Promoção Wafers',
      path: 'assets/layout/images/banner-home-wafers.jpg',
    }
  ];

  ngOnInit() {
  }
}
