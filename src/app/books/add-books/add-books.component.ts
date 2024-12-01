import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookAPIService } from 'src/app/bookAPIServices/book-api.service';
import { bookModel } from 'src/app/books.model';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit{
  book:bookModel = {}
  allBooks:any = []
  constructor(private api:BookAPIService,private router:Router){}
  ngOnInit(): void {
    this.api.getAllBookAPI().subscribe((result:any)=>{
      // console.log(result);
      this.allBooks = result
      
     })

    
  }

  addBook(){
    const existingBooks = this.allBooks.find((item:any)=>item.id==this.book.id)
    if(existingBooks){
      alert("id already exist!!! use unique id to add user")
    }else{
       this.api.saveBookAPI(this.book).subscribe({
      next:(result:any)=>{
        console.log(result);
        alert(`${result.title} has successfully added to our DB`)
        this.router.navigateByUrl('/books')

      },
      error:(err:any)=>{
        console.log(err);
        
      }
     })
    }
  }
  cancel(){
    this.book = {}



  }
}
