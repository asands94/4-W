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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <p id="unstyled-modal-description">Ingredients: <em>aconite, fairy wings, morning dew, and chamomile.</em></p>
        </Box>
      </StyledModal>
    </div>
  );
}
