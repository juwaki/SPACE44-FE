import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudData } from '../models/data.interface';
import { AuthService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  loggedIn: boolean;
  assignData: CrudData[] = [];
  constructor(private _auth: AuthService, private _crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getCrudData();
  }

  getCurrentUser() {
    this._auth.currentUser$.subscribe(user => {

      this.loggedIn = !!user;
    }, err => console.log(err))
  }

  getCrudData() {
    this._crudService.getCrudData().subscribe((data: CrudData[]) => {
      this.assignData = data;
    })
  }

  addItem() {
    this.router.navigateByUrl('/add-item');
  }

  editItem(crudData: CrudData) {
    this.router.navigate(['edit-item'], { state: { data: crudData } });
  }

  deleteItem(id: number) {
    this._crudService.deleteCrudData(id).subscribe(response => {
      console.log('delete successful');
      window.location.reload();
    })
  }

  downloadFile() {
    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const header = Object.keys(this.assignData[0]);
    let csv = this.assignData.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], { type: 'text/csv' })
    saveAs(blob, "space44.csv");
  }

  loggout() {
    this._auth.logout();
  }

}
