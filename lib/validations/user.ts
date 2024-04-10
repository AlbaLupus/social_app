import * as z from 'zod';

export const UserValidation = z.object({
    profile_photo:z.string().url().nonempty(),
    name:z.string().min(3, {message:'NAME TOO SHORT'}).max(12, {message:'NAME TOO LONG'}),
    username:z.string().min(3, {message:'NAME TOO SHORT'}).max(12, {message:'NAME TOO LONG'}).nonempty(),
    bio:z.string().min(3).max(1000)
})