import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Feature1Guard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): Observable<boolean> {
    const isEligible: boolean = true;
    if (isEligible) {
      return of(true);
    } else {
      this.router.navigate(['/error']);
      return of(false);
    }

  }
}
