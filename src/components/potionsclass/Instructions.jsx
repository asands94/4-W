import React from 'react'
import { styled, Box } from '@material-ui/system';
import ModalUnstyled from '@material-ui/unstyled/ModalUnstyled';

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
  background-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: 'white',
  border: '3px solid rgb(56, 71, 21)',
  p: 2,
  px: 4,
  pb: 3,
  textAlign: "center",
};

export default function Instructions() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <button type="button" onClick={handleOpen}>
        instructions
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h3 id="unstyled-modal-title">Instructions</h3>
          <p id="unstyled-modal-descriptions">The bottle starts off clear. Once you begin making a potion, it will turn brown until you complete it. If you make it correctly, it will turn lavender! Click on each book to try making a different potion.</p>
        </Box>
      </StyledModal>
    </>
  )
}
