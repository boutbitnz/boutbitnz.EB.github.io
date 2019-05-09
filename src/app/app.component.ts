import { Component, OnInit } from '@angular/core';
import { LoginService } from './Services/login.service';

const wrapper =
`
  <div class="wrapper" style="height: 100vh;">
    <div class="container-fluid">
      <div class="row">

      <mnav></mnav>
      <h2 id="customerDetail"><small (click)="getCustomerDetails()">Get customer details</small></h2>
      <app-footer></app-footer>

      </div>
    </div>
    <router-outlet></router-outlet>
  </div>
  `;

const wrapperStyles = `
    h2#customerDetail { margin-top: 55em;}
    `;
@Component({

  // tslint:disable-next-line:component-selector
  selector: 'boutbitnz',
  // templateUrl: './app.component.html',
  // templateUrl: './app.component.html',
  template:
  wrapper,
  styles: [
    wrapperStyles
  ]

})
export class AppComponent implements OnInit {

  title = 'Boutbitnz Inc';

  // Angular-Interceptor | https://github.com/vigneshsithirai/Angular-Interceptor/blob/master/src/app/app.component.ts
  constructor(public loginService: LoginService) {
    this.loginService.login({}).subscribe(data => {
      console.log(data);
    });
  }

  getCustomerDetails() {
    this.loginService.getCustomerDetails().subscribe((data) => {
      console.log('----->>>', data);
    });
  }

  // constructor(private router: Router, ) {
  //   this.router.events.subscribe((event: Event) => {
  //       if (event instanceof NavigationStart) {
  //           console.log('Navigation start');
  //       }
  //       if (event instanceof NavigationEnd) {
  //           console.log('Navigation end');
  //       }
  //       if (event instanceof NavigationError) {

  //           console.log(event.error);
  //       }
  //   });
  // }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

// angular-multi-view
// <div class="container-fluid">
//   <header></header>

//    <main id="main-content">
//      <div class="container main-content">
//        <router-outlet></router-outlet>
//      </div>
//    </main>
// </div>
