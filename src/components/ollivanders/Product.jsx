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
  border: '3px solid rgb(0, 151, 43)',
  p: 2,
  px: 4,
  pb: 3,
  textAlign: "center"
};

export default function Product(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { wand, images, onAdd } = props

  return (
    <div className="wand-cage">
      <button style={{ border: "none", backgroundColor: 'rgba(0, 0, 0, 0)', color: "antiquewhite" }} type="button" onClick={handleOpen}>
        Learn about this wand
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h3 id="unstyled-modal-title">{wand.wood} wood with a {wand.core} core, {wand.length} and {wand.flexibility} flexibility</h3>
        </Box>
      </StyledModal>

      <img className="wands" src={images.url} alt={wand.name} />
      <div>{wand.price} Galleons</div>
      <div>
        <button onClick={() => onAdd(wand)}>Add to Cart</button>
      </div>
    </div>
  )
}
