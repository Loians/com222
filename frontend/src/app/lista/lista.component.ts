import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vinho } from '../vinho';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.http = http;
  }


  dados:Vinho[] = [];
  ngOnInit(): void {
    this.http
    .get('http://localhost:3000/vinhos')
    .subscribe((res:any) => {this.dados = res});
  }

}
