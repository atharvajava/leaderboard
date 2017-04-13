import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/RX';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  fcc:Observable<any[]>;
  check:boolean=true;
  constructor(private _dataService:DataService) { }

  ngOnInit() {
    this.fcc=this._dataService.getFccTop100();
  
  }

  toggleAllTime(){
    this.check=false;
    this.fcc=this._dataService.getAllTime();
  }
  toggleToday(){
    this.check=true;
    this.fcc=this._dataService.getFccTop100();
  }

}
