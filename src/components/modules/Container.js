export default function Container({ children }) {
  return <div className={`max-w-screen-lg p-4 lg:px-0 m-auto selection:bg-stone-200 selection:text-black`}>{children}</div>
}
