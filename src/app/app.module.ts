import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { RouterModule } from '@angular/router';
import { Xyz1Component } from './xyz1/xyz1.component';
import { DyloComponent } from './dylo/dylo.component';
import { Delo1Component } from './delo1/delo1.component';
import { Delo2Component } from './delo2/delo2.component';
import { Delo3Component } from './delo3/delo3.component';
import { Delo4Component } from './delo4/delo4.component';
const routes=[
  {path: "",component: XyzComponent},
  {path: "xyz1",component:  Xyz1Component},
  {path: "dolo",component:  DyloComponent},
  {path: "delo1",component:  Delo1Component},
]
@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    Xyz1Component,
    DyloComponent,
    Delo1Component,
    Delo2Component,
    Delo3Component,
    Delo4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
