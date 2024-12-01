import { Component, OnInit } from '@angular/core';
import { bookModel } from '../books.model';
import { BookAPIService } from '../bookAPIServices/book-api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  allBooks:bookModel[] = []
  searchKey:string=""
  p: number = 1;

  constructor(private api:BookAPIService){}
  ngOnInit(): void {
    this.getAllBooks()
  }
  getAllBooks(){
    this.api.getAllBookAPI().subscribe((result:any)=>{
      this.allBooks = result
      console.log(this.allBooks);
      
    })
  }
  deleteBook(id:any){
    this.api.removeBookAPI(id).subscribe((result:any)=>{
      this.getAllBooks()
    })

  }

}
