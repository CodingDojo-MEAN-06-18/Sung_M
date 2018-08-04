import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { GitService } from './git.service';

import { AppComponent } from './app.component';
import { GitscoreComponent } from './gitscore/gitscore.component';

@NgModule({
  declarations: [AppComponent, GitscoreComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, HttpModule],
  providers: [GitService],
  bootstrap: [AppComponent],
})
export class AppModule {}
