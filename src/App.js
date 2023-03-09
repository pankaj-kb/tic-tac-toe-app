import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import Icon from "./components/Icon";
import "./App.css";
import Points from "./components/Points";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const [crossScore, setCrossScore] = useState(0);
  const [circleScore, setCircleScore] = useState(0);

  const manageScore = (player) => {
    player === "cross"
      ? setCrossScore(crossScore + 1)
      : setCircleScore(circleScore + 1);
    setWinMessage(`${player} won`)
  };

  const resetScore = (event) => {
    setCircleScore(0);
    setCrossScore(0);
  };

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      let player = itemArray[0];
      manageScore(player);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5]
    ) {
      let player = itemArray[3];
      manageScore(player);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8]
    ) {
      let player = itemArray[6];
      manageScore(player);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6]
    ) {
      let player = itemArray[0];
      manageScore(player);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7]
    ) {
      let player = itemArray[1];
      manageScore(player);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8]
    ) {
      let player = itemArray[2];
      manageScore(player);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8]
    ) {
      let player = itemArray[0];
      manageScore(player);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6]
    ) {
      let player = itemArray[2];
      manageScore(player);
    }
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: "error" });
    }
    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button className="reloadButton" color="success" block onClick={reloadGame}>
                Reload the Game{" "}
              </Button>
            </div>
          ) : (
            <h1
              className={`text-center ${isCross ? "crossIcon" : "circleIcon"}`}
            >
              Play {isCross ? "X" : "O"}
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color="warning" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
      <div className="scoreSection">
        <Points crossScore={crossScore} circleScore={circleScore} />
        <Button className="resetButton" onClick={resetScore}>
          Reset Score
        </Button>
      </div>
    </Container>
  );
};

export default App;
