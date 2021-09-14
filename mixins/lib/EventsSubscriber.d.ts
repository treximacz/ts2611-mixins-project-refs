declare type Constructor<T = {}> = new (...args: any[]) => T;
export declare function EventsSubscriber<T extends Constructor<{}>>(Base: T): {
    new (...args: any[]): {
        readonly eventsFilter: string[];
        handleEvent(event: string): void;
    };
} & T;
export {};
