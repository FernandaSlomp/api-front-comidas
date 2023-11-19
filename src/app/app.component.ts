import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AlimentoService } from './servico/alimento.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [
    AlimentoService
  ],
  imports: [CommonModule, RouterOutlet, HomeComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'api-front-comidas';
}
