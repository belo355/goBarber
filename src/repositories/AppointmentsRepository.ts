
import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {

  /**
   * findByDate - verifica a existencia de appointments com a data informada
   */
  public async findByDate(date: Date): Promise<Appointment | null >{

    const findAppointment = await this.findOne({
      where: { date : date },
    })

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
