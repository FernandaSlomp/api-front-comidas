import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alimento } from '../modelo/Alimento';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {

  private url:string = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  selecionar():Observable<Alimento[]>{
    return this.http.get<Alimento[]>(this.url);
  }
  
  cadastrar(obj:Alimento):Observable<Alimento>{
    return this.http.post<Alimento>(this.url, obj);
  }

  editar(obj:Alimento):Observable<Alimento>{
    return this.http.put<Alimento>(this.url, obj);
  }

  remover(codigo:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + codigo);
  }
  
}
