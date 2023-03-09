import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icon circleIcon" />;
    case "cross":
      return <FaTimes className="icon crossIcon" />;
    default:
      return <FaPen className="icon penIcon" />;
  }
};

export default Icon;
