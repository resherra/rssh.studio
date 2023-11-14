"use client"

import { ValidationError, useForm } from "@formspree/react"
import { useEffect, useState } from "react"

export default function ContactForm() {
  const [email, setEmail] = useState("")
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_NEW_FORM)

  useEffect(() => {
    async function send() {
      if (state.succeeded) {
        const response = await fetch(`/api/send`, {
          method: "POST",
          body: JSON.stringify({ email: email }),
        })

        return response
      } else {
        return null
      }
    }

    send()
  }, [state, email])

  if (state.succeeded) {
    return <p className="font-semibold pt-4">Well received, Check your inbox!</p>
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col items-start gap-4`} noValidate>
      <div className="text-red-500 text-xs">
        <ValidationError field="email" errors={state.errors} />
      </div>
      <input onChange={(e) => setEmail(e.target.value)} id="email" type="email" name="email" placeholder="user@email.com" autoComplete="off" className="px-3 py-1.5 border border-textColor rounded-3xl bg-transparent placeholder:text-zinc-500 outline-none" />
      <button type="submit" disabled={state.submitting} className={`border-[1.5px] px-3 py-1.5 rounded-3xl outline-none border-textColor hover:text-secColor focus:text-secColor hover:bg-textColor focus:bg-textColor hover:font-semibold focus:font-semibold disabled:bg-white disabled:text-black disabled:font-semibold`}>
        {state.submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  )
}
