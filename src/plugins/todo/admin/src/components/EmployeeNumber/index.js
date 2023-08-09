import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
import { ContentLayout } from "@strapi/design-system";
import { Typography } from "@strapi/design-system/Typography";

const EmployeeNumber = ({ restaurantId }) => {
  const [todoData, setTodoData] = useState(null);
  const selectedRestaurant = restaurantId;
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <ContentLayout>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          rowGap: "16px",
          gap: "16px",
        }}
      >
        <Typography>Muslim Management : {todoData?.officerInCharge}</Typography>
        <Typography>Muslim Production : {todoData?.name}</Typography>
        <Typography>
          Non-Muslim Management : {todoData?.registrationName}
        </Typography>
        <Typography>
          Non-Muslim Production : {todoData?.registrationNo}
        </Typography>
      </div>
    </ContentLayout>
  );
};

export default EmployeeNumber;
