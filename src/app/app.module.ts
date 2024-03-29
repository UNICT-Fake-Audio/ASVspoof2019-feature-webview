import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { github, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { GraphComponent } from './graph/graph.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { NavbarComponent } from './navbar/navbar.component';

const icons = { github };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GraphComponent,
    ExperimentsComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    NgxBootstrapIconsModule.pick(icons),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
