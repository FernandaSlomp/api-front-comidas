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

  tabela:boolean = true; 

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

  selecionarAlimento(id:number):void{
    this.alimento = this.alimentos[id];
    this.ehCadastro = false;
    this.tabela = false;
  }

  
  editar():void{
    this.servico.editar(this.alimento)
    .subscribe(retorno => {
     // let id = this.alimentos.findIndex(id);
      this.alimentos.push(retorno);
      this.alimento = new Alimento();
      alert('Alimento alterado!')
    }); 
  }

  termoBusca: string = '';

  filterAlimentos(): any[] {
    if (!this.termoBusca || this.termoBusca.trim() === '') {
      return this.alimentos;
    }

    const termoLowerCase = this.termoBusca.toLowerCase();
    return this.alimentos.filter(a => a.nomeAlimento.toLowerCase().includes(termoLowerCase));
  }

}
