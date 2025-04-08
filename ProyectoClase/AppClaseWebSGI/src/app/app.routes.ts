import { Routes } from '@angular/router';
import { PageLoginComponent } from './core/components/page-login/page-login.component';
import { ListAgentComponent } from './agents/components/list-agent/list-agent.component';
import { ListClientComponent } from './clients/components/list-client/list-client.component';
import { ListContactComponent } from './contacts/components/list-contact/list-contact.component';
import { ListFavoriteComponent } from './favorites/components/list-favorite/list-favorite.component';
import { ListPropertyComponent } from './properties/components/list-property/list-property.component';
import { ListTransactionComponent } from './transactions/components/list-transaction/list-transaction.component';

export const routes: Routes = [
  {
    path: '',
    component: PageLoginComponent,
  },
  {
    path: 'agents',
    component: ListAgentComponent,
  },
  {
    path: 'clients',
    component: ListClientComponent,
  },
  {
    path: 'contacts',
    component: ListContactComponent,
  },
  {
    path: 'favorites',
    component: ListFavoriteComponent,
  },
  {
    path: 'properties',
    component: ListPropertyComponent,
  },
  {
    path: 'transactions',
    component: ListTransactionComponent,
  },
];
