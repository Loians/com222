import { Component, OnInit } from '@angular/core';
import { Vinho, tipos, uvas } from '../vinho';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  

  constructor(private http: HttpClient) {
    this.http = http;
  }
  tipos = tipos;
  uvas = uvas;

  ngOnInit(): void {
  }
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
