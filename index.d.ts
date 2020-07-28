import { Computed, Observable, ObservableArray } from "knockout";

declare global {
	type KnockoutComputed<T> = Computed<T>;
	type KnockoutObservable<T> = Observable<T>;
	type KnockoutObservableArray<T> = ObservableArray<T>;
}
