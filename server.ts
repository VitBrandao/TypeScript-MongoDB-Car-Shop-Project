import CustomRouter from './routes/Router';
import App from './app';
import { Car } from './interfaces/CarInterface';
import CarController from './controllers/CarController';

const server = new App();

const carController = new CarController();

const carRouter = new CustomRouter<Car>();
carRouter.addRoute(carController);

server.addRouter(carRouter.router);

export default server;
