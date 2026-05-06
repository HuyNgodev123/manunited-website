// ===== BASE ENTITIES =====
export interface BaseEntity {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BaseNamedEntity extends BaseEntity {
  name: string;
  description?: string;
}

// ===== BASE RESPONSES =====
export interface BaseResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

// ===== PROPS BASES =====
export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface BaseComponentProps extends BaseProps {
  children?: React.ReactNode;
}

// ===== COMMON UTILITIES =====
export interface IPageMeta {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export interface IFilterOptions {
  limit?: number;
  offset?: number;
  sort?: string;
  order?: 'asc' | 'desc';
}