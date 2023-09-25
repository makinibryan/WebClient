import { Component } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';
import { GenericServiceService } from 'src/app/services/generic-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  employees: Employee[] = [];

  constructor(private genericService: GenericServiceService) {
    console.log('log')
  }

  getEmployees()
  {
    this.genericService
    .get('Employees')
    .subscribe({
      next: (response) =>{
        this.employees= response;
        console.log(this.employees);
        console.log('hello');
      }, error: (error) => {
        console.error('HTTP error' + error);

      }
    })


  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getEmployees();
  }
}
