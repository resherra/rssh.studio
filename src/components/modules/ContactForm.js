"use client"

import { useForm } from "@formspree/react"

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM)

  if (state.succeeded) {
    return <p className="font-semibold pt-4">Well received, i'll keep you updated!</p>
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col items-start gap-4 text-textColor `} noValidate>
      <input id="email" type="email" name="email" placeholder="example@email.com" autoComplete="off" className="text-textColor px-3 py-1.5 border-[1.5px] border-textColor rounded-3xl bg-transparent placeholder:text-zinc-300/80 outline-none" />
      <button type="submit" disabled={state.submitting} className="border-[1.5px] border-textColor hover:text-secColor focus:text-secColor hover:font-semibold focus:font-semibold hover:bg-white focus:bg-white px-3 py-1.5 rounded-3xl outline-none">
        Submit
      </button>
    </form>
  )
}
