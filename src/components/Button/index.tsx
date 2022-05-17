// Button
import { FC, ReactNode } from 'react'

const buttonProps: any = {
  color: {
    green:
      'col-span-2 text-emerald-400 hover:bg-emerald-400 hover:text-white active:bg-emerald-500/90 active:shadow-inner focus:outline-none focus:ring focus:ring-emerald-500/40',
    red: 'col-span-2 text-rose-400 hover:bg-rose-400 hover:text-white active:bg-rose-500/90 active:shadow-inner focus:outline-none focus:ring focus:ring-rose-500/40',
    blue: 'text-sky-400 hover:bg-sky-400 hover:text-white active:bg-sky-500/90 active:shadow-inner focus:outline-none focus:ring focus:ring-sky-500/400',
  },
}

type buttonTypes = {
  color: string
  children: ReactNode | ReactNode[]
  onClick: () => void
}

const Button: FC<buttonTypes> = ({ color, onClick, children }) => {
  return (
    <button
      className={`flex items-center justify-center gap-1 p-2 rounded bg-white font-semibold uppercase transition-colors ${buttonProps.color[color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
