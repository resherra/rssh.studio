"use client"

import { useForm } from "@formspree/react"
import { useEffect } from "react"

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_NEW_FORM)

  useEffect(() => {
    async function send() {
      const response = await fetch(`/api/send`, {
        method: "POST",
      })

      console.log(response)

      return response
    }

    if (state.succeeded) {
      send()
    }
  }, [state])

  if (state.succeeded) {
    return <p className="font-semibold pt-4">Well received, thanks!</p>
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col items-start gap-4 `} noValidate>
      <input id="email" type="email" name="email" placeholder="user@email.com" autoComplete="off" className="px-3 py-1.5 border-[1.5px] border-textColor rounded-3xl bg-transparent placeholder:text-zinc-500 outline-none" />
      <button type="submit" disabled={state.submitting} className="border-[1.5px] px-3 py-1.5 rounded-3xl outline-none border-textColor hover:text-secColor focus:text-secColor hover:bg-textColor focus:bg-textColor hover:font-semibold focus:font-semibold">
        {state.submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  )
}
