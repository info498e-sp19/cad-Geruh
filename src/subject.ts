import { Observer } from "./observer";

export interface Subject {
  notifyAll(): void;
  registerObserver(obs: Observer): void;
  unRegisterObserver(obs: Observer): void;
}
