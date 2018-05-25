import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankService } from './service/bank.service';
import { HttpClientModule } from '@angular/common/http';
import { Api } from './api';
import { AccountsListComponent } from './component/accounts-list/accounts-list.component';
import { FormsModule } from '@angular/forms';
import { DispositionComponent } from './component/disposition/disposition.component';
import { routerModule } from './bank.routing';
import { SecurityModule } from '../security/security.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    routerModule,
    SecurityModule
  ],
  declarations: [
    AccountsListComponent,
    DispositionComponent
  ],
  providers: [
    BankService,
    Api
  ]
})
export class BankModule { }