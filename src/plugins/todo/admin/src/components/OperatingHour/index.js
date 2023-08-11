import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
import { Typography } from "@strapi/design-system";

const OperatingHour = ({ restaurantId }) => {
  const [todoData, setTodoData] = useState(null);
  const selectedRestaurant = restaurantId;

  useEffect(() => {
    async function fetchOperatingHour() {
      try {
        const todo = await todoRequests.getOneTodo(selectedRestaurant);
        setTodoData(todo);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    }
    fetchOperatingHour();
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
      <Typography fontWeight="semiBold">From</Typography>
      <Typography fontWeight="semiBold">To</Typography>
      <Typography fontWeight="semiBold">Sunday</Typography>
      <Typography>{todoData?.name}</Typography>
      <Typography>{todoData?.registrationName}</Typography>
      <Typography fontWeight="semiBold">Monday</Typography>
      <Typography>{todoData?.status}</Typography>
      <Typography>{todoData?.district}</Typography>
      <Typography fontWeight="semiBold">Tuesday</Typography>
      <Typography>{todoData?.latitude}</Typography>
      <Typography>{todoData?.longitude}</Typography>
      <Typography fontWeight="semiBold">Wednesday</Typography>
      <Typography></Typography>
      <Typography></Typography>
      <Typography fontWeight="semiBold">Thursday</Typography>
      <Typography></Typography>
      <Typography></Typography>
      <Typography fontWeight="semiBold">Friday</Typography>
      <Typography></Typography>
      <Typography></Typography>
      <Typography fontWeight="semiBold">Saturday</Typography>
      <Typography></Typography>
      <Typography></Typography>
    </div>
  );
};

export default OperatingHour;
