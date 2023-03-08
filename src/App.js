import "./App.css";
import Icon from "./components/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import { useState } from "react";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {

  }

  const checkIsWinner = () => {

  }

  const changeItem = itemNumber => {
    
  }


  return <Icon />;
};

export default App;
