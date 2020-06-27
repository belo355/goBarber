import { Router, request } from "express";
import { parseISO } from "date-fns";
import { getCustomRepository} from 'typeorm';

import AppointmentRepository from "../repositories/AppointmentsRepository";
import CreateAppointmentService from "../services/CreateAppointmentService";
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const appointmentRoutes = Router();

appointmentRoutes.use(ensureAuthenticated);

appointmentRoutes.get("/",  async (request, response) => {
  const appointmentRepository = getCustomRepository(AppointmentRepository);
  const appointment = await appointmentRepository.find();

  return response.status(200).json(appointment);
});

appointmentRoutes.post("/", async (request, response) => {
  try {
    const { provider_id, date } = request.body;
    const parsedDate = parseISO(date);
    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({
      provider_id,
      date: parsedDate,
    });

    return response.status(200).json(appointment);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default appointmentRoutes;
