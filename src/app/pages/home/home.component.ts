import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component'
import { LoginService } from '@services/login/login.service';
import { Pinto } from '@services/login/login';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  pinto:Pinto | null = null

  constructor (private service: LoginService) {}

  ngOnInit() {
    this.service.teste().subscribe(data => {
      console.log(data)
      this.pinto = data
    })
  }

}
