import { z } from 'zod';
import { Vehicle } from './VehicleInterface';

const CarSchema = z.object({
  doorsQty: z.number({
    required_error: 'DoorsQty is required',
    invalid_type_error: 'DoorsQty must be a number',
  }).gte(2).lte(4),

  seatsQty: z.number({
    required_error: 'SeatsQty is required',
    invalid_type_error: 'SeatsQty must be a number',
  }).gte(2).lte(7),
});

export type Car = z.infer<typeof CarSchema> & Vehicle;

// export interface Car extends Vehicle {
//   doorsQty: number;
//   seatsQty: number;
// }
