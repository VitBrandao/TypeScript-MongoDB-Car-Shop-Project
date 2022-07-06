export interface Model<T> {
  create(entity: T): Promise<T>;
  read(): Promise<T[]>;
  readOne(id: string): Promise<T | null>;
  update(id: string, entity: T): Promise<T | null>;
  delete(id: string): Promise<T | null>;
}