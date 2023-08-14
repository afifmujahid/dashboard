import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
import { Typography } from "@strapi/design-system/Typography";
import { useRestaurant } from "./constant";

const RestaurantDetail = ({ restaurantId }) => {
  const [todoData, setTodoData] = useState(null);
  const selectedRestaurant = restaurantId;
  const RESTAURANT_DETAIL = useRestaurant(todoData);

  // const handleAuditStatusChange = async (event) => {
  //   const updatedRestaurant = {
  //     ...selectedRestaurant,
  //     auditStatus: event.target.value,
  //   };

  //   try {
  //     await todoRequests.editTodo(selectedRestaurant.id, updatedRestaurant);
  //     setSelectedRestaurant(updatedRestaurant);
  //     const todos = await todoRequests.getAllTodos();
  //     setTodoData(todos);
  //   } catch (error) {
  //     console.error("Error updating todo:", error);
  //   }
  // };
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
        gridTemplateColumns: "repeat(2, 1fr)",
        rowGap: "16px",
        gap: "16px",
      }}
    >
      {RESTAURANT_DETAIL.map((item, index) => (
        <Typography key={index}>
          <span style={{ fontWeight: "500" }}>{item.label} :</span> {item.value}
        </Typography>
      ))}
      {/* <Typography>
                Audit Status:
                <select
                  value={selectedRestaurant.auditStatus}
                  onChange={handleAuditStatusChange}
                >
                  <option value="PendingRegistration">
                    Pending Registration
                  </option>
                  <option value="RegistrationCompleted">
                    Registration Completed
                  </option>
                  <option value="ReviewDocument">Review Document</option>
                  <option value="AuditInspection">Audit Inspection</option>
                  <option value="Certified">Certified</option>
                </select>
              </Typography> */}
    </div>
  );
};

export default RestaurantDetail;
