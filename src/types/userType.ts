export interface userType {
  id?: number
  name: string
  password: string
  email?: string
  role: number
  is_active?: boolean
  accessToken?: string
  refreshToken?: string
}
