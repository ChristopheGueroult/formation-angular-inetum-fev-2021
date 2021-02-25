import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  public myTitle = 'List Clients';
  public states = Object.values(StateClient);
  public collection$: Observable<Client[]>;
  public headers = ['Name', 'Total HT', 'Total TTC', 'State'];
  constructor(
    private clientsService: ClientsService,
    private cd: ChangeDetectorRef
  ) {
    this.collection$ = this.clientsService.collection;
    // this.ClientStateClientsService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
  }

  ngOnInit(): void {}

  public changeState(item: Client, e: any): void {
    const state = e.target.value;
    this.clientsService.changeState(item, state).subscribe((res) => {
      item.state = res.state;
      this.cd.detectChanges();
    });
  }
}
