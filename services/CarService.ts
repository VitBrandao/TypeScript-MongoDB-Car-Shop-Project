import Service, { ServiceError } from '.';
import { Car, CarSchema } from '../interfaces/CarInterface';
import CarModel from '../models/CarModel';

// ES Lint: Define a constant instead of duplicating this literal 3 times
const objectNotFound = 'Object not found';

class CarService extends Service<Car> {
  constructor(carModel = new CarModel()) {
    super(carModel);
  }

  create = async (body: Car): Promise<Car | ServiceError | null> => {
    const parsed = CarSchema.safeParse(body);

    if (!parsed.success) return { error: parsed.error };

    return this.model.create(body);
  };

  readOne = async (id: string): Promise<Car | null> => {
    if (id.length < 24) return null;
    const carById = await this.model.readOne(id);
    if (!carById) throw new Error(objectNotFound);
    return carById;
  };

  update = async (id: string, body: Car):
  Promise<Car | ServiceError | null> => {
    const checkSafeParse = CarSchema.safeParse(body);
    if (!checkSafeParse.success) {
      return { error: checkSafeParse.error };
    }

    if (id.length < 24) return null;

    const car = await this.model.update(id, body);
    if (!car) {
      throw new Error(objectNotFound);
    }

    return car;
  };

  delete = async (id: string): Promise<Car | null> => {
    if (id.length < 24) return null;
    
    const deleteCar = await this.model.delete(id);
    if (!deleteCar) {
      throw new Error(objectNotFound);
    }

    return deleteCar;
  };
}

export default CarService;
