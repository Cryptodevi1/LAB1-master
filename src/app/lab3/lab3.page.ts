import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.page.html',
  styleUrls: ['./lab3.page.scss'],
})
export class Lab3Page {
  data: any = [];
  data_users: any = [];
  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = 'https://api.jsonbin.io/v3/b/6466616a9d312622a360a5f6';
  loading: any;
  height:any;
  constructor(public loadingController: LoadingController) { }
  async load() {
    this.loading = await this.loadingController.create({
      spinner: "bubbles",
      message: 'loading...'
    });
    await this.loading.present();
    fetch(this.dataUrl).then(res => res.json())
      .then(json => {
        this.data = json;
        this.data = this.data.record;
        let i = 0;

        while (this.data[i] != undefined) {
            this.data_users.push(this.data[i][0]);
            console.log(this.data[i][0]);
          
          i++;
        }
        this.loading.dismiss();
      });
  }
  toggleDetails(i: number) {
    if (this.showDetails[i]) {
      this.showDetails[i] = false;
    }
    else {
      this.showDetails[i] = true;
    }
  }

  getColor(a: number) {
    return a > 10 ? 'green' : 'red';
  }





}
