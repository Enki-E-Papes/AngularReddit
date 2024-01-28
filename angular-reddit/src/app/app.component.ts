import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    let t = title.value;
    let v= link.value;
    console.log(`Ciao Come stai: `+t+ ` Vuoi accedere al seguente link ?:: `+ v);
    console.log(`Ciao Come stai: `+title.value+ ` Vuoi accedere al seguente link ?: `+ link.value);
    console.log(`Ciao Come stai: ${title.value} Vuoi accedere al seguente link ?:: ${link.value}`);
    return false;
  }
}
