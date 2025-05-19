import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Flight {
  id: number;
  departureAirport: string;
  departureCountry: string;
  departureCity: string;
  arrivalAirport: string;
  arrivalCountry: string;
  arrivalCity: string;
  departureTime: string;
  fligthDuration: string;
  image: string;
}

interface Airline {
  id: number;
  airlineName: string;
  country: string;
  city: string;
  address: string;
  identityColor: string;
  slogan: string;
  flights: Flight[];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
