export default function Footer() {
  return (
    <footer className={`flex flex-col relative justify-center overflow-hidden`}>
      <div className={`w-[35rem] h-[15rem]`}>
        <img src="./logo.svg" alt="" />
      </div>
      <div className={`p-4 absolute top-0 left-0 flex flex-col gap-5`}>
        <div className={`text-mainColor text-2xl `}>Stay in touch!</div>
        <form className={`flex flex-col items-start gap-3`}>
          <input type="email" name="email" className={`text-mainColor px-3 py-1 border-2 border-mainColor rounded-3xl`} />
          <button className={`text-mainColor border-2 border-mainColor  hover:text-textColor hover:bg-mainColor px-3 py-1 rounded-3xl`}>Submit</button>
        </form>
        <div className={`flex gap-2 items-baseline`}>
          <img className={`w-3`} src="./copyright-icon.svg" alt="" />
          <h6 className={`text-mainColor`}>Redouan ch {new Date().getFullYear()}</h6>
        </div>
      </div>
    </footer>
  )
}
