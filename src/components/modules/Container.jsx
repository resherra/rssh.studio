export default function Container({ children }) {
  return (
    <div className={`bg-mainColor dark:bg-secColor text-secColor dark:text-textColor`}>
      <div className={`max-w-screen-2xl m-auto pt-12 md:pt-20 px-4 md:px-6 lg:px-8 pb-12 selection:bg-secColor selection:text-textColor dark:selection:bg-textColor dark:selection:text-secColor`}>{children}</div>
    </div>
  )
}
