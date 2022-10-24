import { useState, createContext } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  const ShowCart = ({open, handleClose}) => {
  
  return (
    <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button >Finalizar</button>
        </Box>
      </Modal>
    </div>
  );
}

export const ShowContext = createContext()

export const ShowProvider = ({ children }) =>{

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
    return (
        <ShowContext.Provider value={{handleOpen, handleClose}}>
            <ShowCart  handleOpen={handleOpen} open={open} handleClose={handleClose}/>
             { children }
        </ShowContext.Provider>  
    ) 

}