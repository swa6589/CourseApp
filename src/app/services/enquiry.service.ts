import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/RX';

@Injectable()
export class EnquiryService {
  httpOptions;

  constructor(private http:HttpClient) {
    this.httpOptions = {
      hedaers: new HttpHeaders({
        'content-type': 'application/json'

      })
    }
   }

   sendEnquiry(obj):Observable<Object>{
     return this.http.post("http://139.59.9.236:8898/rest-api/enquiries", obj, this.httpOptions)
   }

}
 