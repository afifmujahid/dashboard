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
import { Plus, Pencil, Trash } from "@strapi/icons";

const RestaurantPage = () => {
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

  useEffect(() => {
    async function fetchTodos() {
      try {
        const todos = await todoRequests.getAllTodos();
        console.log("Fetched todos:", todos); // For debugging purposes
        setTodoData(todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }
    fetchTodos();
  }, []);

  return (
    <Box background="neutral100">
      <Layout>
        <>
          <HeaderLayout
            primaryAction={
              <Button startIcon={<Plus />}>Create an entry</Button>
            }
            title="Restaurant"
            as="h2"
          />
          <ContentLayout>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                rowGap: "16px",
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
                        <Typography fontWeight="bold" variant="beta">
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
                  Business Registration Name :{" "}
                  {selectedRestaurant.registrationName}
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
                <Typography>
                  District : {selectedRestaurant.district}
                </Typography>
                <Typography>
                  Latitude : {selectedRestaurant.latitude}
                </Typography>
                <Typography>
                  Longitude : {selectedRestaurant.longitude}
                </Typography>
                <Typography>
                  Postcode : {selectedRestaurant.postcode}
                </Typography>
                <Typography>City : {selectedRestaurant.city}</Typography>
                <Typography>State : {selectedRestaurant.state}</Typography>
                <Typography>
                  Phone Number : {selectedRestaurant.phone}
                </Typography>
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
              </ModalBody>
              <ModalFooter
                endActions={
                  <>
                    <Button onClick={handleCloseModal}>Close</Button>
                  </>
                }
              />
            </ModalLayout>
          )}
        </>
      </Layout>
    </Box>
  );
};

export default RestaurantPage;
