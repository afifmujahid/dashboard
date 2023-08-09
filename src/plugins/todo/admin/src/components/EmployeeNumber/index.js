import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
import {
  Box,
  HeaderLayout,
  ContentLayout,
  Layout,
} from "@strapi/design-system";
import { Typography } from "@strapi/design-system/Typography";

const EmployeeNumber = ({ location }) => {
  const [todoData, setTodoData] = useState(null);
  const selectedRestaurant = location.state.todo.id;
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <Box background="neutral100">
      <Layout>
        <HeaderLayout title="Number Of Employee" as="h2" />
        <Box
          background="neutral0"
          hasRadius={true}
          shadow="filterShadow"
          padding={8}
          style={{ marginTop: "10px" }}
        >
          <ContentLayout>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                rowGap: "16px",
                gap: "16px",
              }}
            >
              <Typography>
                Muslim Management : {todoData?.officerInCharge}
              </Typography>
              <Typography>Muslim Production : {todoData?.name}</Typography>
              <Typography>
                Non-Muslim Management : {todoData?.registrationName}
              </Typography>
              <Typography>
                Non-Muslim Production : {todoData?.registrationNo}
              </Typography>
              {/* <Typography>Company Status : {todoData?.status}</Typography>
              <Typography>Company Address : {todoData?.address}</Typography>
              <Typography>District : {todoData?.district}</Typography>
              <Typography>Latitude : {todoData?.latitude}</Typography>
              <Typography>Longitude : {todoData?.longitude}</Typography>
              <Typography>Postcode : {todoData?.postcode}</Typography>
              <Typography>City : {todoData?.city}</Typography>
              <Typography>State : {todoData?.state}</Typography>
              <Typography>Phone Number : {todoData?.phone}</Typography>
              <Typography>Email : {todoData?.email}</Typography>
              <Typography>
                Number of Shifts : {todoData?.numberOfShift}
              </Typography>
              <Typography>
                Annual Sales Revenue RM : {todoData?.revenue}
              </Typography>
              <Typography>Business Type : {todoData?.businessType}</Typography>
              <Typography>
                Type of Industry : {todoData?.industryType}
              </Typography>
              <Typography>
                Product Market : {todoData?.productMarket}
              </Typography> */}
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
          </ContentLayout>
        </Box>
      </Layout>
    </Box>
  );
};

export default EmployeeNumber;
