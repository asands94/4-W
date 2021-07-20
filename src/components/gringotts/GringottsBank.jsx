import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import darkredmagic from "./darkredmagic.png"
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardimage from "./cardimage.svg"
import moneyimage from "./moneyimage.svg"
import "./gringotts.css"

const styles = {
  backgroundColor: "rgb(126, 4, 4)",
  textAlign: "center",
  border: "goldenrod double 10px",
  margin: 10,
  width: 345,
  height: 525,
  color: "goldenrod",
  borderRadius: "2em",
  marginBottom: 200,
}

export default function GringottsBank() {

  const [subBalance, setSubBalance] = useState(
    Number(localStorage.getItem('newBalanceInLocalStorage')) || 0)

  useEffect(() => {
    localStorage.setItem('newBalanceInLocalStorage', subBalance)
  }, [subBalance])

  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Gringotts</h1>
      </div>
      <img className="background-image" src={darkredmagic} alt="blurred red background" />
      <div className="card-container">
        <Card className="gringotts-card" style={styles} sx={{ width: 345, height: 525 }}>
          <CardContent>
            <Typography variant="h4" color="goldenrod">
              Your Balance
            </Typography>
            <Typography variant="h5" color="goldenrod">
              {subBalance} Galleons
            </Typography>
            <Typography variant="h2">
              <Button
                size="large"
                variant="contained"
                style={{ backgroundColor: "goldenrod", color: "rgb(66, 2, 2)", width: 200, height: 55 }}
                onClick={() => setSubBalance(subBalance + 50)}>Withdraw 50 galleons
              </Button>
              <Button
                size="large"
                variant="contained"
                style={{ backgroundColor: "goldenrod", color: "rgb(66, 2, 2)", width: 200, height: 55 }}
                onClick={() => setSubBalance(0)}>Deposit all money
              </Button>
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            alt="Stacks of gold coins"
            height="400"
            image={moneyimage}
            title="Stacks of gold coins"
          />
        </Card>

        <Card className="gringotts-card" style={styles} sx={{ width: 345, height: 525 }}>
          <CardMedia
            component="img"
            alt="Owl with wand and book"
            height="400"
            image={cardimage}
            title="Owl with wand and book"
          />
          <CardContent>
            <Typography color="goldenrod">
              Now that you have money, it's time to get your new pet, school books, and a wand.
              <Link to="/gringotts-shopping"><Button size="small">Go shopping for school supplies</Button></Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}