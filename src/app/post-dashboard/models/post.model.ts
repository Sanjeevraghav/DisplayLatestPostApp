export interface Post {
    title: string;
    url: string;
    created_at: string;
    author: string;
  }

export interface responseData{
      hits:[];
      nbHits:number;
      page:number;
      nbPages:number;
      hitsPerPage:number;
      processingTimeMS:number;
      exhaustiveNbHits:Boolean;
      query:string;
      params:string;
   }
