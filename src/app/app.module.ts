import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { SplitButtonModule, MenubarModule, PanelModule, ChartModule, InputTextModule, ButtonModule, InputMaskModule, InputTextareaModule, EditorModule, CalendarModule, RadioButtonModule, FieldsetModule, DropdownModule, MultiSelectModule, ListboxModule, SpinnerModule, SliderModule, RatingModule, DataTableModule, ContextMenuModule, TabViewModule, DialogModule, StepsModule, ScheduleModule, TreeModule, GMapModule, DataGridModule, TooltipModule, ConfirmationService, ConfirmDialogModule, GrowlModule, DragDropModule, GalleriaModule } from 'primeng/primeng';

// used to create fake backend
import { FakeBackendProvider } from './fake-backend/fake-backend.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { PageNotFoundComponent } from './page/not-found/page-not-found.component'
import { HomeComponent } from './page/home/page-home.component'

import { LoginStatusService } from './user-membership/login-status.service'
import { UserLoginComponent } from './user-membership/user-login/user-login.component'
import { AuthenticationService } from './user-membership/user-login/authentication.service'
import { UserRegisterationComponent } from './user-membership/user-registeration/user-registeration.component'
import { UserRegisterationService } from './user-membership/user-registeration/user-registeration.service';
import { ArticlesListComponent } from './articles-list/articles-list.component'
import { ArticlesService } from './articles-list/articles.service'
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginStatusViewComponent } from './user-membership/login-status-view.component'
import { CreateArticleComponent } from './article/create/create-article.component'

import { AuthGuard } from './guards/auth.guard'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: UserRegisterationComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'dashboard/:id', component: DashboardComponent, canActivate: [AuthGuard]  },
  { path: 'article/create', component: CreateArticleComponent, canActivate: [AuthGuard]  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    UserRegisterationComponent,
    UserLoginComponent,
    DashboardComponent,
    ArticlesListComponent,
    LoginStatusViewComponent,
    CreateArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MenubarModule,
    PanelModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule,
    DataTableModule,
    ContextMenuModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    ScheduleModule,
    TreeModule,
    GMapModule,
    DataGridModule,
    TooltipModule,
    ConfirmDialogModule,
    GrowlModule,
    DragDropModule,
    GalleriaModule,
    SplitButtonModule
  ],
  providers: [ 
    ConfirmationService, 
    UserRegisterationService, 
    LoginStatusService,
    AuthenticationService, 
    AuthGuard, 
    ArticlesService, 
    // providers used to create fake backend
    FakeBackendProvider,
    MockBackend,
    BaseRequestOptions
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
