import { v4 as uuidv4 } from 'uuid'

export const PATH_API: string =
  process.env.REACT_APP_API_BASE_URL ?? 'http://10.1.4.162:3000'
export const PATH_API_TEST: string = 'http://10.1.4.162:3000'

export const DATA = [{ id: uuidv4() }, { id: uuidv4() }]
export const COLORS = ['black', 'red', 'green', 'blue', 'pink']
