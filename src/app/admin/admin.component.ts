import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Icecream } from '../shared/models/icecream';
import { IcecreamService } from '../shared/services/icecream.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit, OnDestroy {
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
