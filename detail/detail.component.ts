import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Book} from "../book";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  book? : Book;

  constructor(private auth : AuthService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.auth.findById(paramMap.get('id')).subscribe(data=>{
        this.book = data;
      })

    })
  }

}
