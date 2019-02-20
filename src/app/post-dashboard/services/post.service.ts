import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Post, responseData} from '../models/post.model';

@Injectable()
export class PostService {
  private postApi = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';
  
  constructor( private http:HttpClient) {}
  
  getPosts (): Observable<Post[]> {
    return this.http.get<responseData>(this.postApi)
      .pipe(
        map(data => data.hits),
        catchError(this.handleError('getPosts', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

