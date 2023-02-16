import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import VehicleTypes from '../Utils/VehicleTypes';
import AbstractService from './Abstract.service';

class MotorcycleService extends AbstractService<IMotorcycle> {
  constructor() {
    super(new MotorcycleODM(), VehicleTypes.MOTO);
  }
}

export default MotorcycleService;