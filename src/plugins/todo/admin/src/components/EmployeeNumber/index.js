import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
import { Typography } from "@strapi/design-system/Typography";

const EmployeeNumber = ({ restaurantId }) => {
  const [todoData, setTodoData] = useState(null);
  const selectedRestaurant = restaurantId;

  useEffect(() => {
    async function fetchEmployeeNumbers() {
      try {
        const todo = await todoRequests.getOneTodo(selectedRestaurant);
        setTodoData(todo);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    }
    fetchEmployeeNumbers();
  }, [selectedRestaurant]);

  const cellStyle = {
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    padding: "8px",
  };

  const headerCellStyle = {
    ...cellStyle,
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        borderLeft: "1px solid black",
        borderTop: "1px solid black",
      }}
    >
      <div style={headerCellStyle}></div>
      <Typography style={headerCellStyle} fontWeight="semiBold">
        Management
      </Typography>
      <Typography style={headerCellStyle} fontWeight="semiBold">
        Production
      </Typography>
      <Typography style={headerCellStyle} fontWeight="semiBold">
        Muslim
      </Typography>
      <Typography style={cellStyle}>{todoData?.officerInCharge}</Typography>
      <Typography style={cellStyle}>{todoData?.name}</Typography>
      <Typography style={headerCellStyle} fontWeight="semiBold">
        Non-Muslim
      </Typography>
      <Typography style={cellStyle}>{todoData?.registrationName}</Typography>
      <Typography style={cellStyle}>{todoData?.registrationNo}</Typography>
    </div>
  );
};

export default EmployeeNumber;
