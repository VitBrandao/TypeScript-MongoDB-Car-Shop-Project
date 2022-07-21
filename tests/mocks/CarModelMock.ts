import { Model } from '../../interfaces/ModelInterface';
import { Car } from '../../interfaces/CarInterface';
import { mockedCarWithId } from './CarReturnsMock';

class CarModelMock implements Model<Car> {
	async create(entity: Car): Promise<Car> {
		return mockedCarWithId;
	}
	async read(): Promise<Car[]> {
		return [ mockedCarWithId ];
	}
	async readOne(id: string): Promise<Car | null> {
		return mockedCarWithId;
	}
	async update(id: string, entity: Car): Promise<Car | null> {
		return mockedCarWithId;
	}
	async delete(id: string): Promise<Car | null> {
		return mockedCarWithId;
	}
}

export default CarModelMock;
