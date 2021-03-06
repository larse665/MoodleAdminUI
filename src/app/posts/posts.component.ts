import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  // instantiate posts to an empty array
  stacks: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getTenants();
  }
  
  refresh(){
    this.stacks = [];
    console.log("refreshing...")
    this.getTenants();
  }

  getTenants(){
    console.log('routing to posts component');
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(stacks => {
      this.stacks = stacks;
    });
  }

  deleteTenant(stackname: string){
    console.log("about to delete tenant " + stackname);
    //delete stack using api
    this.postsService.deleteStack(stackname).subscribe(result => {
      alert("Stack Delete in Progress for stack " + stackname);
      console.log("refreshing list")
      this.refresh();
    })
  }
}
