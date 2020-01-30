import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';
import { UrlService } from '../../provider/url.service';
import { map } from  'rxjs/operators';
import { Http } from  '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;
  constructor(public alert: AlertController, public urlService: UrlService, public http: Http,
     public nav: NavController, public loading: LoadingController) {

      this.email = "isaluafonseca@gmail.com";
      this.senha = "isabella123";
      }

  ngOnInit() {
  }


  async logar(){

    if((this.email == undefined)||(this.senha == undefined)){
      this.urlService.alertas("Atenção","Preecha todos os campos!!");

    }else{
      const load = await this.loading.create({
        message: "Verificanto Login..."
      });

      await load.present();

      this.http.get(this.urlService.getUrl()+"login.php?email="+this.email+"&senha="+this.senha).pipe(map(res => res.json()))
      .subscribe(

        data => {
        

          if(data.msg.logado=="sim"){
            if(data.dados.status == "Ativo"){
              load.dismiss();
              this.nav.navigateBack('home');
            }else{
              load.dismiss();
              this.urlService.alertas('Atenção','Usuario esta bloqueado!');
            }
            
          }else{
            load.dismiss();
            this.urlService.alertas('Atenção','Usuario ou senha incorretos!');
          }


        }
      );
    }

  }
}
