import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TWITCH_AUTH_URL} from './auth.constant';
import {Customer} from './customer.mode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentCustomer: Customer;

  constructor(private httpClient: HttpClient) {
  }

  loginTwitchIdToken(idToken: string): Observable<object> {
    return this.httpClient
      .post(
        TWITCH_AUTH_URL,
        {
          idToken
        }
      );
  }
}
