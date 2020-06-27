import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {config} from "rxjs";

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueList = [];
  recipeList = [];

  currentLat: any;
  currentLong: any;
  geolocationPosition: any;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
      });
  }

  getVenues() {

    this.recipeValue = this.recipes.nativeElement.value;
    this.placeValue = this.places.nativeElement.value;

    if (this.recipeValue !== null) {
      /**
       * Write code to get recipe
       */
      console.log('Search Recipes - recipe');
      console.log('Recipe = ' + this.recipeValue);
      const recipeSearchURL = 'https://api.edamam.com/search?q=' + this.recipeValue +
        '&app_id=ef8e2402&app_key=7f4d6f21c10a7e248b6674492e1fd8ea';
      this._http.get(
        recipeSearchURL).subscribe((data: any) => {
        // "code to run if request succeeds: the response is passed to function",
        // console.log('Return Data:'),
        console.log(data);
        this.recipeList = data.hits;
      });

    }

    if (this.placeValue != null && this.placeValue !== '' && this.recipeValue != null && this.recipeValue !== '') {
      /**
       * Write code to get place
       */
      const locationURL = "https://api.foursquare.com/v2/venues/search?" +
        "client_id=4ZY1B5KJCBDULMP0ZVWWVCUYQARJ1JI4X0DWVMQ3RWPUDDJF" +
        "&client_secret=T4KHVXUPDWAJAWY3PGLOP3JS2OWP530WNBPQQE2TPAUKHRBE" +
        "&v=20200626&limit=10&near=" + this.placeValue + "&query=" + this.recipeValue;

      this._http.get(
        locationURL).subscribe((data: any) => {
        // "code to run if request succeeds: the response is passed to function",
        // console.log('Return Data:'),
        console.log(data);
        this.venueList = data.response.venues;
      });
    }
  }
}
