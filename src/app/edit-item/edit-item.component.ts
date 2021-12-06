import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudData } from '../models/data.interface';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  first: string;
  last: string = undefined;
  email: string = undefined;
  phone: string = undefined;
  location: string = undefined;
  hobby: string = undefined;

  constructor(private _crudService: CrudService, private router: Router) { 
    this.first = this.router.getCurrentNavigation().extras.state.data.first;
    this.last = this.router.getCurrentNavigation().extras.state.data.last;
    this.email = this.router.getCurrentNavigation().extras.state.data.email;
    this.phone = this.router.getCurrentNavigation().extras.state.data.phone;
    this.location = this.router.getCurrentNavigation().extras.state.data.location;
    this.hobby = this.router.getCurrentNavigation().extras.state.data.hobby;
  }

  ngOnInit(): void {
 
  }


  save() {

  }

}
