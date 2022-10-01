import React, { ReactNode } from "react"
import { AuthenticationLayer } from "../Authentication/AuthenticationLayer"

export const BasicLayout = ({ children }:{children: ReactNode}): JSX.Element => {
  return (
    <AuthenticationLayer>
      { children }
    </AuthenticationLayer>
  )
}