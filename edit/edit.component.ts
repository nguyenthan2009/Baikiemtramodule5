import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  formBook : any ;
  status :any;

  constructor(private auth : AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct(){
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.auth.findById(paramMap.get('id')).subscribe(data=>{
        this.formBook = new FormGroup({
          id : new FormControl(data.id),
          tittle : new FormControl(data.title),
          author : new FormControl(data.author),
          description : new FormControl(data.description),

        })

      })

    })
  }
  editProduct(){
    // @ts-ignore
    const Book = this.formProduct.value;
    this.auth.create(Book).subscribe(data => {
       this.status = "sửa sản phẩm thành công";
    })
  }



}
