import { Injectable } from '@angular/core';
import { UserDB } from './user-db.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDBService {

  formData : UserDB;
  list : UserDB[];
  readonly rootURL = "https://localhost:44399/api"
  
  constructor(private http : HttpClient) { }

  postUserDB(formData : UserDB){
  return  this.http.post(this.rootURL+'/UserDBs', formData);
     
  }
  refreshList(){
    this.http.get(this.rootURL+'/UserDBs')
    .toPromise().then(res => this.list = res as UserDB[]);
  }
  putUserDB(formData : UserDB){
    return  this.http.put(this.rootURL+'/UserDBs/'+formData.Roletype, formData);
  
    }
    deleteUser(id : number){
      return  this.http.delete(this.rootURL+'/UserDBs/' +id);
    }
}
