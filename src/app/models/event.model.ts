export class Event {
  public pastShow: boolean = false;
  constructor(public date: number, public headliner: string, public opener: string, public showTime: string, public tixPrice: number) {

  }
}
