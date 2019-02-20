import { Pipe, PipeTransform } from '@angular/core';

import { Post  } from "../models/post.model";

@Pipe({
  name: 'searchByTitle'
})
export class SearchByTitlePipe implements PipeTransform {

  transform(lstPost: Post[], searchText: string) {
    return lstPost.filter(post =>post.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }
}
