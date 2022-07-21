import { z } from 'zod';
import { Vehicle } from './VehicleInterface';

export const MotorcycleSchema = z.object({
  category: z.enum(['Street', 'Custom', 'Trail']),

  engineCapacity: z.number({
    required_error: 'engineCapacity is required',
    invalid_type_error: 'engineCapacity must be a number',
  }).lte(2500),
});

export type Motorcycle = z.infer<typeof MotorcycleSchema> & Vehicle;

/*
category Categoria da moto. Deve poder ser apenas Street, Custom ou Trail
engineCapacity A capacidade do motor. Deve ser um valor inteiro positivo menor ou igual a 2500
*/