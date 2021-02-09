import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  //   posts = [
  //     { title: 'First Post', content: 'This is content 1' },
  //     { title: 'Second Post', content: 'This is content 2' },
  //     { title: 'Third Post', content: 'This is content 3' },
  //   ];
  @Input() posts= [{title:'',content:''}];
  
}
