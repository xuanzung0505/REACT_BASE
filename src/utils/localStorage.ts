import type { userType } from '@globalTypes/userType'

/* eslint-disable @typescript-eslint/no-explicit-any */
export function getObjectStringName (value: any) {
  return Object.prototype.toString.call(value)
}

function setLocalStorage (key: string, value: string) {
  const name = getObjectStringName(value)

  if (name === '[object String]') localStorage.setItem(key, value)
  else localStorage.setItem(key, JSON.stringify(value))
}

export function getStringLocalStorage (key: string) {
  return localStorage.getItem(key)
}

export function getJsonLocalStorage (key: string) {
  return JSON.parse(localStorage.getItem(key) ?? '{}')
}

export function getArrJsonLocalStorage (key: string) {
  return JSON.parse(localStorage.getItem(key) ?? '[]')
}

// ===== ACCESS_TOKEN =====
const ACCESS_TOKEN_KEY = 'accessToken'
export function saveAccessToken (accessToken: string) {
  setLocalStorage(ACCESS_TOKEN_KEY, accessToken)
}
export function readAccessToken () {
  return getStringLocalStorage(ACCESS_TOKEN_KEY)
}

// ===== ACCESS_TOKEN =====
const REFRESH_TOKEN_KEY = 'refreshToken'
export function saveRefreshToken (refreshToken: string) {
  setLocalStorage(REFRESH_TOKEN_KEY, refreshToken)
}
export function readRefreshToken () {
  return getStringLocalStorage(REFRESH_TOKEN_KEY)
}

// current menu key
const MENU_OPEN_KEY = 'menuOpenKeys'
export function saveMenuOpenKeys (openKeys: string) {
  setLocalStorage(MENU_OPEN_KEY, openKeys)
}
export function readMenuOpenKeys () {
  return getArrJsonLocalStorage(MENU_OPEN_KEY)
}

// User
const USER_KEY = 'userInfo'
export function saveUserLocalStorage (user: userType) {
  setLocalStorage(USER_KEY, JSON.stringify(user))
}
export function clearUserLocalStorage () {
  setLocalStorage(USER_KEY, '')
}

export function readUserLocalStorage () {
  return getJsonLocalStorage(USER_KEY)
}
