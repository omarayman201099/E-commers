import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../interfaces/product';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(productList:product[],userWord:string): product[] {
    return productList.filter((item) => item.title.toUpperCase().includes(userWord.toUpperCase()));}

}
