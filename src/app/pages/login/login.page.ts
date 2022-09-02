import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //vamos a crear variables:
  user: string;
  password: string;

  constructor(private toastController: ToastController, private router: Router ) { }

  ngOnInit() {
  }

  //vamos a crear el metodo:
  login(){
    if (this.user == 'admin' && this.password == 'admin') {
      this.router.navigate(['/administrador']);
    }else{
      this.toastError();
    }
  }

  async toastError(){
    const toast = await this.toastController.create({
      message: 'EL USUARIO O CONTRASEÑA ES INCORRECTO',
      duration: 4000
    })
    toast.present();
  }

}
