import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicCalculator';
  showResult = "El resultado de la operación es "

  setResult(result:number){
    this.showResult = `El resultado de la operación es ${result}`
  }
}
