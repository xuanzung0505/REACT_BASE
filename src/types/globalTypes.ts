import type { userType } from './userType'

export interface ResponseType<T> {
    data: T
    message?: string
    statusCode: number
    pagination?: {
      currentPages: number
      perPage: number
      total: number
    }
}

export interface AuthType {
    user: null | userType
    accessToken: null | string
    refreshToken: null | string
}

export interface ErrorType {
    message: string
    errors: Record<string, string[]>
  }
