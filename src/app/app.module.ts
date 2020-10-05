import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { SpeechSynthesisModule} from '@kamiazya/ngx-speech-synthesis';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,  SpeechSynthesisModule.forRoot({
      lang: 'en',
      volume: 1.0,
      pitch: 1.0,
      rate: 1.0,
    }), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
