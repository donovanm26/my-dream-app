import { Component, OnInit } from '@angular/core';
//import { setTimeout } from 'timers';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  userName = '';
  serverCreationStatus = "No server was created!";
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver','Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created by user " + this.userName + " ! Servername Name is " + this.serverName;
    this.userName = "";
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onKeyEnter() {
    this.allowNewServer = (this.userName.length > 0);
  }
}
