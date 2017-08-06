import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextareaComponent, TimeStampComponent, UserComponent } from './components/';

import { AuthService } from './services/';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TextareaComponent,
    TimeStampComponent,
    UserComponent
  ],
  exports: [
    TextareaComponent,
    TimeStampComponent,
    UserComponent
  ],
  providers: [
    AuthService
  ]
})
export class SharedModule { }
