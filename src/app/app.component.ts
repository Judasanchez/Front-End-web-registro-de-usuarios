import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CitaComponent } from './components/cita/cita.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CitaComponent,
    LoginComponent,
    NavbarComponent


  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'poli-angular';
}
