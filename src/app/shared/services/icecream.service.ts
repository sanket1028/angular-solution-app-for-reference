import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icecream } from '../models/icecream';

@Injectable({ providedIn: 'root' })
export class IcecreamService {
  constructor(private http: HttpClient) {}

  getIcecreamDetails() {
    return this.http.get<Icecream[]>('/Icecream.json');
  }
}
