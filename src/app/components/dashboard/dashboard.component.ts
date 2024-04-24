import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Transaction } from '../../service/Transaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{

  incomeTransactions: Transaction[] = [];
  expenseTransactions: Transaction[] = [];
  totalBalance: number = 0;
  totalIncome: number = 0;
  totalExpense: number = 0;

  transactionForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private snackBar: MatSnackBar,
  ) { 
    this.transactionForm = this.formBuilder.group({
      transaction_type: [''],
      transaction_name: [''],
      amount: [''],
      date: ['']
    });
    this.fetchTransactions();
  }
 
  ngOnInit() { }
 
  onSubmit(): any {
    this.crudService.AddTransaction(this.transactionForm.value)
    .subscribe(() => {
        this.snackBar.open('Transaction was created!', 'Close', {
          duration: 3000
        });
        this.transactionForm.reset();
        this.fetchTransactions();
      }, (err) => {
        console.log(err);
    });
  }

  fetchTransactions(): void {
    this.crudService.GetTransactions().subscribe(
      (transactions: any) => {
        const typedTransactions = transactions as Transaction[];
        // Split transactions into income and expense arrays
        this.incomeTransactions = typedTransactions.filter(
          (transaction) => transaction.transaction_type === 'Income'
        );
        this.expenseTransactions = typedTransactions.filter(
          (transaction) => transaction.transaction_type === 'Expense'
        );
  
        // Calculate total income
        this.totalIncome = this.incomeTransactions.reduce(
          (total, transaction) => total + transaction.amount,
          0
        );
  
        // Calculate total expense
        this.totalExpense = this.expenseTransactions.reduce(
          (total, transaction) => total + transaction.amount,
          0
        );
  
        // Calculate total balance
        this.totalBalance = this.totalIncome - this.totalExpense;
      },
      (error) => {
        console.error('Error fetching transactions:', error);
      }
    );
  }
  
}
