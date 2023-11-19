import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alimento } from '../modelo/Alimento';
import { AlimentoService } from '../servico/alimento.service';

@Component({
  selector: 'app-home',
  standalone: true,
imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  ehCadastro:boolean = true;

  alimentos:Alimento[] = [];

  constructor(private servico:AlimentoService){}

  selecionar():void{
    this.servico.selecionar().subscribe(retorno => this.alimentos = retorno); 
  }

  ngOnInit(){
    this.selecionar();
  }

}
