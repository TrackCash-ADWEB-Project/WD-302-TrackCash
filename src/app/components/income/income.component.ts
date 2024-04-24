import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  incomeTransactions: any[] = [];
    searchDate: string = '';

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.fetchIncomeTransactions();
  }

  fetchIncomeTransactions(): void {
    (this.crudService.GetTransactions().subscribe(
      (transactions: Object) => {
        const transactionsArray = transactions as any[];
        this.incomeTransactions = transactionsArray.filter((transaction: any) => transaction.transaction_type === 'Income');
      },
      (error) => {
        console.error('Error fetching income transactions:', error);
      }
    ));
  }

  searchTransactions(): void {
    if (this.searchDate.trim() === '') {
      this.fetchIncomeTransactions(); // If the search field is empty, fetch all income transactions
      return;
    }
    // Filter transactions based on the specified date
    this.incomeTransactions = this.incomeTransactions.filter(transaction =>
      new Date(transaction.date).toISOString().split('T')[0] === this.searchDate);
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to delete this Transaction?')) {
      this.crudService.deleteTransaction(id).subscribe((res) => {
        this.incomeTransactions.splice(i, 1);
      })
    }
  }
}
