import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PermissionsGuards implements CanActivate {
    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
        if (this.hasUser()) {
            return true;
        }
        // alert("La ruta esta protegida no puede ingresar")
        return confirm('Desea dejar la ruta ?')
    }

    hasUser(): boolean{
        return false;       
    }
}   
