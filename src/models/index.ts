import { Model as MM, isValidObjectId } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: MM<T>) { }

  async create(body: T): Promise<T> {
    return this.model.create(body);
  }

  async read(): Promise<T[]> {
    return this.model.find();
  }

  async readOne(id: string): Promise<T | null> {
    return this.model.findOne({ _id: id });
  }

  async update(id: string, body: T): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this.model.findOneAndUpdate(
      { _id: id },
      body,
      { returnOriginal: false },
    );
  }

  async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this.model.findOneAndDelete({ _id: id });
  }
}

export default MongoModel;