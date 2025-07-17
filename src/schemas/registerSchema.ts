import { z } from 'zod';

export const registerSchema = z
    .object({
        username: z.email('Email is not valid'),
        password: z.string().min(6, 'Password minimum 6 characters'),
        confirmPassword: z.string().min(6, 'Confirm password is required')
    })
    .refine(data => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword']
    });

export type registerFormType = z.infer<typeof registerSchema>;
