import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Account() {

  const { data: session, status } = useSession()

  useEffect(() => {
    console.log("session", session)
  }, [session])


  return (
    <div className="border bg-slate-50 opacity-75">
      <h1>Sign In Tester</h1>
      {/* <p>Session: {JSON.stringify(session)}</p> */}
      <p>Session: {JSON.stringify(session?.user?.email)}</p>
      <p>Status: {status}</p>
      <button onClick={() => signIn()}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}
