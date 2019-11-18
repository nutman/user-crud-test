import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfig } from '@core/api-config';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<any> {
    return this.http.get(`${ApiConfig.users}`);
  }

  public createUser(user: User): Observable<any> {
    return this.http.post(`${ApiConfig.users}`, user);
  }

  public deleteUser(id: string): Observable<any> {
    return this.http.delete(`${ApiConfig.users}/${id}`);
  }
}
