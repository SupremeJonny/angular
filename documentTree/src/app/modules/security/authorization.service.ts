import { Injectable } from '@angular/core';
import { ApiService } from '../api/boundaries/api.service';
/**
 * Interact with Back End( java server)
 * todo
 *  - add logic in init
 *  - add logic in isAuthenticated
 */
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private apiService: ApiService) {
  }

  init(): Promise<boolean> {
    // load at APP_INITIALIZER
    return null;
  }

  isAuthenticated(): boolean {
    return true;
  }

}
