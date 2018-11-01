@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private loginService:LoginService, private router:Router) { }

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
        return this.loginService.isLoggedIn().map(e => {
            if (e) {
                return true;
            }
        }).catch(() => {
            this.router.navigate(['/login']);
            return Observable.of(false);
        });
    }   
}
