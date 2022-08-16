import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { nomina } from 'src/app/interfaces/nomina';
import { tipoNomina } from 'src/app/interfaces/tipoNomina';
import { TiposEmpleados } from 'src/app/interfaces/tiposEmpleados';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { DataSource } from '@angular/cdk/table';
import { Router } from '@angular/router';



@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})


export class PayrollComponent implements OnInit {


  NominaFormGroup: FormGroup = new FormGroup({
    TipoNominaControl: new FormControl(null, Validators.required),
    TipoEmpleadoControl: new FormControl(null, Validators.required),
    desdeControl: new FormControl(null, Validators.required),
    hastaControl: new FormControl(null, Validators.required),
    pagoControl: new FormControl(null, Validators.required),
    descripcionControl: new FormControl(null, Validators.required)
  })



  TipoEmpleadoControl = new FormControl(null, Validators.required);
  TipoNominaControl = new FormControl(null, Validators.required);
  desdeControl = new FormControl(null, Validators.required);
  hastaControl = new FormControl(null, Validators.required);
  pagoControl = new FormControl(null, Validators.required);
  descripcionControl = new FormControl(null, Validators.required);

  TiposDeEmpleados: Observable<TiposEmpleados[]>;
  TipoNomina: Observable<tipoNomina[]>;
  
  constructor( private service: EmpleadosService,
    public dialog: MatDialog,
    private route: Router

    ) { 

    this.TiposDeEmpleados = service.getTipoEmpleados();
    this.TipoNomina = service.getTipoNomina();
    
  }
 
  ngOnInit(): void {
  console.log(this.NominaFormGroup)
  }


  CreatePayRoll(form: FormGroup){
      if(form.valid){
        let nomina: nomina = {
          idTipoNomina: form.value.TipoNominaControl,
          idTipoEmpleado: form.value.TipoEmpleadoControl,
          desde:form.value.desdeControl,
          hasta:form.value.hastaControl,
          descripcion:form.value.descripcionControl,
          fechaPago:form.value.pagoControl 
        }

        console.log(nomina)

        this.service.createPayroll(nomina).forEach((val) => {
          //console.log(val);
          this.openDialog();
        });

      } else {

        alert("Formulario Incompleto o incorrecto, verifique");
      }
     
  }

  payrollListNav(){
    this.route.navigate(['/payrollList']);
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
    
  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.html',
  styleUrls: ['./payroll.component.css']
})

export class DialogElementsExampleDialog {


}



