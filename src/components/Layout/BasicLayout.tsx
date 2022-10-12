import React, { ReactNode } from "react"
import { AuthenticationLayer } from '~/components/Authentication/AuthenticationLayer';

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