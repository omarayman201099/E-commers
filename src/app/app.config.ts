import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration} from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { spinnerInterceptor } from './shared/interceptor/spinner.interceptor';








export const appConfig: ApplicationConfig = {
  providers: [ provideAnimations(),
    provideToastr(), provideRouter(routes , withViewTransitions()),provideClientHydration()
    ,provideHttpClient(withFetch(),withInterceptors([spinnerInterceptor])),importProvidersFrom(RouterModule,BrowserAnimationsModule,ToastrModule,NgxSpinnerModule)
  ]
};
