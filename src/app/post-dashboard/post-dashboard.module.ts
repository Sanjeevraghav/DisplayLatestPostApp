import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PostDashboardComponent } from './containers/post-dashboard/post-dashboard.component';
import { PostListComponent } from "./components/post-list/post-list.component";
import { PostModalContent } from "./components/post-modal-content/post-modal-content.component";

import { SearchByTitlePipe } from "./pipes/search-by-title.pipe";

import { PostService } from "./services/post.service";

@NgModule({
  declarations: [
    PostDashboardComponent,
    PostListComponent,
    PostModalContent,
    SearchByTitlePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers:[
    PostService
  ],
  entryComponents:[
    PostModalContent
  ],
  exports: [
    PostDashboardComponent
  ]
})
export class PostDashboardModule { }
