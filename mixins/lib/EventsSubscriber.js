export function EventsSubscriber(Base) {
    return class extends Base {
        constructor(...args) {
            super(...args);
        }
        get eventsFilter() {
            return [];
        }
        handleEvent(event) {
            if (this.eventsFilter.includes(event)) {
                console.log(`Event ${event} was handled.`);
            }
        }
    };
}
