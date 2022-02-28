import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentComponent } from './components/content/content.component';
import { JsonServerExampleComponent } from './components/json-server-example/json-server-example.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/input-output/post/post.component';
import { LikeComponent } from './components/input-output/like/like.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './components/pipes/pipes.component';
import { AppendLastnamePipe } from './custom-pipes/append-lastname.pipe';
import { DirectivesExampleComponent } from './components/directives-example/directives-example.component';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { KeyMouseEventsDirective } from './custom-directives/key-mouse-events.directive';
import { ContainerTemplateComponent } from './components/container-template/container-template.component';
import { FirstComponent } from './components/view-child/first/first.component';
import { SecondComponent } from './components/view-child/second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    JsonServerExampleComponent,
    PostComponent,
    LikeComponent,
    DataBindingComponent,
    PipesComponent,
    AppendLastnamePipe,
    DirectivesExampleComponent,
    HighlightDirective,
    KeyMouseEventsDirective,
    ContainerTemplateComponent,
    FirstComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
