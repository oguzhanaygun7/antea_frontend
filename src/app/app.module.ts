import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslatePipe} from './pipes/translate/translate.pipe';
import {TranslateService, TRANSLATION_PROVIDERS} from './services/translate';
import { DenemeComponent } from './components/deneme/deneme.component';
import {AuthService} from './services/auth/auth.service';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesDhiHairTransplantComponent } from './components/services/services-dhi-hair-transplant/services-dhi-hair-transplant.component';
import { ServicesLayoutComponent } from './shared/layouts/services-layout/services-layout.component';
import { ServicesSapphireFueComponent } from './components/services/services-sapphire-fue/services-sapphire-fue.component';
import { ServicesEyebrowTransplantComponent } from './components/services/services-eyebrow-transplant/services-eyebrow-transplant.component';
import { ServicesBeardMustacheTransplantComponent } from './components/services/services-beard-mustache-transplant/services-beard-mustache-transplant.component';
import { ServicesLaserHairComponent } from './components/services/services-laser-hair/services-laser-hair.component';
import { ServicesPrpComponent } from './components/services/services-prp/services-prp.component';
import { ServicesMesotherapyComponent } from './components/services/services-mesotherapy/services-mesotherapy.component';
import { ServicesWomenHairPlantComponent } from './components/services/services-women-hair-plant/services-women-hair-plant.component';
import { ServicesUnshavenHairTransplantComponent } from './components/services/services-unshaven-hair-transplant/services-unshaven-hair-transplant.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    DenemeComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MainLayoutComponent,
    AboutComponent,
    ServicesComponent,
    FaqComponent,
    ContactComponent,
    ServicesDhiHairTransplantComponent,
    ServicesLayoutComponent,
    ServicesSapphireFueComponent,
    ServicesEyebrowTransplantComponent,
    ServicesBeardMustacheTransplantComponent,
    ServicesLaserHairComponent,
    ServicesPrpComponent,
    ServicesMesotherapyComponent,
    ServicesWomenHairPlantComponent,
    ServicesUnshavenHairTransplantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, TranslatePipe, TranslateService,TRANSLATION_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
