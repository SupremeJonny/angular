import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DocumentConfig {

    public documents: Document[];

    constructor(private readonly http: HttpClient) { }

    public init(): Promise<Boolean> {
        return this.reloadDocuments();
    }

    public reloadDocuments(): Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            this.http.get<Document[]>('assets/document/document.json')
                .subscribe((responseData) => {
                    this.documents = responseData;
                    resolve(true);
                });
        });
    }
}

export interface Document {
    title: string;
    content: string;
    id?: string; // TBC
    children: Document[];
}



