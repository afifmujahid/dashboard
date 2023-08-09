import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
import { ContentLayout } from "@strapi/design-system";
import { Typography } from "@strapi/design-system/Typography";

const RestaurantDetail = ({ restaurantId }) => {
  const [todoData, setTodoData] = useState(null);
  const selectedRestaurant = restaurantId;

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
      <Typography>
        MFW Officer In Charge : {todoData?.officerInCharge}
      </Typography>
      <Typography>Trade Name : {todoData?.name}</Typography>
      <Typography>
        Business Registration Name : {todoData?.registrationName}
      </Typography>
      <Typography>
        Company Registration No : {todoData?.registrationNo}
      </Typography>
      <Typography>Company Status : {todoData?.status}</Typography>
      <Typography>Company Address : {todoData?.address}</Typography>
      <Typography>District : {todoData?.district}</Typography>
      <Typography>Latitude : {todoData?.latitude}</Typography>
      <Typography>Longitude : {todoData?.longitude}</Typography>
      <Typography>Postcode : {todoData?.postcode}</Typography>
      <Typography>City : {todoData?.city}</Typography>
      <Typography>State : {todoData?.state}</Typography>
      <Typography>Phone Number : {todoData?.phone}</Typography>
      <Typography>Email : {todoData?.email}</Typography>
      <Typography>Number of Shifts : {todoData?.numberOfShift}</Typography>
      <Typography>Annual Sales Revenue RM : {todoData?.revenue}</Typography>
      <Typography>Business Type : {todoData?.businessType}</Typography>
      <Typography>Type of Industry : {todoData?.industryType}</Typography>
      <Typography>Product Market : {todoData?.productMarket}</Typography>
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
