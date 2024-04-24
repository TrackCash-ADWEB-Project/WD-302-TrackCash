import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrl: './edit-expense.component.css'
})
export class EditExpenseComponent implements OnInit {
 
  getId: any;
  updateForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
 
    this.crudService.GetTransaction(this.getId).subscribe(res => {
      this.updateForm.setValue({
        transaction_type: res['transaction_type'],
        transaction_name: res['transaction_name'],
        amount: res['amount'],
        date:res['date']
      });
    });
 
    this.updateForm = this.formBuilder.group({
      transaction_type: [''],
      transaction_name: [''],
      amount: [''],
      date: ['']
    })
  }
 
  ngOnInit() { }
 
  onUpdate(): any {
    this.crudService.updateTransaction(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Transaction updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/expenses'))
      }, (err) => {
        console.log(err);
    });
  }
 
}