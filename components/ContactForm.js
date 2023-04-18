"use client"

import { useForm } from "@formspree/react"

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM)

  if (state.succeeded) {
    return <p className="text-black">Thanks for your submission!</p>
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col items-start gap-3 text-textColor`} noValidate>
      <input id="email" type="email" name="email" placeholder="example@email.com" className="text-textColor px-3 py-1 border border-textColor rounded-3xl bg-transparent placeholder:text-zinc-300/80 outline-none" />
      <button type="submit" disabled={state.submitting} className="text-sm border border-textColor hover:text-secColor focus:text-secColor hover:bg-white focus:bg-white px-3 py-1 rounded-3xl outline-none">
        Submit
      </button>
    </form>
  )
}
