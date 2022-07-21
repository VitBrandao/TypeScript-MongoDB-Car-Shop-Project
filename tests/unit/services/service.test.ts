import { expect } from 'chai';
import Sinon from 'sinon';
import CarService from '../../../services/CarService';
import { Car } from '../../../interfaces/CarInterface';
// import CarModelMock from '../../mocks/CarModelMock';
import { mockedBodyCar, mockedCarWithId, allCarsMock } from '../../mocks/CarReturnsMock';
import CarModel from '../../../models/CarModel';
// import mongoose from 'mongoose';

describe('Testes de Car Services', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  
  describe('Testa a função create() de Services', () => {
    before(() => {
      Sinon
        .stub(carModel, 'create')
        .resolves({
          ...mockedBodyCar,
        } as Car);
    });

    after(() => {
      (carModel.create as Sinon.SinonStub).restore();
    });

    it('Para o body correto, retorna um objeto', async () => {
      const carCreated = await carService.create(mockedBodyCar);

      expect(carCreated).to.be.an('object');
    })

    it('O objeto retornado possui todas as propriedades', async () => {
      const carCreated = await carService.create(mockedBodyCar);

      expect(carCreated).to.have.property('buyValue');
      expect(carCreated).to.have.property('seatsQty');
      expect(carCreated).to.have.property('doorsQty');

      expect(carCreated).to.have.property('model');
      expect(carCreated).to.have.property('year');
      expect(carCreated).to.have.property('color');
    })
  })

  describe('Testa a função update() de Services', () => {
    before(() => {
      Sinon
      .stub(carModel, 'update')
      .resolves({
        ...mockedBodyCar,
      } as Car);
    });

    after(() => {
      (carModel.update as Sinon.SinonStub).restore();
    });

    const mockedId = '628fafea3b94a2894ec3f9e7';
    it('Para o body correto, retorna um objeto', async () => {
      const carRead = await carService.update(mockedId, mockedBodyCar);

      expect(carRead).to.be.an('object');
    })

    it('O objeto retornado possui todas as propriedades', async () => {
      const carRead = await carService.update(mockedId, mockedBodyCar);

      expect(carRead).to.have.property('buyValue');
      expect(carRead).to.have.property('seatsQty');
      expect(carRead).to.have.property('doorsQty');

      expect(carRead).to.have.property('model');
      expect(carRead).to.have.property('year');
      expect(carRead).to.have.property('color');
    })
  });

  describe('Testa a função delete() de Services', () => {
    before(() => {
      Sinon
      .stub(carModel, 'delete')
      .resolves({
        ...mockedCarWithId,
      } as Car);
    });

    after(() => {
      (carModel.delete as Sinon.SinonStub).restore();
    });

    const mockId = '628fafea3b94a2894ec3f9e7';
    it('Espera-se um objeto como retorno', async () => {
      const deletedCar = await carService.delete(mockId);

      expect(deletedCar).to.exist;
    })
  });
});
