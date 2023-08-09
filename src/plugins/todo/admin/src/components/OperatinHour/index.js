import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
import { ContentLayout } from "@strapi/design-system";
import { Typography } from "@strapi/design-system";

const OperatingHour = ({ restaurantId }) => {
  const [todoData, setTodoData] = useState(null);
  const selectedRestaurant = restaurantId;

  useEffect(() => {
    async function fetchRestaurantDetails() {
      try {
        const todo = await todoRequests.getOneTodo(selectedRestaurant);
        setTodoData(todo);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    }
    fetchRestaurantDetails();
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
      <Typography variant="omega" fontWeight="semiBold">
        From
      </Typography>
      <Typography variant="omega" fontWeight="semiBold">
        To
      </Typography>
      <Typography variant="omega" fontWeight="semiBold">
        Sunday
      </Typography>
      <Typography className="font-semibold">
        Sunday From: {todoData?.name}
      </Typography>
      <Typography className="font-semibold">
        Sunday To: {todoData?.name}
      </Typography>
      <Typography variant="omega" fontWeight="semiBold">
        Monday
      </Typography>
      <Typography className="font-semibold">
        Monday From: {todoData?.name}
      </Typography>
      <Typography className="font-semibold">
        Monday To: {todoData?.name}
      </Typography>
      <Typography variant="omega" fontWeight="semiBold">
        Tuesday
      </Typography>
      <Typography className="font-semibold">
        Tuesday From: {todoData?.name}
      </Typography>
      <Typography className="font-semibold">
        Tuesday To: {todoData?.name}
      </Typography>
      <Typography variant="omega" fontWeight="semiBold">
        Wednesday
      </Typography>
      <Typography className="font-semibold">Wednesday From:</Typography>
      <Typography className="font-semibold">Wednesday To:</Typography>
      <Typography variant="omega" fontWeight="semiBold">
        Thursday
      </Typography>
      <Typography className="font-semibold">Thursday From:</Typography>
      <Typography className="font-semibold">Thursday To:</Typography>
      <Typography variant="omega" fontWeight="semiBold">
        Friday
      </Typography>
      <Typography className="font-semibold">Friday From:</Typography>
      <Typography className="font-semibold">Friday To:</Typography>
      <Typography variant="omega" fontWeight="semiBold">
        Saturday
      </Typography>
      <Typography className="font-semibold">Saturday From:</Typography>
      <Typography className="font-semibold">Saturday To:</Typography>
    </div>
  );
};

export default OperatingHour;
