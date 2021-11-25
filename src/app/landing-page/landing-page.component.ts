import { Component, OnInit } from '@angular/core';
import { CrudData } from '../models/data.interface';
import { AuthService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  countries = COUNTRIES;

  loggedIn: boolean;
  assignData: CrudData;
  constructor(private _auth: AuthService, public _crudService: CrudService) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getCrudData();
  }

  getCurrentUser() {
    this._auth.currentUser$.subscribe(user => {

      this.loggedIn = !!user;
    }, err=> console.log(err))
  }

  getCrudData() {
    this._crudService.getCrudData().subscribe((data: CrudData)=>{
      this.assignData = data;
    })
  }

}
