import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _loginUrl = "http://localhost:2000/login";
  private _signupUrl = "http://localhost:2000/signup";
  private _adminUrl = "http://localhost:2000/adminlogin";
  private _addUrl = "http://localhost:2000/adminsignup";
  private _getuserUrl = "http://localhost:2000/adminuser";
  private _getadminUrl = "http://localhost:2000/admin";


constructor(private http: HttpClient) { }

loginUser(user:any)
{
  return this.http.post<any>(this._loginUrl, user);
}
signupUser(user:any)
{
  return this.http.post<any>(this._signupUrl, user);
}
adminLogin(admin:any)
{
  return this.http.post<any>(this._adminUrl, admin);
}
adminadd(add:any)
{
  return this.http.post<any>(this._addUrl, add);
}
getuser()
{
    return this.http.get(this._getuserUrl);
}
getadmin()
{
    return this.http.get(this._getadminUrl);
}
}

