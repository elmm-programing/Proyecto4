import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../interfaces/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  constructor(private http: HttpClient) {}
  /**
   * createEmployee
   */
  public createEmployee(emp: Empleado) {
    return this.http.post('', emp);
  }
  /**
   * getEmployees
   */
  public getEmployees(): Observable<Empleado> {
    return this.http.get<Empleado>('');
  }
}
