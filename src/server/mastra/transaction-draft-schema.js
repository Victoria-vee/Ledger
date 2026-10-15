import { z } from 'zod';

export const transactionDraftSchema = z
  .object({
    type: z.enum(['income', 'expense']),
    description: z.string().trim().min(1),
    amountMinorUnits: z.number().int().positive(),
    currency: z.string().regex(/^[A-Z]{3}$/),
    date: z.iso.date(),
    category: z.string().trim().min(1),
  })
  .strict();
