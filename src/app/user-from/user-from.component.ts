import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-from',
  templateUrl: './user-from.component.html',
  styleUrls: ['./user-from.component.css']
})
export class UserFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getValues(val:any){      /**Function to get the value in console */
    console.log(val)      /**Printing the value in console */
  }
  }


