import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ChartModule } from 'angular2-chartjs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TablelistComponent } from './tablelist/tablelist.component';
import { TypoComponent } from './typo/typo.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationComponent } from './notification/notification.component';
import { AgmCoreModule } from '@agm/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,    
    UserprofileComponent, TablelistComponent, TypoComponent, IconsComponent, MapsComponent, NotificationComponent,
    
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAP_API_KEY'
    }),    
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule,
    ChartModule,
    MatInputModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatMenuModule,
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,    
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    RouterModule.forRoot([
      { 
        path:'',
        component:DashboardComponent
      }, 
      {
        path:'user',
        component: UserprofileComponent
      }, 
      {
        path:'table',
        component: TablelistComponent
      }, 
      {
        path:'typo',
        component: TypoComponent
      }, 
      {
        path:'icons',
        component: IconsComponent
      }, 
      {
        path:'maps',
        component: MapsComponent
      }, 
      {
        path:'notify',
        component: NotificationComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
