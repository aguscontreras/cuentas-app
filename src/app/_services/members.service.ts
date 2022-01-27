import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Member } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private membersSource: BehaviorSubject<Member[]>;
  public members$: Observable<Member[]>;

  constructor() {
    this.membersSource = new BehaviorSubject<Member[]>([]);
    this.members$ = this.membersSource.asObservable();

    const member_1 = new Member('Agustin', 100);
    const member_2 = new Member('Mica', 200);
    const member_3 = new Member('Manu', 320);
    const member_4 = new Member('Nico', 470);
    const member_5 = new Member('Mati', 70);
    const member_6 = new Member('Cin', 88);

    this.membersSource.next([
      member_1,
      member_2,
      member_3,
      member_4,
      member_5,
      member_6,
    ]);
  }
}
