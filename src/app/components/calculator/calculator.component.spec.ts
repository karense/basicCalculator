import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let button: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ ReactiveFormsModule,
        FormsModule],
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    button = fixture.nativeElement.querySelector('#submit')
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario invalido', ()  => {
    const number1 = component.calculatorForm.controls['number1']
    number1.setValue(1)

    expect(component.calculatorForm.invalid).toBeTrue()
  })

  it('Formulario valido', () => {
    const number1 = component.calculatorForm.controls['number1']
    number1.setValue(1)
    const number2 = component.calculatorForm.controls['number2']
    number2.setValue(2)

    expect(component.calculatorForm.invalid).toBeFalse()
  })

  it('Resultado correcto', () => {

    let emit: number | null = null

    const number1 = component.calculatorForm.controls['number1']
    number1.setValue(1)
    const number2 = component.calculatorForm.controls['number2']
    number2.setValue(2)

    component.operator = "+"

    component.resultOuput.subscribe(res => {
      emit = res;
      button.dispatchEvent(new Event('click'));
      expect(emit).toEqual(3);
    })

  })

});
