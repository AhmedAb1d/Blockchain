import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import reload from "./reload.png";

function App() {
  const [chain, setChain] = useState({
    chain: [],
  });
  const [open, setOpen] = useState(false);
  const [blockData, setBlockData] = useState({ transactions: [] });

  const handleOpen = (block) => {
    setOpen(true);
    setBlockData(block);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getBlockchain();
  }, []);

  const getBlockchain = async () => {
    await axios
      .get("/api/chain")
      .then((res) => {
        setChain(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReload = async () => {
    await axios
      .post("/api/clear")
      .then(() => getBlockchain())
      .catch((error) => console.log(error));
  };

  const addTransaction = () => {
    axios
      .post("/api/transactions/new", {
        transaction: "newTransaction",
      })
      .then(() => {
        getBlockchain();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Card className='modal'>
          <CardContent>
            <div>
              <div style={{ margin: "5px 6px 9px 6px" }}>
                <Typography className='typo1' component='div'>
                  Index: {blockData.index}
                </Typography>
              </div>
              <div style={{ margin: "5px 6px 9px 6px" }}>
                <Typography className='typo2' component='div'>
                  Nonce: {blockData.nonce}
                </Typography>
              </div>
            </div>
          </CardContent>
          <CardContent>
            <div className='hashDivPrime'>
              <div style={{ margin: "3px 3px 10px 3px" }}>
                <Typography className='hash1'>
                  Hash: {blockData.hash}
                </Typography>
              </div>
              <div style={{ margin: "3px" }}>
                <Typography className='hash2'>
                  Previous Hash: {blockData.previous_hash}
                </Typography>
              </div>
            </div>
            <div style={{ margin: "3px", color: "#3E7BC0" }}>
              <Typography className='hashDivPrime'>
                Transactions:{" "}
                {blockData.transactions.map((transaction) => (
                  <Typography
                    style={{ margin: "3px", color: "white" }}
                    className='hash1'
                  >
                    {transaction.transaction}
                  </Typography>
                ))}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Modal>
      <div className='mainDiv'>
        <div className='buttonDiv'>
          <Button
            variant='outlined'
            style={{
              color: "white",
              borderColor: "#3E7BC0",
              backgroundColor: "#3E7BC0",
              borderRadius: "7px",
            }}
            onClick={() => addTransaction()}
          >
            Add transaction
          </Button>
          <div class='img__wrap'>
            <img
              src={reload}
              alt='Reload'
              className='img__img'
              data-hover='Hello, this is the tooltip'
              onClick={handleReload}
            />
            <p class='img__description'>Reload the blockchain</p>
          </div>
        </div>
        <div className='cardDiv'>
          {chain.chain.map((block) => (
            <Card className='card' onClick={() => handleOpen(block)}>
              <CardContent>
                <div>
                  <div style={{ margin: "5px 6px 9px 6px" }}>
                    <Typography className='typo1' component='div'>
                      Index: {block.index}
                    </Typography>
                  </div>
                  <div style={{ margin: "5px 6px 9px 6px" }}>
                    <Typography className='typo2' component='div'>
                      Nonce: {block.nonce}
                    </Typography>
                  </div>
                </div>
              </CardContent>
              <CardContent>
                <div className='hashDiv'>
                  <div style={{ margin: "3px 3px 10px 3px" }}>
                    <Typography className='hash1'>
                      Hash: {block.hash.slice(0, 14) + "..."}
                    </Typography>
                  </div>
                  <div style={{ margin: "3px" }}>
                    <Typography className='hash2'>
                      Previous Hash: {block.previous_hash.slice(0, 6) + "..."}
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
