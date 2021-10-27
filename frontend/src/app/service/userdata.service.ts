import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private _saveuserUrl = "http://localhost:2000/user";
  private _checkuserUrl = "http://localhost:2000/checkuser";

constructor(private http: HttpClient) { }

saveuser(personal:any)
{
  return this.http.post<any>(this._saveuserUrl, personal);
}
checkuser(user:any)
{
  return this.http.post<any>(this._checkuserUrl, user);
}
deleteuser(id:any)
{
  return this.http.delete("http://localhost:2000/"+id);
}
}
