import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
f={a:true, b:true, c:true, d:true, e:true, f:true, g:true, h:true }
  constructor(public snackBar: MatSnackBar) {
    
   }
   
   openSnackBar(hpos, vpos) {
    this.snackBar.open('This is a snackbar','' ,{
      duration: 1500,
      horizontalPosition: hpos,
      verticalPosition: vpos
    });
  }
  closenoti(x){
    this.f[x]=false
  }
  ngOnInit() {
  }

}
