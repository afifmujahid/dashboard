import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
import {
  Card,
  CardBody,
  CardContent,
  CardTitle,
  CardSubtitle,
} from "@strapi/design-system";

const SupportingDocument = ({ restaurantId }) => {
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
        gridTemplateColumns: "repeat(2, 1fr)",
        rowGap: "16px",
        gap: "16px",
      }}
    >
      <Card
        style={{
          width: "240px",
        }}
        id="fourth"
      >
        <CardBody>
          <CardContent paddingLeft={2}>
            <CardTitle>File Name</CardTitle>
            <CardSubtitle>Company Registeration Certificate</CardSubtitle>
          </CardContent>
        </CardBody>
      </Card>
      <Card
        style={{
          width: "240px",
        }}
        id="fourth"
      >
        <CardBody>
          <CardContent paddingLeft={2}>
            <CardTitle>File Name</CardTitle>
            <CardSubtitle>Business License</CardSubtitle>
          </CardContent>
        </CardBody>
      </Card>
    </div>
  );
};

export default SupportingDocument;
