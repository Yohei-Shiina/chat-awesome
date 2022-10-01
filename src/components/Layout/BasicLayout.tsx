import React, { ReactNode } from "react"
import { AuthenticationLayer } from "../Authentication/AuthenticationLayer"

type Props = {
  children: ReactNode
}
export const BasicLayout = ({ children }: Props): JSX.Element => {
  return process.env.NODE_ENV !== 'development' ? (
    <>
      <p>Authentication is currently disabled in production mode</p>
      { children }
    </>
  ) : (
    <AuthenticationLayer>
      { children }
    </AuthenticationLayer>
  )
}