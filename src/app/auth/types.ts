export type Role = 'USER' | 'AUTHOR'

export interface UserPayload {
  email: string
  password: string
  roles: Role[]
}
