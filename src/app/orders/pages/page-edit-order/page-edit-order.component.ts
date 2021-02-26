import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  public item$!: Observable<Order>;
  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {
    this.item$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('id'));
        return this.ordersService.getItemById(id);
      })
    );
    // this.route.paramMap.subscribe((params) => {
    //   const id = Number(params.get('id'));
    //   this.item$ = this.ordersService.getItemById(id);
    // });
  }

  ngOnInit(): void {}

  public edit(item: Order): void {
    this.ordersService.update(item).subscribe((res) => {
      this.router.navigate(['orders']);
    });
  }
}
