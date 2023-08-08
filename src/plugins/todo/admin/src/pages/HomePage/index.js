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
import RestaurantDetail from "../../components/RestaurantDetail";

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
    <Box background="neutral100">
      <Layout>
        <>
          <HeaderLayout title="Restaurant" as="h2" />
          <Box
            background="neutral0"
            hasRadius={true}
            shadow="filterShadow"
            padding={8}
            style={{ marginTop: "10px" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                rowGap: "16px",
                gap: "16px",
              }}
            >
              <Card
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "20px",
                  backgroundColor: "#004e5a",
                  color: "white",
                }}
                // id={todo.id}
                // onClick={() => handleCardClick(todo)}
              ></Card>
              <ContentLayout>
                <RestaurantDetail />
              </ContentLayout>
            </div>
          </Box>
        </>
      </Layout>
    </Box>
  );
};

export default RestaurantPage;
