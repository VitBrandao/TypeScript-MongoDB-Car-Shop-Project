import { Request, Response } from 'express';
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

  readOne = async (
    req: Request<{ id: string; }>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const carById = await this.service.readOne(id);
      if (carById === null) {
        return res.status(400).json({ error: this.errors.idLengthError });
      }
      return res.json(carById);
    } catch (err) {
      return res.status(404).json({ error: this.errors.notFound });
    }
  };
}

export default CarController;
