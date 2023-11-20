import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alimento } from '../modelo/Alimento';
import { AlimentoService } from '../servico/alimento.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  alimento = new Alimento();

  ehCadastro:boolean = true;

  alimentos:Alimento[] = [];

  constructor(private servico:AlimentoService){}

  selecionar():void{
    this.servico.selecionar().subscribe(retorno => this.alimentos = retorno); 
  }

  ngOnInit(){
    this.selecionar();
  }

  cadastrar():void{
    this.servico.cadastrar(this.alimento)
    .subscribe(retorno => {
      this.alimentos.push(retorno);
      this.alimento = new Alimento();
      alert('Alimento cadastrado!')
    }); 
  }

}
