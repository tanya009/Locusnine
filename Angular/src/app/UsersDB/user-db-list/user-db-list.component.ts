import { Component, OnInit } from '@angular/core';
import { UserDBService } from 'src/app/shared/user-db.Service';
import { UserDB } from 'src/app/shared/user-db.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-db-list',
  templateUrl: './user-db-list.component.html',
  styleUrls: ['./user-db-list.component.css']
})
export class UserDBListComponent implements OnInit {
 
  constructor(public service : UserDBService,private toastr : ToastrService) { }

  ngOnInit(){
    this.service.refreshList();
  }

  PopulateForm(user : UserDB){
    this.service.formData=Object.assign({}, user);
  }

  onDelete(id: number){
    if(confirm('Are you sure to delete')){
    this.service.deleteUser(id).subscribe(res=>{
      this.service.refreshList();
      this.toastr.warning('Deleted Successfully')
    })
  }
}
}