import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (localStorage.getItem("token")) {
    return true; // Hay un token, pasa.
  } else {
    router.navigate(['/login']); // No hay token, al login.
    return false; 
  }
};
