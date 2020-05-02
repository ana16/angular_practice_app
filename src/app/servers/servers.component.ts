import { Component, OnInit } from '@angular/core';


@Component({
  /*three ways to select in angular: by element, by atrribute, by class BELOW*/

  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  
  allowNewUser: boolean = false;
  serverCreationStatus: string ='No server was created';
  serverName = 'testServer';
  serverCreated = false;
  username: string =  '';
  serverStatus : string = 'offline';
  servers = ['Testserver', 'Testserver2']
  content: string = 'Secret password = tuna';
  showContent: boolean = false;
  log = [];


  constructor() {
    // setTimeout(
    //   () => {
    //     this.allowNewUser = true;
    //   },2000);

    this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onToggleDetails(){
    this.showContent= !this.showContent;
    // this.log.push(this.log.length + 1);
    this.log.push( new Date());
  }


}
