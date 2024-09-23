import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared-module";

@Component({
  selector: 'app-logar',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule
  ],
  templateUrl: './logar.component.html',
  styleUrl: './logar.component.scss'
})
export class LogarComponent {
  @Input() visivel: boolean = false;

  exibirDialog() {
    this.visivel = true;
  }

}
