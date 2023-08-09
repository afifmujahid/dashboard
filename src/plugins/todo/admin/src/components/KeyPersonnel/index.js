import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
import { ContentLayout } from "@strapi/design-system";
import { Typography } from "@strapi/design-system/Typography";

const KeyPersonnel = ({ restaurantId }) => {
  const [todoData, setTodoData] = useState(null);
  const selectedRestaurant = restaurantId;

  useEffect(() => {
    async function fetchKeyPersonnels() {
      try {
        const todo = await todoRequests.getOneTodo(selectedRestaurant);
        setTodoData(todo);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    }
    fetchKeyPersonnels();
  }, [selectedRestaurant]);

  return (
    <ContentLayout>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          rowGap: "16px",
          gap: "16px",
        }}
      >
        <Typography>Name : {todoData?.officerInCharge}</Typography>
        <Typography>Position : {todoData?.name}</Typography>
        <Typography>Email : {todoData?.registrationName}</Typography>
        <Typography>Phone : {todoData?.registrationNo}</Typography>
        <Typography>Work From : {todoData?.status}</Typography>
        <Typography>Work To : {todoData?.address}</Typography>
      </div>
    </ContentLayout>
  );
};

export default KeyPersonnel;
