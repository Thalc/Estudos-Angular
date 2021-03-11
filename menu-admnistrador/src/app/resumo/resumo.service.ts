import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ResumoService {

  constructor(private http:HttpClient) { }

  getResumo()
  {
    return this.http.get(environment.apiUrl + "resumo");
  }
}
