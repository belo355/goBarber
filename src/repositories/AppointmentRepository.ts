import Appointment from '../models/Appointment';
import { isEqual } from 'date-fns';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  /**
   * findAll
   */
  public findAll(): Appointment[] {
    return this.appointments;
  }

  /**
   * create
   */
  public create({ provider , date } : CreateAppointmentDTO ) : Appointment {
    const appointment = new Appointment({
      provider,
      date,
    });

    this.appointments.push(appointment);
    return appointment;
  }

  /**
   * findByDate
   */
  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date));

    return findAppointment || null;
  }

}

export default AppointmentRepository;
