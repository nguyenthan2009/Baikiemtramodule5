import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Book} from "./book";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }
  getListBook(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL+'books');
  }
  deletebyId(id: number) : Observable<any>{
    return this.http.delete<any>(API_URL+ 'books/'+id);
  }
  findById(id: number): Observable<Book> {
    return this.http.get<Book>(API_URL + 'books/'+id)
  }
  create(Book: any): Observable<any> {
    return this.http.post<any>(API_URL + 'books', Book)
  }

}
