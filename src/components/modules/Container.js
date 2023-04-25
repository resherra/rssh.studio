import Footer from "../ui/shared/footer"

export default function Container({ children }) {
  return (
    <div className={`bg-mainColor dark:bg-secColor text-secColor dark:text-textColor`}>
      <div className={`max-w-screen-lg min-h-screen p-4 lg:px-0 m-auto selection:bg-secColor selection:text-textColor dark:selection:bg-textColor dark:selection:text-secColor`}>{children}</div>
    </div>
  )
}
