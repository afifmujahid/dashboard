import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
import {
  Card,
  CardHeader,
  Box,
  HeaderLayout,
  ContentLayout,
  Button,
  Typography,
  Layout,
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@strapi/design-system";

const RestaurantDetail = () => {
  const [todoData, setTodoData] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedRestaurant(null);
    setIsModalOpen(false);
  };

  const handleAuditStatusChange = async (event) => {
    const updatedRestaurant = {
      ...selectedRestaurant,
      auditStatus: event.target.value,
    };

    try {
      await todoRequests.editTodo(selectedRestaurant.id, updatedRestaurant);
      setSelectedRestaurant(updatedRestaurant);
      const todos = await todoRequests.getAllTodos();
      setTodoData(todos);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };
  useEffect(() => {
    async function fetchTodos() {
      try {
        const todos = await todoRequests.getAllTodos();
        setTodoData(todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }
    fetchTodos();
  }, []);

  return (
    <div>
      {/* <Box
        background="neutral0"
        hasRadius={true}
        shadow="filterShadow"
        padding={8}
        style={{ marginTop: "10px" }}
      > */}
      <ContentLayout>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            rowGap: "16px",
            gap: "16px",
          }}
        >
          {todoData.map((todo) => (
            <React.Fragment key={todo.id}>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                }}
              >
                <Card
                  style={{
                    width: "300px",
                    height: "200px",
                    borderRadius: "20px",
                    backgroundColor: "#004e5a",
                    color: "white",
                  }}
                  id={todo.id}
                  onClick={() => handleCardClick(todo)}
                >
                  <CardHeader
                    style={{
                      width: "300px",
                      height: "200px",
                    }}
                  >
                    <Typography
                      fontWeight="bold"
                      variant="beta"
                      style={{ color: "white" }}
                    >
                      {todo.name}
                    </Typography>
                  </CardHeader>
                </Card>
              </div>
            </React.Fragment>
          ))}
        </div>
      </ContentLayout>
      {selectedRestaurant && (
        <ModalLayout onClose={handleCloseModal}>
          <ModalHeader>
            <Typography>{selectedRestaurant.name}</Typography>
          </ModalHeader>
          <ModalBody
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
          >
            <Typography>
              MFW Officer In Charge : {selectedRestaurant.officerInCharge}
            </Typography>
            <Typography>Trade Name : {selectedRestaurant.name}</Typography>
            <Typography>
              Business Registration Name : {selectedRestaurant.registrationName}
            </Typography>
            <Typography>
              Company Registration No : {selectedRestaurant.registrationNo}
            </Typography>
            <Typography>
              Company Status : {selectedRestaurant.status}
            </Typography>
            <Typography>
              Company Address : {selectedRestaurant.address}
            </Typography>
            <Typography>District : {selectedRestaurant.district}</Typography>
            <Typography>Latitude : {selectedRestaurant.latitude}</Typography>
            <Typography>Longitude : {selectedRestaurant.longitude}</Typography>
            <Typography>Postcode : {selectedRestaurant.postcode}</Typography>
            <Typography>City : {selectedRestaurant.city}</Typography>
            <Typography>State : {selectedRestaurant.state}</Typography>
            <Typography>Phone Number : {selectedRestaurant.phone}</Typography>
            <Typography>Email : {selectedRestaurant.email}</Typography>
            <Typography>
              Number of Shifts : {selectedRestaurant.numberOfShift}
            </Typography>
            <Typography>
              Annual Sales Revenue RM : {selectedRestaurant.revenue}
            </Typography>
            <Typography>
              Business Type : {selectedRestaurant.businessType}
            </Typography>
            <Typography>
              Type of Industry : {selectedRestaurant.industryType}
            </Typography>
            <Typography>
              Product Market : {selectedRestaurant.productMarket}
            </Typography>
            <Typography>
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
            </Typography>
          </ModalBody>
          <ModalFooter
            endActions={
              <>
                <Button
                  style={{
                    backgroundColor: "#004e5a",
                  }}
                  onClick={handleCloseModal}
                >
                  Close
                </Button>
              </>
            }
          />
        </ModalLayout>
      )}
      {/* </Box> */}
    </div>
  );
};

export default RestaurantDetail;
