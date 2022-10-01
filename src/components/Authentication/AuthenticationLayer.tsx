import { signIn, signOut, useSession } from 'next-auth/react';
import React, { ReactNode } from 'react';

export const AuthenticationLayer = ({ children }:{children: ReactNode}): JSX.Element => {
  const { data: session } = useSession();
  const accessToken = session?.accessToken as string | undefined;
  if(session == null) {
    return <>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  }
  return (
    <>
      <div>
        <p>Signed in as {session.user?.email}</p>
        <p>Your accessToken is: {accessToken}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
      <div>
        { children }
      </div>
    </>
  );
}