import { BehaviorSubject } from 'rxjs';

// @Injectable({ providedIn: 'root' })
export class CountService {
    private count = 0;
    private countChangedSubject = new BehaviorSubject<number>(0); // event - count value changed.

    public get countChanged() {
        return this.countChangedSubject.asObservable(); //downgrade... only subscribe from other services or components.
    }

    plus() {
        this.count++;
        //same as emit:
        this.countChangedSubject.next(this.count);
    }
    minus() {
        this.count--;
        //same as emit:
        this.countChangedSubject.next(this.count);

    }



}