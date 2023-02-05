import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  

  @Input() title: string = "";
  @Input() operator: string = "*";

  @Output()
  resultOuput = new EventEmitter<number>();

  result: number = 0
  calculatorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.calculatorForm = formBuilder.group({
      number1: ['', Validators.required],
      number2: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onAction(){

    switch (this.operator) {
      case '-':
        this.result = this.calculatorForm.value.number1 - this.calculatorForm.value.number2
        break;
      case '/':
        this.result = this.calculatorForm.value.number1 / this.calculatorForm.value.number2
        break;
      case '*':
        this.result = this.calculatorForm.value.number1 * this.calculatorForm.value.number2
        break;
      case '+':
        this.result = this.calculatorForm.value.number1 + this.calculatorForm.value.number2
        break;
    
      default:
        break;
    }
    
    this.resultOuput.emit(this.result)

  }


}

