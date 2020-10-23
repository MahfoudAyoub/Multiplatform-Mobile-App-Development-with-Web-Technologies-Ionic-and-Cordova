import { Component, Inject } from "@angular/core";
import { IonicPage, NavController, NavParams,ToastController,ActionSheetController  } from "ionic-angular";
import { Dish } from "../../shared/dish";
import { CommentPage } from "../comment/comment";
import { Comment } from "../../shared/comment";
import { FavoriteProvider } from "../../providers/favorite/favorite";
import { Nav, Platform, ModalController } from "ionic-angular";
/**
 * Generated class for the DishdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-dishdetail",
  templateUrl: "dishdetail.html",
})
export class DishdetailPage {
  dish: Dish;
  errMess: string;
  avgstars: string;
  numcomments: number;
  favorite: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    @Inject("BaseURL") private BaseURL,
    private favoriteservice: FavoriteProvider,
    private toastCtrl: ToastController,
    public actionSheetController: ActionSheetController,
    public modalCtrl: ModalController
  ) {
    this.dish = navParams.get("dish");
    this.favorite = favoriteservice.isFavorite(this.dish.id);
    this.dish = navParams.get("dish");
    this.numcomments = this.dish.comments.length;
    let total = 0;
    this.dish.comments.forEach((comment) => (total += comment.rating));
    this.avgstars = (total / this.numcomments).toFixed(2);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      title: "Select Actions",
      buttons: [
        {
          text: "Add To Favorite",
          icon: "heart",
          handler: () => {
            this.addToFavorites();
          },
        },
        {
          text: "Add Comment",
          icon: "add",
          handler: () => {
            this.openComment();
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  }

  addToFavorites() {
    console.log("Adding to Favorites", this.dish.id);
    this.favorite = this.favoriteservice.addFavorite(this.dish.id);
    this.toastCtrl
      .create({
        message: "Dish " + this.dish.id + " added as favorite successfully",
        position: "middle",
        duration: 3000,
      })
      .present();
  }

  openComment() {
    let modal = this.modalCtrl.create(CommentPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DishdetailPage");
  }
}