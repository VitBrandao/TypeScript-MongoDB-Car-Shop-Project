import { Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import { Car } from '../interfaces/CarInterface';
import CarService from '../services/CarService';

class CarController extends Controller<Car> {
  private _route: string;

  constructor(
    service = new CarService(),
    route = '/cars',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (
    req: RequestWithBody<Car>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const createdCar = await this.service.create(body);
      if (!createdCar) {
        return res.status(400).json({ error: this.errors.internal });
      }
      if ('error' in createdCar) {
        return res.status(400).json(createdCar);
      }
      return res.status(201).json(createdCar);
    } catch (err) {
      return res.status(400).json({ error: this.errors.internal });
    }
  };
}

export default CarController;
