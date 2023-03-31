import { CalculusService } from './../calculus.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculus',
  templateUrl: './calculus.component.html',
  styleUrls: ['./calculus.component.css'],
})
export class CalculusComponent {
  constructor(private calculusService: CalculusService) {}

  calc(n: string) {
    this.calculusService.doCalculation(Number(n));
  }

  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 0 || (charCode > 31 && (charCode < 48 || charCode > 57))) {
      return false;
    }
    return true;
  }
}
