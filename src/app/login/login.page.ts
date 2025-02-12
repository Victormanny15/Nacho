import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonContent, IonInfiniteScroll, IonItem, IonLabel, IonList, IonImg, IonButton, IonCard, IonCardContent, IonInput, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonTitle, IonToolbar, IonHeader, IonAvatar, IonContent, IonInfiniteScroll, IonItem, IonLabel, IonList, IonImg, IonButton, IonCard, IonCardContent, IonInput],
})
export class LoginPage implements OnInit {
  items: string[] = [];

  constructor() {}

  ngOnInit() {
    // Inicializa los items para la lista
    for (let i = 1; i <= 20; i++) {
      this.items.push(`Item ${i}`);
    }
  }

  // Método para simular la carga de más datos
  loadData(event: any) {
    setTimeout(() => {
      const newItems = [];
      for (let i = this.items.length + 1; i <= this.items.length + 10; i++) {
        newItems.push(`Item ${i}`);
      }
      this.items.push(...newItems);
      event.target.complete(); // Completa la acción de infinite scroll
    }, 1000);
  }
}
