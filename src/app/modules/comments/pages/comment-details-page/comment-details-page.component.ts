import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-details-page',
  templateUrl: './comment-details-page.component.html',
  styleUrls: ['./comment-details-page.component.css']
})
export class CommentDetailsPageComponent implements OnInit {
  commentId = this.route.snapshot.params['id'];
  comment$ = this.commentService.getComment(this.commentId);

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}
}
