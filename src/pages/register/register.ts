import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Camera, CameraOptions } from "@ionic-native/camera";
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html",
})
export class RegisterPage {
  registerForm: FormGroup;
  image: string = "assets/images/logo.png";

  options: CameraOptions = {
    quality: 100,
    targetHeight: 100,
    targetWidth: 100,
    correctOrientation: true,
    allowEdit: true,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.PNG,
    mediaType: this.camera.MediaType.PICTURE,
    cameraDirection: this.camera.Direction.FRONT,
  };

  optionsLibrary: CameraOptions = {
    quality: 100,
    targetHeight: 100,
    targetWidth: 100,
    correctOrientation: true,
    allowEdit: true,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.PNG,
    mediaType: this.camera.MediaType.PICTURE,
    cameraDirection: this.camera.Direction.FRONT,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private camera: Camera,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      firstname: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      lastname: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      username: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
        ],
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(25),
        ],
      ],
      telnum: ["", [Validators.required, Validators.pattern]],
      email: ["", [Validators.required, Validators.email]],
    });
  }

  dismiss() {
    this.modalCtrl.dismiss(true);
  }

  getPicture() {
    this.camera.getPicture(this.options).then(
      (imageData) => {
        this.image = imageData;
        console.log(imageData);
      },
      (err) => {
        console.log("Error obtaining picture");
      }
    );
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.dismiss();
  }

  getFromLibrary() {
    this.camera.getPicture(this.optionsLibrary).then(
      (imageData) => {
        this.image = imageData;
        console.log(imageData);
      },
      (err) => {
        console.log("Error obtaining picture");
      }
    );
  }
}
