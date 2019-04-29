import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'slabs-frontend';

  constructor() {
  }

  get twitchLink() {
    return 'https://id.twitch.tv/oauth2/authorize?' +
      'response_type=token+id_token' +
      '&' +
      'client_id=jwlk0gk3rf4zy6fmhj8vps89b645kz' +
      '&' +
      'redirect_uri=http://localhost:4200/auth/twitch' +
      '&' +
      'scope=viewing_activity_read+openid';
  }

  ngOnInit(): void {
  }
}
