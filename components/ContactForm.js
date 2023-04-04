"use client"

import { useForm } from "@formspree/react"

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM)

  if (state.succeeded) {
    return <p className="text-black">Thanks for your submission!</p>
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start gap-3 text-black" noValidate>
      <input id="email" type="email" name="email" placeholder="example@email.com" className="text-black px-3 py-1 border-2 border-black rounded-3xl bg-transparent placeholder:text-black/40 outline-none" />
      <button type="submit" disabled={state.submitting} className="text-black border-2 border-black  hover:text-textColor hover:bg-black focus:bg-black focus:text-textColor  px-3 py-1  rounded-3xl outline-none">
        Submit
      </button>
    </form>
  )
}
