import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent implements OnInit {
  expenseTransactions: any[] = [];
  searchDate: string = '';

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.fetchExpenseTransactions();
  }

  fetchExpenseTransactions(): void {
    (this.crudService.GetTransactions().subscribe(
      (transactions: Object) => {
        const transactionsArray = transactions as any[];
        this.expenseTransactions = transactionsArray.filter((transaction: any) => transaction.transaction_type === 'Expense');
      },
      (error) => {
        console.error('Error fetching expense transactions:', error);
      }
    ));
  }

  searchTransactions(): void {
    if (this.searchDate.trim() === '') {
      this.fetchExpenseTransactions(); // If the search field is empty, fetch all income transactions
      return;
    }
    // Filter transactions based on the specified date
    this.expenseTransactions = this.expenseTransactions.filter(transaction =>
      new Date(transaction.date).toISOString().split('T')[0] === this.searchDate);
  }


  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to delete this Transaction?')) {
      this.crudService.deleteTransaction(id).subscribe((res) => {
        this.expenseTransactions.splice(i, 1);
      })
    }
  }
}
