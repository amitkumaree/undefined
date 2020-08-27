import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public server = 'http://localhost:64163/'; // DEV
    // public server = 'http://api.uppublicschool.edu.in/';
    // public server = 'http://bank.worldlegaldocs.com/';
    public apiUrl = 'api/';
    public serverWithApiUrl = this.server + this.apiUrl;
}
