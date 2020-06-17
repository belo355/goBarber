import { Router } from "express";
import { parseISO } from "date-fns";

import AppointmentRepository from "../repositories/AppointmentRepository";
import CreateAppointmentService from "../services/CreateAppointmentService";

const appointmentRoutes = Router();
const appointmentRepository = new AppointmentRepository();

appointmentRoutes.get("/", (request, response) => {
  const appointment = appointmentRepository.findAll();
  return response.status(200).json(appointment);
});

appointmentRoutes.post("/", (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(
      appointmentRepository
    );

    const appointment = createAppointment.execute({
      provider,
      date: parsedDate,
    });
    return response.status(200).json(appointment);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default appointmentRoutes;
