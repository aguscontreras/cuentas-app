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
  }
}
