import { Component, OnInit, Inject } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Leader } from "../../shared/leader";
import { LeaderProvider } from "../../providers/leader/leader";

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-about",
  templateUrl: "about.html",
})
export class AboutPage implements OnInit {
  leaders: Leader[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dishservice: LeaderProvider,
    @Inject("BaseURL") private BaseURL
  ) {}

  ngOnInit() {
    this.dishservice.getLeaders().subscribe(
      (leaders) => (this.leaders = leaders),
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AboutPage");
  }
}
