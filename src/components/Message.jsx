import React from "react";

const Message = ({ message }) => {
  return (
    <p className="text-center text-gray-500 dark:text-gray-400">{message}</p>
  );
};

export default Message;
