import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  formularioRegistrarUsuario!: FormGroup;
  errorFlag: boolean = false;


  public enviarFormulario() {
    
  }

}
