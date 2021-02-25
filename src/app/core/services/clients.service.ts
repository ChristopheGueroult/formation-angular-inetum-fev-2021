import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateClient } from '../enums/state-client.enum';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private collection$: Observable<Client[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Client[]>(`${this.urlApi}/clients`);
  }

  // get collection
  get collection(): Observable<Client[]> {
    return this.collection$;
  }

  // change state item
  public changeState(item: Client, state: StateClient): Observable<Client> {
    // item.state = state;
    const obj = { ...item };
    obj.state = state;
    return this.update(obj);
  }

  // update item in collection
  public update(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}/clients/${item.id}`, item);
  }

  // add item in collection

  // delete item in collection

  // get item by id from collection
}
