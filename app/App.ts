import { EventsSubscriber } from '../mixins/src/EventsSubscriber'

class MyStoreBase {
}

class MyStoreWithEvents extends EventsSubscriber(MyStoreBase) {
  get eventsFilter(): string[] {
      return ['event1', 'event2']
  }
}
