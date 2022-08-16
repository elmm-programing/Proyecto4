import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamentos } from '../interfaces/departamentos';
import { Empleado } from '../interfaces/empleado';
import { Horarios } from '../interfaces/horarios';
import { Rolles } from '../interfaces/rolles';
import { TiposEmpleados } from '../interfaces/tiposEmpleados';
import { Usuario } from '../interfaces/usuario';
import {tipoNomina} from'../interfaces/tipoNomina';
import { nomina } from '../interfaces/nomina';


@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  constructor(private http: HttpClient) {}
  /**
   * createEmployee
   */
  public createEmployee(emp: Empleado) {
    return this.http.post('http://45.35.64.173:9095/api/Empleados', emp);
  }
  
  /**
   * createPayroll
   */
  public createPayroll(nom: nomina) {
    return this.http.post('http://45.35.64.173:9095/api/Nominas', nom);
  }
  

  public updateEmployee(id: string, emp: Empleado) {
    return this.http.put(`http://45.35.64.173:9095/api/Empleados/${id}`, emp);
  }
  /**
   * getTipoEmpleados
   */
  public getTipoEmpleados(): Observable<TiposEmpleados[]> {
    return this.http.get<TiposEmpleados[]>(
      'http://45.35.64.173:9095/api/TipoEmpleados'
    );
  }
  /**
   * getTipoNomina
   */
  public getTipoNomina(): Observable<tipoNomina[]> {
    return this.http.get<tipoNomina[]>(
      'http://45.35.64.173:9095/api/TiposNominas'
    );
  }
  /**
   * getTipoDepartamentos
   */
  public getTipoDepartamentos(): Observable<Departamentos[]> {
    return this.http.get<Departamentos[]>(
      'http://45.35.64.173:9095/api/Departamentos'
    );
  }
  /**
   * getHorarios
   */
  public getHorarios(): Observable<Horarios[]> {
    return this.http.get<Horarios[]>('http://45.35.64.173:9095/api/Horarios');
  }
  /**
   * getRoles
   */
  public getRoles(): Observable<Rolles[]> {
    return this.http.get<Rolles[]>('http://45.35.64.173:9095/api/Rolles');
  }
  /**
   * deleteEmploy
   */
  public deleteEmploy(id: string) {
    return this.http.delete(`http://45.35.64.173:9095/api/Empleados/${id}`);
  }
  /**
   * getEmployees
   */
  public getPayroll(): Observable<nomina[]> {
    return this.http.get<nomina[]>('http://45.35.64.173:9095/api/Nominas');
  }

   /**
   * getEmployees
   */
    public getEmployees(): Observable<Empleado[]> {
      return this.http.get<Empleado[]>('http://45.35.64.173:9095/api/Empleados');
    }

  public getUsers(user: string, password: string): Observable<Usuario> {
    return this.http.get<Usuario>(
      `http://45.35.64.173:9095/api/Usuarios/${user},${password}`
    );
  }
}
