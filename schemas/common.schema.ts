import { z } from 'zod';

// ===== BASE ENTITY SCHEMA =====
export const BaseEntitySchema = z.object({
  id: z.number().int().positive('ID must be positive'),
  createdAt: z.date().or(z.string().datetime()).optional(),
  updatedAt: z.date().or(z.string().datetime()).optional(),
});

// ===== NAMED ENTITY SCHEMA =====
export const BaseNamedEntitySchema = BaseEntitySchema.extend({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  description: z.string().optional(),
});

// ===== PAGINATION SCHEMA =====
export const PaginationSchema = z.object({
  total: z.number().int().nonnegative(),
  page: z.number().int().positive(),
  limit: z.number().int().positive(),
});

// ===== FILTER OPTIONS SCHEMA =====
export const FilterOptionsSchema = z.object({
  limit: z.number().int().positive().optional(),
  offset: z.number().int().nonnegative().optional(),
  sort: z.string().optional(),
  order: z.enum(['asc', 'desc']).optional(),
});

// ===== API RESPONSE SCHEMA =====
export const ApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    data: dataSchema.optional(),
    message: z.string().optional(),
    timestamp: z.string().datetime(),
  });

// ===== PAGINATED RESPONSE SCHEMA =====
export const PaginatedResponseSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    items: z.array(itemSchema),
    total: z.number().int().nonnegative(),
    page: z.number().int().positive(),
    limit: z.number().int().positive(),
    totalPages: z.number().int().nonnegative(),
    hasNextPage: z.boolean(),
    hasPrevPage: z.boolean(),
  });

// ===== TYPE INFERENCE =====
export type BaseEntity = z.infer<typeof BaseEntitySchema>;
export type BaseNamedEntity = z.infer<typeof BaseNamedEntitySchema>;
export type Pagination = z.infer<typeof PaginationSchema>;
export type FilterOptions = z.infer<typeof FilterOptionsSchema>;