export class Show {
  public pastShow: boolean = false;
  constructor(public gif: string, public date: string, public headliner: string, public opener: string, public showTime: string, public tixPrice: number) {
  }
}
