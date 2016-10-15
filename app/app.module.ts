import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user/user-profile.component';
import { UserFormComponent } from './user/user-form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
      AppComponent,
      UserProfileComponent,
      UserFormComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}