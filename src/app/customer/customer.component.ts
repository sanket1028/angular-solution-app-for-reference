import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IcecreamService } from '../shared/services/icecream.service';
import { Icecream } from '../shared/models/icecream';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit, OnDestroy {
  icecreams!: Icecream[];
  subscription!: Subscription;

  constructor(
    private icecreamService: IcecreamService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.icecreamService
      .getIcecreamDetails()
      .subscribe((data: Icecream[]) => {
        this.icecreams = data;
        console.log(data);
      });
  }

  onClick() {
    this.router.navigate(['/']);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
