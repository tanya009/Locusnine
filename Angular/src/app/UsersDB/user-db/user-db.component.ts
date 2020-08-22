import { Component, OnInit } from '@angular/core';
import { UserDBService } from 'src/app/shared/user-db.Service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-db',
  templateUrl: './user-db.component.html',
  styleUrls: ['./user-db.component.css']
})
export class UserDBComponent implements OnInit {

  constructor(public service : UserDBService, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?: NgForm){

  if(form != null)
  form.resetForm();
  this.service.formData={
    Name:null,
    Email: '',
    Roletype:'',
    Status:'',
  }
}

onSubmit(form : NgForm){
  if(form.value.Name == null)
this.insertRecord(form);
else
this.updateRecord(form);

}

insertRecord(form : NgForm){
this.service.postUserDB(form.value).subscribe(res=>{
  this.toastr.success('Inserted Successfully')
  this.resetForm(form)
  this.service.refreshList();
});



}
updateRecord(form : NgForm){
this.service.postUserDB(form.value).subscribe(res=>{
  this.toastr.info('Updated Successfully')
  this.resetForm(form)
  this.service.refreshList();
});
  
  }


}