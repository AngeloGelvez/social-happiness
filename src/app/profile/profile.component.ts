import { Component, OnInit } from '@angular/core';
import { User } from '../../class/user';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { UserByIdService } from '../../service/user-by-id.service';

@Component({
  selector: 'app-profile',
  imports: [RouterLink, CommonModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit{

  userLocalStorage!: User;
  userPerfilActivo!: number;

  constructor(
    private getUserByIdService: UserByIdService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let numberId = this.activedRoute.snapshot.params["id"];

    let getUserLocalStorage = localStorage.getItem("user") || "";
    let parseData = JSON.parse(getUserLocalStorage);
    this.userPerfilActivo = parseData.id;
    console.log(this.userPerfilActivo);

    this.getUserById(numberId);
  }

  public getUserById(id:number) {
    this.getUserByIdService.getUserById(id).subscribe({
      next: (res) => {
        this.userLocalStorage = new User(res);
        console.log(this.userLocalStorage);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        
      },
    });
  }
}
