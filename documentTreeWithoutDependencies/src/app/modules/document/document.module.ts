import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './components/core/core.component';
import { DocumentRoutingModule } from './document-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    DocumentRoutingModule,
    MarkdownModule.forChild(),
  ],
  entryComponents: [],
  declarations: [
    LayoutComponent,
    CoreComponent
  ],
})
export class DocumentModule { }
