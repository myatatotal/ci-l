import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bankOne } from './bankOne';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(private httpClient: HttpClient) { }

  listBank():Observable<bankOne[]> {
    return this.httpClient.get<bankOne[]>('http://localhost:3000/listaControleLancamento');
  }

}
