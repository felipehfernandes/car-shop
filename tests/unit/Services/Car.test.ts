import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import CarService from '../../../src/Services/Car.service';
import { carInput, car1, car2 } from './mocks/car.mock';

describe('Tests for the car route', function () {
  describe('Test if create a car on database successfully', function () {
    it('Should create a car successfully', async function () {
      sinon.stub(Model, 'create').resolves(car1);
  
      const service = new CarService();
      const result = await service.create(carInput);
  
      expect(result).to.deep.equal(car1);
  
      sinon.restore();
    });
  });

  describe('Test if search all cars on database successfully', function () {
    it('Should search all cars successfully', async function () {
      sinon.stub(Model, 'find').resolves([car1, car2]);
  
      const service = new CarService();
      const result = await service.getAll();
  
      expect(result).to.deep.equal([car1, car2]);
  
      sinon.restore();
    });
  });

  describe('Test if search all cars by id on database successfully', function () {
    afterEach(function () {
      sinon.restore();
    });
  
    it('Should search cars by ID successfully', async function () {
      sinon.stub(Model, 'findOne').resolves(car1);
  
      const service = new CarService();
      const result = await service.getById('63319d80feb9f483ee823ac5');
  
      expect(result).to.deep.equal(car1);
    });
  
    it('Should get error message on trying to get cars with an invalid ID', async function () {
      sinon.stub(Model, 'findOne').throws(new Error('Invalid Mongo id'));
  
      try {
        const service = new CarService();
        await service.getById('wrong id');
      } catch (error) {
        expect((error as Error).message).to.equal('Invalid mongo id');
      }
    });
  
    it('Should get error message on trying to get cars with an invalid car', async function () {
      sinon.stub(Model, 'findOne').resolves();
  
      try {
        const service = new CarService();
        await service.getById('63319d80feb9f483ee823ac5');
      } catch (error) {
        expect((error as Error).message).to.equal('Car not found');
      }
    });
  });
});
