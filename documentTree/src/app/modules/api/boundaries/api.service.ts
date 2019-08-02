import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiError } from '../models/api-error';
/**
 * Api Service to communicate with back end (eg. java server, nodsjs server)
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {
    this.onError = new EventEmitter();
  }

  loading: boolean;
  onError: EventEmitter<ApiError>;

  endLoading() {
    setTimeout(() => this.loading = false, 100);
  }
  startLoading() {
    setTimeout(() => this.loading = true, 100);
  }
}

/*
  REST CRUD
*/
export interface CrudService<T> {

  getOne(entityId: string, properties?: string[]): Promise<T>;

  createOne(entity: T): Observable<T>;

  updateOne(entityId: string, entity: T): Observable<T>;

  removeOne(entityId: string): Observable<T>;

  doAction(entityId: string, action: any): Observable<T>;
}
