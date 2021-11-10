import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { MainComponent } from './components/main/main.component';
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

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {
        path: '', component: MainComponent
      },
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'services', component: ServicesLayoutComponent, children: [
          {
            path: '', component: ServicesComponent
          },
          {
            path: 'dhi-hair-transplant', component: ServicesDhiHairTransplantComponent
          },
          {
            path: 'sapphire-fue', component: ServicesSapphireFueComponent
          },
          {
            path: 'eyebrow-transplant', component: ServicesEyebrowTransplantComponent
          },
          {
            path: 'beard-mustache-transplant', component: ServicesBeardMustacheTransplantComponent
          },
          {
            path: 'laser-hair', component: ServicesLaserHairComponent
          },
          {
            path: 'prp', component: ServicesPrpComponent
          },
          {
            path: 'mesotherapy', component: ServicesMesotherapyComponent
          },
          {
            path: 'women-hair-plant', component: ServicesWomenHairPlantComponent
          },
          {
            path: 'unshaven-hair-plant', component: ServicesUnshavenHairTransplantComponent
          },

        ]
      },
      {
        path: 'faq', component: FaqComponent
      },
      {
        path: 'contact', component: ContactComponent
      },

    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
        //useHash: true, // change useHash to true
    })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
