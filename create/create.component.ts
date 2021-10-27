import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  status : any;
  formBook : FormGroup = new FormGroup(
    {
      title: new FormControl(),
      author : new FormControl(),
      description : new FormControl(),
    }


  )

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
  createProduct(){
    const  Book = this.formBook.value;
    this.auth.create(Book).subscribe(data => {
      this.status = "Tạo sản phẩm thành công";
    })
  }

}
