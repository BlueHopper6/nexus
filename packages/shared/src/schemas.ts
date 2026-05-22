import { z } from 'zod';

// strict schema definition for incoming payloads
export const JobPayloadSchema = z.object({
    jobId: z.string().uuid().optional(),
    type: z.enum(['IMAGE_PROCESS', 'DATA_SYNC', 'REPORT_GENERATION']),
    payload: z.record(z.string(), z.unknown()),
    priority: z.number().int().min(1).max(10).default(5)
});

// infer typescript type directly from the zod schema
export type JobPayload = z.infer<typeof JobPayloadSchema>;