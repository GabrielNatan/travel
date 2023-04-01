import { createContext, useContext, useState } from "react";

export const SnackBarContext = createContext<ISnackBar>({})

export interface ISnackBar{
  message?: string
  open?: boolean
  setMessage?:React.Dispatch<React.SetStateAction<string>>
  handleClose?: ()=> void
  handleOpen?:(message:string)=> void
}

export const SnackBarProvider = ({ children }: {children: React.ReactNode})=>{
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)

  function handleClose(){
    setOpen(false)
  }

  function handleOpen(message: string){
    setOpen(true)
    setMessage(message)
  }

  const value: ISnackBar = {
    message,
    open,
    setMessage,
    handleClose,
    handleOpen
  }
  return(
    <SnackBarContext.Provider value={value}>
      {children}
    </SnackBarContext.Provider>
  )
}

export const useSnackBar: ()=> ISnackBar = ()=> useContext<ISnackBar>(SnackBarContext)
