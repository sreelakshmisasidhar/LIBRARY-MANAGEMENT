import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allBooks:any[],searchTerm:string): any[]{
    const result:any = []
    if(!allBooks || !searchTerm){
      return allBooks
    }
    allBooks.forEach((item:any)=>{
      if(item['title'].toLowerCase().includes(searchTerm.toLowerCase())){
        result.push(item)
      }
    })
    return result;

}
}
