import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookAPIService } from 'src/app/bookAPIServices/book-api.service';
import { bookModel } from 'src/app/books.model';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {
  book:bookModel={}
  constructor(private route:ActivatedRoute,private api:BookAPIService,private router:Router){ }
ngOnInit(): void {
  this.route.params.subscribe((result:any)=>{
    console.log(result);
    const {id} = result
    console.log(id);
    this.getBookDetails(id)
    
  })
}
getBookDetails(id:any){
  this.api.getABookAPI(id).subscribe((result:any)=>{
     this.book = result
     console.log(this.book);
     
  })
}
cancel(id:any){
    this.getBookDetails(id)
}
updateBook(){
  this.api.updateBookAPI(this.book).subscribe((result:any)=>{
    alert("user updated sucessfully!!!")
    this.router.navigateByUrl('/books')
  })
}
}
