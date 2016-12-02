import { NgModule } from '@angular/core'
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// App views

// App modules/components
import { AppComponent } from "./app.component";
import { MainViewModule } from "./views/main-view/main-view.module";
import { MinorViewModule } from "./views/minor-view/minor-view.module";
import { NavigationModule } from "./views/common/navigation/navigation.module";
import { FooterModule } from "./views/common/footer/footer.module";
import { TopnavbarModule } from "./views/common/topnavbar/topnavbar.module";
import { AppRoutingModule } from "./app-routing.module";
@NgModule({
  declarations: [AppComponent],
  imports: [

    // Angular modules
    BrowserModule,
    HttpModule,

    // Views
    MainViewModule,
    MinorViewModule,

    // Modules
    NavigationModule,
    FooterModule,
    TopnavbarModule,

    AppRoutingModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})

export class AppModule {
}
