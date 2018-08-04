import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GitService {
  constructor(private _http: HttpClient) {}

  getUserInfo = function(username) {
    return this._http.get(`https://api.github.com/users/${username}`);
  };
}
