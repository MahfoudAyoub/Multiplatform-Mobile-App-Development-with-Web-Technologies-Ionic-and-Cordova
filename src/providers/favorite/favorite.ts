import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Dish } from "../../shared/dish";
import { Observable } from "rxjs/Observable";
import { DishProvider } from "../dish/dish";
import { Storage } from "@ionic/storage";
import { map } from "rxjs/operators";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {
  favorites: Array<any>;

  constructor(
    private dishservice: DishProvider,
    private storage: Storage,
    private localNotifications: LocalNotifications
  ) {
    console.log("Hello FavoriteProvider Provider");
    this.favorites = [];
    console.log("get favorites: " + this.storage.get("favorites"));
  }

  addFavorite(id: number): boolean {
    if (!this.isFavorite(id)) {
      this.favorites.push(id);
      this.storage.set("favorites", this.favorites);
      
      // Schedule a single notification
      this.localNotifications.schedule({
        id: id,
        text: "Dish " + id + " added as a favorite successfully",
      });
      }
      console.log("addFavorites", this.favorites);
      return true;
  }

  isFavorite(id: number): boolean {
    return this.favorites.some((el) => el === id);
  }

  getFavorites(): Observable<Dish[]> {
    this.storage.get("favorites").then((data) => {
      this.favorites = data;
    });

    return this.dishservice
      .getDishes()
      .pipe(
        map((dishes) =>
          dishes.filter((dish) => this.favorites.some((el) => el === dish.id))
        )
      );
  }

  deleteFavorite(id: number): Observable<Dish[]> {
    //this.favorites = this.storage.get('favorites');
    let index = this.favorites.indexOf(id);
    if (index >= 0) {
      this.favorites.splice(index, 1);
      this.storage.set("favorites", this.favorites);
      return this.getFavorites();
    } else {
      console.log("Deleting non-existant favorite", id);
      return Observable.throw("Deleting non-existant favorite" + id);
    }
  }
}
