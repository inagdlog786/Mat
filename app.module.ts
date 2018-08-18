import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpModule, Http , Response, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { AgGridModule } from 'ag-grid-angular';
// import 'ag-grid-enterprise';
import { DepreciationComponent } from './depreciation/depreciation.component';
import { TestComponent } from './depreciation/test/test.component';
import { AggridComponent } from './depreciation/aggrid/aggrid.component';

const appRoutes: Routes = [
  { path: '', component: DepreciationComponent},
  { path: 'test', component: TestComponent},
  { path: 'demo', component: AggridComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DepreciationComponent,
    TestComponent,
    AggridComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    MaterialModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
