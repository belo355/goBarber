import { Router } from "express";
import { parseISO } from "date-fns";
import { getCustomRepository} from 'typeorm';

import AppointmentRepository from "../repositories/AppointmentRepository";
import CreateAppointmentService from "../services/CreateAppointmentService";

const appointmentRoutes = Router();

appointmentRoutes.get("/", (request, response) => {
  const appointmentRepository = getCustomRepository(AppointmentRepository);
  const appointment = appointmentRepository.find();
  return response.status(200).json(appointment);
});

appointmentRoutes.post("/", async (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService()


    const appointment = await createAppointment.execute({
      provider,
      date: parsedDate,
    });

    return response.status(200).json(appointment);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default appointmentRoutes;
