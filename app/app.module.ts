import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user/user-profile.component';
import { UserFormComponent } from './user/user-form.component';
import { RouterModule }   from '@angular/router';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
          { path: 'fpaas', component: AppComponent }
        ])
    ],
    declarations: [
      AppComponent,
      UserProfileComponent,
      UserFormComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
