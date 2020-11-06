import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as actions from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  contador: number;

  title = 'redux-app';

  constructor(private store: Store<AppState>) {
    // this.contador = 10;
  }
  ngOnInit(): void {
    this.store.select('contador').subscribe((contador) => {
      console.log(contador);
      this.contador = contador;
    });
  }

  // incrementar() {
  //   this.contador += 1;
  // }

  // decrementar() {
  //   this.contador -= 1;
  // }

  incrementar() {
    // this.contador += 1;
    this.store.dispatch(actions.increment());
  }

  decrementar() {
    this.store.dispatch(actions.decrement());
    // this.contador -= 1;
  }
}
