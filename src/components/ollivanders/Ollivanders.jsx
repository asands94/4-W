import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { OLLIVANDERS_URL, headers } from '../services'
import { styled, Box } from '@material-ui/system';
import ModalUnstyled from '@material-ui/unstyled/ModalUnstyled';
import greenmagic from "./greenmagic.png"


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
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
  textAlign: "center"
};

export default function Ollivanders() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [wands, setWands] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const dataURL = `${OLLIVANDERS_URL}`
      const res = await axios.get(dataURL, { headers })
      console.log(res.data.records)
      setWands(res.data.records)
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Ollivanders</h1>
      </div>
      <img className="background-image" src={greenmagic} alt="blurred blue background" />
      <div className="wands-container">
        {wands.map((wand, index) => {
          return (
            <div className="wand-cage" key={index}>

              <button type="button" onClick={handleOpen}>
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
                  <h3 id="unstyled-modal-title">{wand.fields?.wood} wood with a {wand.fields?.core} core, {wand.fields?.length} and {wand.fields?.flexibility} flexibility</h3>
                </Box>
              </StyledModal>

              <div>
                {wand.fields.image.map((images) => {
                  return (
                    <>
                      <img className="wands" src={images.url} alt="wand" />
                    </>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </>

  )
}
