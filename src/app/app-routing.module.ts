import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IncomeComponent } from './components/income/income.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { EditTransactionComponent } from './components/edit-transaction/edit-transaction.component';
import { EditIncomeComponent } from './components/edit-income/edit-income.component';
import { EditExpenseComponent } from './components/edit-expense/edit-expense.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'income', component: IncomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'expenses', component: ExpensesComponent},
  {path: 'edit-transaction/:id', component: EditTransactionComponent},
  {path: 'edit-income/:id', component: EditIncomeComponent},
  {path: 'edit-expense/:id', component: EditExpenseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
