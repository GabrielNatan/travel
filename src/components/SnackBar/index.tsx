import { Button, Slide, Snackbar } from "@mui/material"
import { useSnackBar } from "../../context/SnackBarContext";

export const SnackBarComponent = ()=>{
  const { open, message, handleClose } = useSnackBar()
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      TransitionComponent={(props)=> <Slide {...props} direction="right" />}
      message={message}
      action={<Button>X</Button>}
    />
  )
}
