import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Wastebin {
  readonly id: string;
  readonly name?: string;
  readonly capacity?: number;
  readonly fillPercentage?: number;
  constructor(init: ModelInit<Wastebin>);
  static copyOf(source: Wastebin, mutator: (draft: MutableModel<Wastebin>) => MutableModel<Wastebin> | void): Wastebin;
}

export declare class Note {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly image?: string;
  constructor(init: ModelInit<Note>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}