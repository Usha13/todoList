import { Time } from "@angular/common";

export class ToDo{
  public tname : string;
  public tdes : string;
  public tdate : any;
  public totime: any;
  public fromtime : any;

  constructor(tname : string , tdes : string, tdate : Date, totime: any, fromtime : any){
    this.tname = tname;
    this.tdes = tdes;
    this.tdate = tdate;
    this.totime = totime;
    this.fromtime = fromtime;
  }
}
