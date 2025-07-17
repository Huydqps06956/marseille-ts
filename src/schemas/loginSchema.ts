import { z } from 'zod';

export const loginSchema = z.object({
    username: z.email('Email is not valid'),
    password: z.string().min(1, 'Password is required')
});

export type LoginFormType = z.infer<typeof loginSchema>;
