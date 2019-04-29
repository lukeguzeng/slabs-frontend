import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../customer.mode';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-twitch',
  templateUrl: 'twitch-auth.component.html',
  styleUrls: ['twitch-auth.component.css']
})
export class TwitchAuthComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.route
      .fragment
      .subscribe((fragment: string) => {
        const twitchIdTokenKVPair = fragment.split('&')[1];
        const twitchIdToken = twitchIdTokenKVPair.split('=')[1];
        console.log('My hash fragment is here => ', twitchIdToken);
        this.authService
          .loginTwitchIdToken(twitchIdToken)
          .subscribe((customer: Customer) => {
            this.authService.currentCustomer = customer;
            console.log(customer);
            this.router.navigateByUrl('/');
          });
      });
  }
}
