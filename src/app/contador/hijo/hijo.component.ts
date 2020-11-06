import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { dividir, multiplicar } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [],
})
export class HijoComponent implements OnInit {
  public contador: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('contador').subscribe((contador) => {
      this.contador = contador;
    });
  }

  multiplicar() {
    this.store.dispatch(multiplicar({ numero: 10 }));
  }

  dividir() {
    this.store.dispatch(dividir({ numero: 2 }));
  }
}
