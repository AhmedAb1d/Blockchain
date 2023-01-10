import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function App() {
  
  const [chain, setChain] = useState({
    chain: [],
  });

  useEffect(() => {
    getBlockchain();
  }, []);

  const getBlockchain = async () => {
    await axios
      .get("http://localhost:5000/api/chain")
      .then((res) => {
        setChain(res.data);
        console.log(res.data.chain);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addTransaction = () => {
    axios
      .post("http://localhost:5000/api/transactions/new", {
        transaction: "new",
      })
      .then((res) => {
        console.log(res);
        getBlockchain();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='mainDiv'>
      <div className='buttonDiv'>
        <Button
          variant='outlined'
          style={{ color: "white", borderColor: "rgb(163, 107, 23)", backgroundColor:"rgb(45, 45, 85)" }}
          onClick={() => addTransaction()}
        >
          Add transaction
        </Button>
      </div>
      <div className='cardDiv'>
        {chain.chain.map((block) => (
          <Card className='card'>
            <CardContent>
              <div>
                <Typography className='typo1' component='div'>
                  Index {block.index}
                </Typography>
              </div>
              <div>
                <Typography className='typo2' component='div'>
                  Nonce: {block.nonce}
                </Typography>
              </div>
            </CardContent>
            <CardContent>
              <Typography className="hash">
                Hash: {block.hash.slice(0,21)+'...'}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography className="hash">
                Previous Hash: {block.previous_hash.slice(0,13)+'...'}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
