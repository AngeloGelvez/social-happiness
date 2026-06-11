import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { LoginModel } from '../../class/login-model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{

  formularioLogin!: FormGroup;
  loginModel: LoginModel = new LoginModel();
  errorFlag:boolean = false;

  flagLoader:boolean = false;

  constructor(
    private loginService: LoginService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formularioLogin = new FormGroup({
      username: new FormControl(""),
      password: new FormControl("")
    });
  }

  public enviarFormulario():void {
    //Capturamos la info del formulario reactivo
    this.loginModel.setUsername = this.formularioLogin.get("username")?.value;
    this.loginModel.setPassword = this.formularioLogin.get("password")?.value;
    console.log(this.loginModel);

    //Llamamos la peticion para enviar la data de los formularios (EL LOGIN)
    this.requestLogin(this.loginModel);
  }

  public requestLogin(body: LoginModel):void {
    this.loginService.userLogin(body).subscribe({
      next: (res) => {
        let { accessToken } = res;
        console.log(res);
        //Lamamos a la autenticacion para validar el token
        this.authenticatedLogin(accessToken);
      },
      error: (err) => {
        console.error(err);
        this.errorFlag = true;
      },
      complete: () => {
        this.flagLoader = true;
        console.log("Cargando...");
      }
    });
  }

  public authenticatedLogin(token:string):void {
    this.authenticationService.getAuthenticated(token).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res)); 

        this.flagLoader = false;
        this.router.navigate(["/","feed"]);
      },
      error: (err) => {
        console.error(err);
        this.router.navigate(["/"]);
      },
      complete: () => {
        console.log("Termino autenticacion");
      }
    });
  }
}
