import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-start',
  templateUrl: './nav-start.component.html',
  styleUrls: ['./nav-start.component.css']
})
export class NavStartComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
