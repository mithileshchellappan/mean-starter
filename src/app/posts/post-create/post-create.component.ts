import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  newPost = 'Test';
  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost() {
    if (this.enteredContent != '' && this.enteredTitle != '') {
      const post: any = {
        title: this.enteredTitle,
        content: this.enteredContent,
      };
      this.postCreated.emit(post);
    }
  }
}
