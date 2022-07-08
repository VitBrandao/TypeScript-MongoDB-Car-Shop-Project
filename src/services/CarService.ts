import Service, { ServiceError } from '.';
import { Car, CarSchema } from '../interfaces/CarInterface';
import CarModel from '../models/CarModel';

class CarService extends Service<Car> {
  constructor(carModel = new CarModel()) {
    super(carModel);
  }

  create = async (body: Car): Promise<Car | ServiceError | null> => {
    const parsed = CarSchema.safeParse(body);
    
    if (!parsed.success) return { error: parsed.error };

    return this.model.create(body);
  };
}

export default CarService;
