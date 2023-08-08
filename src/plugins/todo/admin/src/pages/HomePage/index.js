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
import TodoTable from "../../components/TodoTable";
import RestaurantList from "../../components/Table";

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

          <ContentLayout>
            {/* <RestaurantDetail /> */}
            {/* <TodoTable /> */}
            <RestaurantList />
          </ContentLayout>
        </>
      </Layout>
    </Box>
  );
};

export default RestaurantPage;
