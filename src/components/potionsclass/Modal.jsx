import * as React from 'react';
import { styled, Box } from '@material-ui/system';
import ModalUnstyled from '@material-ui/unstyled/ModalUnstyled';
import Book from "./Book.svg"

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
  borderRadius: '2em',
};


export default function Modal() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  return (
    <div>
      <button className="book-button" type="button" onClick={handleOpen}>
        <img className="book-button" src={Book} alt="book" />
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h2 id="unstyled-modal-title">Wolfsbane Potion</h2>
          <p id="unstyled-modal-description">Ingredients: <em>aconite, fairy wings, morning dew, chamomile,</em> and <em>peppermint.</em></p>
        </Box>
      </StyledModal>

      <button className="book-button" type="button" onClick={handleOpen2}>
        <img className="book-button" src={Book} alt="book" />
      </button>
      <StyledModal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open2}
        onClose={handleClose2}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h2 id="modal-title">Amortentia (Love Potion)</h2>
          <p id="modal-description">Ingredients: <em>rose petals, eucalyptus, phoenix feather,</em> and <em>rosemary.</em></p>
        </Box>
      </StyledModal>

      <button className="book-button" type="button" onClick={handleOpen3}>
        <img className="book-button" src={Book} alt="book" />
      </button>
      <StyledModal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open3}
        onClose={handleClose3}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h2 id="modal-title">Invisibility Potion</h2>
          <p id="modal-description">Ingredients: <em>cherries, soil, river water,</em> and <em>lavendar.</em></p>
        </Box>
      </StyledModal>
    </div>
  );
}
