import { Injectable } from "@angular/core";
import { HttpClient } from "selenium-webdriver/http";


@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient){}
  
}