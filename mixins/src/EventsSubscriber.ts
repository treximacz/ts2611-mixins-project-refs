type Constructor<T = {}> = new (...args: any[]) => T;

export function EventsSubscriber<T extends Constructor<{}>>(Base: T) {
  return class extends Base {
    constructor(...args: any[]) {
      super(...args);
    }

    get eventsFilter(): string[] {
      return [];
    }

    handleEvent(event: string) {
      if (this.eventsFilter.includes(event)) {
        console.log(`Event ${event} was handled.`);
      }
    }
  };
}
