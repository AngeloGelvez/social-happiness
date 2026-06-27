import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegisterUserService } from '../../service/register-user.service';
import { User } from '../../class/user';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit{

  formularioRegistrarUsuario!: FormGroup;
  userData: User = new User();
  errorFlag: boolean = false;

  loaderFlag:boolean = false;

  constructor(
    private postUserService: RegisterUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formularioRegistrarUsuario = new FormGroup({
      nombre: new FormControl(""),
      apellido: new FormControl(""),
      fechaNac: new FormControl(""),
      edad: new FormControl(""),
      correo: new FormControl(""),
      telefono: new FormControl(""),
      genero: new FormControl("male"),
      contrasena: new FormControl(""),
      image: new FormControl(""),
    });
  }

  public calcularEdad(event: Event) {
    const inputValue = event.target as HTMLInputElement;
    const fecha1 = new Date(inputValue.value);
    const fechaToday = new Date();
    
    const diferenciaMilisegundos = fechaToday.getTime() - fecha1.getTime();
    const aniosTotales = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 365.25));

    this.userData.setage = aniosTotales;
    this.formularioRegistrarUsuario.patchValue({ edad: aniosTotales + " Años" });
    //console.log(aniosTotales);
  }

  public setValues() {
    this.userData.setfirstName = this.formularioRegistrarUsuario.get("nombre")?.value;
    this.userData.setlastName = this.formularioRegistrarUsuario.get("apellido")?.value;
    this.userData.setbirthDate = this.formularioRegistrarUsuario.get("fechaNac")?.value;
    this.userData.setemail = this.formularioRegistrarUsuario.get("correo")?.value;
    this.userData.setphone = this.formularioRegistrarUsuario.get("telefono")?.value;
    this.userData.setemail = this.formularioRegistrarUsuario.get("correo")?.value;
    this.userData.setgender = this.formularioRegistrarUsuario.get("genero")?.value;
    this.userData.setpassword = this.formularioRegistrarUsuario.get("contrasena")?.value;
    this.userData.setimage = this.formularioRegistrarUsuario.get("image")?.value || "https://cdn-icons-png.flaticon.com/512/711/711769.png";
    this.userData.setusername = this.userData.getfirstName.substring(0,1) + this.userData.getlastName;
    //console.log(this.userData);

    this.enviarFormulario(this.userData);
  }

  public enviarFormulario(userData: User) {
    this.postUserService.postUser(userData).subscribe({
      next: (res) => {
        //console.log(res);
        localStorage.setItem("user", JSON.stringify(res));
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.loaderFlag = true;

        setTimeout(() => {
          this.router.navigate(['/', 'feed']);
        },2000);
      }
    });
  }

}
