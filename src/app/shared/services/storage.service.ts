import { Injectable } from '@angular/core';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  constructor() {
  }

  getCookie(name) {
    return Cookies.get(name);
  }

  setCookie(name, value, expires?) {
    return Cookies.set(name, value, { expires: expires || 365 });
  }

  removeCookie(name) {
    return Cookies.remove(name);
  }
}
