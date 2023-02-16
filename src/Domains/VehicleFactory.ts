import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';
import VehicleTypes from '../Utils/VehicleTypes';
import CarDomain from './Car';
import MotorcycleDomain from './Motorcycle';

export default class VehicleFactory {
  public static createDomain<T>(type: string, vehicle: T) {
    switch (type) {
      case VehicleTypes.CAR:
        return new CarDomain(vehicle as unknown as ICar);
      case VehicleTypes.MOTO:
        return new MotorcycleDomain(vehicle as unknown as IMotorcycle);
      default:
        throw new Error('Invalid vehicle type!');
    }
  }
}