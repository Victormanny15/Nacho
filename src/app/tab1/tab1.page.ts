import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonAlert } from '@ionic/angular/standalone';
import { HeaderComponent } from '../componentes/header/header.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonButton, IonAlert, HeaderComponent ],
})
export class Tab1Page {
  constructor() {}

  alertButtons = ['Action'];
}
