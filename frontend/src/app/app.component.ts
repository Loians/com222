import { Component } from '@angular/core';
import { Vinho, tipos, uvas } from './vinho';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {
    this.http = http;
  }
  title = 'Suavinho';
  author = 'Luyan';
  tipos = tipos;
  uvas = uvas;

  vinhoModel = new Vinho(
    'Casal Garcia',
    'portugal',
    'tinto',
    'boa',
    'com tudo'
  );

  submitForm(data: Vinho): void {
    console.log(data);

    this.http
      .post('http://localhost:3000/vinho', data)
      .subscribe((res) => console.log(res));
  }
}
