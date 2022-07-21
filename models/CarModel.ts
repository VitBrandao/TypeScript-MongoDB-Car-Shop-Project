import { Schema, model as createModel } from 'mongoose';
import MongoModel from '.';
import { Car } from '../interfaces/CarInterface';

const CarSchema = new Schema<Car>({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  status: { type: Boolean, required: false },
  buyValue: { type: Number, required: true },
  doorsQty: { type: Number, required: true },
  seatsQty: { type: Number, required: true },
}, { versionKey: false });

class CarModel extends MongoModel<Car> {
  constructor(private carModel = createModel<Car>('Car', CarSchema)) {
    super(carModel);
  }
}

export default CarModel;