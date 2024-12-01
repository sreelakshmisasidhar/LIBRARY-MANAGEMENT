import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { MembersComponent } from './members/members.component';
import { AddBooksComponent } from './books/add-books/add-books.component';
import { EditBooksComponent } from './books/edit-books/edit-books.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'books',component:BooksComponent},
  {path:'members',component:MembersComponent},
  {path:'add',component:AddBooksComponent},
  {path:'books/:id/edit',component:EditBooksComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
