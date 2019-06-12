import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  public post = {};
  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    
  }
  submit() {
    this.dataService.createPost(this.post).subscribe((post) => {
      this.router.navigate(['blog']);
    });
  }
}
