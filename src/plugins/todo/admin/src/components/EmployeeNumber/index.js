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

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        rowGap: "16px",
        gap: "16px",
      }}
    >
      <div />
      <Typography fontWeight="semiBold">Management</Typography>
      <Typography fontWeight="semiBold">Production</Typography>
      <Typography fontWeight="semiBold">Muslim</Typography>
      <Typography>Muslim Management: {todoData?.officerInCharge}</Typography>
      <Typography>Muslim Production: {todoData?.name}</Typography>
      <Typography fontWeight="semiBold">Non-Muslim</Typography>
      <Typography>
        Non-Muslim Management: {todoData?.registrationName}
      </Typography>
      <Typography>Non-Muslim Production: {todoData?.registrationNo}</Typography>
    </div>
  );
};

export default EmployeeNumber;
