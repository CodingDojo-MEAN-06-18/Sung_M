import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gitscore',
  templateUrl: './gitscore.component.html',
  styleUrls: ['./gitscore.component.css'],
})
export class GitscoreComponent implements OnInit {
  username = '';
  score = 0;

  constructor(private _gitService: GitService) {}
  onSubmit() {
    this._gitService.getUserInfo(this.username).subscribe(
      response => {
        this.score = response['public_repos'] + response['followers'];
        console.log(this.username);
        console.log(this.score);
      },
      err => {
        console.log(err);
      }
    );
    this.username = undefined;
  }
  ngOnInit() {}
}
