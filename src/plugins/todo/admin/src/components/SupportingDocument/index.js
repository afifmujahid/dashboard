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
    async function fetchSupportingDocument() {
      try {
        const todo = await todoRequests.getOneTodo(selectedRestaurant);
        setTodoData(todo);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    }
    fetchSupportingDocument();
  }, [selectedRestaurant]);

  const documents = [
    {
      fileName: "Company Registeration Certificate",
      subtitle: "Company Registeration Certificate",
    },
    {
      fileName: "Business License",
      subtitle: "Business License",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        rowGap: "16px",
        gap: "16px",
      }}
    >
      {documents.map((document, index) => (
        <Card
          key={index}
          style={{
            width: "240px",
          }}
          id={`document-${index}`}
        >
          <CardBody>
            <CardContent paddingLeft={2}>
              <CardTitle>File Name</CardTitle>
              <CardSubtitle>{document.subtitle}</CardSubtitle>
            </CardContent>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default SupportingDocument;
