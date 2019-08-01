import { Component, OnInit, AfterViewChecked, OnChanges } from '@angular/core';
import { Document } from '../../document.config';
import * as _ from 'lodash';
import { DocumentConfig } from '../../document.config';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit, AfterViewChecked, OnChanges {

  documentTree: Document[];

  documentList: Document[] = [];

  elementList: Document[] = [];

  breadCrumbsMap: Map<string, Document[]>;

  currentContent: string;

  currentDocument: Document;

  currentBreadCrumbs: Document[];

  cursor = 0;

  lastSelected: any;

  constructor(private documentConfig: DocumentConfig) { }

  ngOnChanges() { }

  ngOnInit() {
    this.documentConfig.reloadDocuments();
    this.documentTree = this.documentConfig.documents;
    this.breadCrumbsMap = new Map();
    this.treeToList(this.documentTree);
    this.buildBreadCrumbsMap(this.documentTree);
    this.showContent(this.documentTree[0]);
  }

  ngAfterViewChecked(): void { }

  public showContent(document: Document) {
    this.currentDocument = document;
    this.currentContent = document.content;
    for (let index = 0; index < this.documentList.length; index++) {
      const element = this.documentList[index];
      if (element.id === document.id) {
        this.cursor = index;
      }
    }
    this.showBreadCrumbs(document);
  }

  public showBreadCrumbs(document: Document) {
    this.currentBreadCrumbs = this.breadCrumbsMap.get(document.id);
  }


  public nextContent(cursor: number) {
    if (cursor < this.documentList.length - 1) {
      this.cursor = cursor + 1;
    }
    this.cursor = this.cursor % this.documentList.length;
    this.showContent(this.documentList[this.cursor]);
  }

  public previousContent(cursor: number) {
    if (cursor > 0) {
      this.cursor = cursor - 1;
    }
    this.cursor = this.cursor % this.documentList.length;
    this.showContent(this.documentList[this.cursor]);
  }

  public expand(event: any) {
    const toggler = event.target;
    this.selectItem(toggler);
    if (toggler.parentElement.querySelector('.nested')) {
      toggler.parentElement.querySelector('.nested').classList.toggle('active');
      toggler.classList.toggle('caret-down');
    }
  }

  public selectItem(toggler: any) {
    if (this.lastSelected) {
      this.lastSelected.classList.remove('selected');
    }
    this.lastSelected = toggler;
    toggler.classList.toggle('selected');
  }

  public treeToList(documentTree: Document[]) {
    for (let index = 0; index < documentTree.length; index++) {
      const document: Document = documentTree[index];
      this.documentList.push({ title: document.title, content: document.content, children: [], id: document.id });
      if (document.children !== []) {
        this.treeToList(document.children);
      }
    }
  }

  public buildBreadCrumbsMap(documentTree: Document[]) {
    for (let index = 0; index < documentTree.length; index++) {
      const element = documentTree[index];
      if (element.children.length > 0) {
        this.elementList = _.concat(this.elementList, element);
        this.breadCrumbsMap.set(element.id, this.elementList);
        this.buildBreadCrumbsMap(element.children);
        this.elementList = _.dropRight(this.elementList);
      } else {
        this.elementList = _.concat(this.elementList, element);
        this.breadCrumbsMap.set(element.id, this.elementList);
        this.elementList = _.dropRight(this.elementList);
      }
    }
  }
}

