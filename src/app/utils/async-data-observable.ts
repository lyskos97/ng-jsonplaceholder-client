import { Observable, of } from 'rxjs';
import { catchError, startWith, map } from 'rxjs/operators';

export interface IAsyncDataStatus<T> {
  data: T;
  loading: boolean;
  error: any;
}

export function asyncDataObservable<T>(obs: Observable<T>): Observable<IAsyncDataStatus<T>> {
  return obs.pipe(
    map(data => ({ data, loading: false, error: null })),
    startWith({ data: null, loading: true, error: null }),
    catchError(err => of({ loading: false, data: null, error: err }))
  );
}
