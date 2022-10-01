import React, { ReactNode } from "react"
import { AuthenticationLayer } from "../Authentication/AuthenticationLayer"

type Props = {
  children: ReactNode
}
export const BasicLayout = ({ children }: Props): JSX.Element => {
  return (
    <AuthenticationLayer>
      { children }
    </AuthenticationLayer>
  )
}