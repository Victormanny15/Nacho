import { Component, OnInit, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle,  IonButton, IonAlert } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonButton, IonAlert]
})
export class HeaderComponent  implements OnInit {
  @Input() titulo?: string;

  constructor() { }

  ngOnInit() {}

}
