// import React, { useState } from 'react'
import { Link } from "react-router-dom"
// import MoneyDisplay from './MoneyDisplay'
import "./gringotts.css"

// export default function GringottsBank() {

//   const [balance, setBalance] = useState(0)


//   return (
//     <div>
//       {/* <MoneyDisplay balance={balance} /> */}
//       <div className="cards-container">
//         {/* <Link to="/gringotts-shopping"><button className="gringotts-card">Go Buy School Supplies</button></Link> */}
//         {/* <div className="gringotts-money-display">
//           <h1>Your Balance</h1>
//           <h2>{balance} Galleons</h2>
//         </div> */}
//       </div>

//       {/* <button onClick={() => setBalance(balance + 1)}>+</button>
//       <button onClick={() => setBalance(0)}>-</button> */}

//     </div>
//     // <Box className="box" color="text.primary" clone>
//     //   <MoneyDisplay />
//     // </Box>
//   )
// }

import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardimage from "./cardimage.svg"

export default function ImgMediaCard() {
  return (
    <div className="gringotts-card-container">
      <Card className="title-box" sx={{ maxWidth: 345, maxHeight: 195 }}>

        <CardContent>
          <Typography variant="h3" color="antiquewhite">
            Gringotts Wizarding Bank
          </Typography>
        </CardContent>

      </Card>

      <Card className="title-box" sx={{ maxWidth: 345, maxHeight: 195 }}>

        <CardContent>
          <Typography variant="h3" color="antiquewhite">
            Gringotts Wizarding Bank
          </Typography>
        </CardContent>

      </Card>

      <Card className="bird" sx={{ maxWidth: 345 }}>

        <CardMedia
          component="img"
          alt="book, owl, wand"
          height="355"
          image={cardimage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body1" color="goldenRod">
            It's time to buy some school supplies! You'll need a pet, some books, and a wand.
            <Link to="/gringotts-shopping"><Button size="small">Go Buy School Supplies</Button></Link>
          </Typography>
        </CardContent>

      </Card>
    </div>

  );
}