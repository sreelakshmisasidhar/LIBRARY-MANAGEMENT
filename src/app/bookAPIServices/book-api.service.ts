import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookModel } from '../books.model';

@Injectable({
  providedIn: 'root'
})
export class BookAPIService {
  server_url = "https://librarymanagement-zitr.onrender.com"

  constructor(private http:HttpClient) { }
  saveBookAPI(book:bookModel){
   return this.http.post(`${this.server_url}/books`,book)
  }
  getAllBookAPI(){
    return this.http.get(`${this.server_url}/books`)
  }
  getABookAPI(id:any){
    return this.http.get(`${this.server_url}/books/${id}`)

  }
  updateBookAPI(book:bookModel){
    return this.http.put(`${this.server_url}/books/${book.id}`,book)

  }
  removeBookAPI(id:any){
    return this.http.delete(`${this.server_url}/books/${id}`)

  }
}
