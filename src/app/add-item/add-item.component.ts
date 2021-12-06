import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  first: string = undefined;
  last: string = undefined;
  email: string = undefined;
  phone: string = undefined;
  location: string = undefined;
  hobby: string = undefined;

  constructor(private _crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
  }

  public add() {
    this._crudService.postCrudData(
      this.first,
      this.last,
      this.email,
      this.phone,
      this.location,
      this.hobby
    ).subscribe(() => {
      console.log('success')
      this.router.navigateByUrl('/landing-page');
    }, error => console.log(error))
  }
}
