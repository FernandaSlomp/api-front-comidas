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

  termoBusca: string = '';

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

    this.alimento = this.alimentos.find(a => a.codigo === id)!;
    //this.alimento = this.alimentos[id];
    this.ehCadastro = false;
    this.tabela = false;
  }

  
  editar():void{
    this.servico.editar(this.alimento)
    .subscribe(retorno => {
      let id = this.alimentos.findIndex(obj  => {
        return obj.codigo == retorno.codigo;
      });
      this.alimentos[id] = retorno;
      this.alimento = new Alimento();
      this.ehCadastro = true;
      this.tabela = true;
      alert('Alimento alterado!')
    }); 
  }

  filterAlimentos(): any[] {
    if (!this.termoBusca || this.termoBusca.trim() === '') {
      return this.alimentos;
    }

    const termoLowerCase = this.termoBusca.toLowerCase();
    return this.alimentos.filter(a => a.nomeAlimento.toLowerCase().includes(termoLowerCase));
  }

  remover():void{
    this.servico.remover(this.alimento.codigo)
    .subscribe(retorno => {
      let id = this.alimentos.findIndex(obj  => {
        return obj.codigo == this.alimento.codigo;
      });
      this.alimentos.splice(id, 1)
      this.alimento = new Alimento();
      this.ehCadastro = true;
      this.tabela = true;
      alert('Alimento excluido!')
    });
  }

  cancelar():void{
    this.alimento = new Alimento();
    this.ehCadastro = true;
    this.tabela = true; 
  }
  

}
