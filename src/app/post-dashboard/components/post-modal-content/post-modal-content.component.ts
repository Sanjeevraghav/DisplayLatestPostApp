import { Component,Input} from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from '../../models/post.model'

@Component({
  selector: 'post-modal-content',
  templateUrl: './post-modal-content.component.html',
  styleUrls: ['./post-modal-content.component.scss'],
})

export class PostModalContent {
  @Input() post : Post;
  
  constructor(public activeModal: NgbActiveModal) {}
}
 