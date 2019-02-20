import { Component,Input} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Post } from '../../models/post.model'
import { PostModalContent } from "../../components/post-modal-content/post-modal-content.component";

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
 
  @Input() posts:Post[];
  @Input() searchText:string;

  constructor(private modalService: NgbModal) { }

  postSelected(post:Post){
    const modalRef = this.modalService.open(PostModalContent);
      modalRef.componentInstance.post =post;
    }

    trackByCreated(index, item) {
      return item.created_at;
    }
}

