import { Component, Input } from '@angular/core';

@Component({
  selector: 'opi-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() id: string;
  @Input() author: string;
  @Input() timestamp: number;
  @Input() comments: any;
  @Input() title: string;
  @Input() index: number;
  @Input() url: number;
}
