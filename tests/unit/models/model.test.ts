import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import { Model } from 'mongoose';
import { mockedCarWithId } from '../../mocks/CarReturnsMock';
import CarModel from '../../../models/CarModel';

describe('Testes de Car Model', () => {
  describe('Testa a função create() da Car Model', () => {
    before(() => {
      sinon.stub(Model, 'create').resolves(mockedCarWithId)
    })

    after(() => {
      (Model.create as SinonStub).restore()
    })

    it('Espera-se o sucesso da requisição POST', async () => {
      const carModel = new CarModel();
      const carCreate = await carModel.create(mockedCarWithId);
      expect(carCreate).to.be.deep.equal(mockedCarWithId);
    })
  })

  describe('Testa a função find() da Car Model', () => {
    before(() => {
      sinon.stub(Model, 'find').resolves([mockedCarWithId])
    })

    after(() => {
      (Model.find as SinonStub).restore()
    })

    it('Espera-se o retorno correto da requisição GET ', async () => {
      const carModel = new CarModel();
      const findCar = await carModel.read();
      expect(findCar).to.be.deep.equal([mockedCarWithId]);
    })
  })
})