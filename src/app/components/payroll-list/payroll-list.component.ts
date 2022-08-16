import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { nomina } from 'src/app/interfaces/nomina';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-payroll-list',
  templateUrl: './payroll-list.component.html',
  styleUrls: ['./payroll-list.component.css']
})
export class PayrollListComponent implements OnInit {
  dataSource: any;
  Nominas : Observable<nomina[]>;

  displayedColumns: string[] = ['idTipoEmpleado', 'idTipoNomina', 'desde', 'hasta','descripcion','fechaPago'];
  
  constructor(private service: EmpleadosService) { 
    this.Nominas = this.service.getPayroll();
  }

  ngOnInit(): void {

    this.dataSource = this.Nominas;
  }

}
