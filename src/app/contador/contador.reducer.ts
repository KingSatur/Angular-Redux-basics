import { createReducer, on } from '@ngrx/store';
import {
  decrement,
  dividir,
  increment,
  multiplicar,
  reset,
} from './contador.actions';

// Estado inicial de la aplicacion
export const initialState = 1500;

const _contadorReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero),
  on(reset, (state) => 0)
);

export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}
