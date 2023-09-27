import type { FC } from 'react'

export interface routeType {
  prop: {
    id: string
    path: string
    element: FC
    isProtected: boolean }
}
