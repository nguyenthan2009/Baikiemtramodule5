import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.scss']
})
export class ListbookComponent implements OnInit {
  books : Book[] = []

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    this.getAllBook()
  }
  getAllBook(){
    this.auth.getListBook().subscribe(data => this.books= data)
  }
  deleteProduct(id: any){
    let a =window.confirm("Bạn muốn xoá không");
    if(a){
      this.auth.deletebyId(id).subscribe(data => {
        this.getAllBook();
      })
    }

  }
}
