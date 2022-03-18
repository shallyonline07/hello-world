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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './components/pipes/pipes.component';
import { AppendLastnamePipe } from './custom-pipes/append-lastname.pipe';
import { DirectivesExampleComponent } from './components/directives-example/directives-example.component';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { KeyMouseEventsDirective } from './custom-directives/key-mouse-events.directive';
import { ContainerTemplateComponent } from './components/container-template/container-template.component';
import { OneComponent } from './components/data-sharing/one/one.component';
import { TwoComponent } from './components/data-sharing/two/two.component';
import { ParentComponent } from './components/view-child/parent/parent.component';
import { ChildComponent } from './components/view-child/child/child.component';
import { Child1Component } from './components/view-child/child1/child1.component';
import { Parent1Component } from './components/view-child/parent1/parent1.component';
import { Parent2Component } from './components/ng-content-example/parent2/parent2.component';
import { Child2Component } from './components/ng-content-example/child2/child2.component';
import { GrandChild2Component } from './components/ng-content-example/grand-child2/grand-child2.component';
import { Parent3Component } from './components/life-cycle-hooks/parent3/parent3.component';
import { Child3Component } from './components/life-cycle-hooks/child3/child3.component';
import { AppRoutingModule } from './app-routing.module';
import { Comp1Component } from './components/routing-example/feature1/comp1/comp1.component';
import { Comp2Component } from './components/routing-example/feature2/comp2/comp2.component';
import { NotFoundComponent } from './components/routing-example/not-found/not-found.component';
import { ErrorComponent } from './components/routing-example/error/error.component';
import { ObservableTypesComponent } from './components/observable-types/observable-types.component';
import { CreateEmployeeComponent } from './components/forms/template-driven/create-employee/create-employee.component';
import { RegisterEmployeeComponent } from './components/forms/reactive/register-employee/register-employee.component';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';


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
    OneComponent,
    TwoComponent,
    ParentComponent,
    ChildComponent,
    Child1Component,
    Parent1Component,
    Parent2Component,
    Child2Component,
    GrandChild2Component,
    Parent3Component,
    Child3Component,
    Comp1Component,
    Comp2Component,
    NotFoundComponent,
    ErrorComponent,
    ObservableTypesComponent,
    CreateEmployeeComponent,
    RegisterEmployeeComponent,
    RxjsOperatorsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
