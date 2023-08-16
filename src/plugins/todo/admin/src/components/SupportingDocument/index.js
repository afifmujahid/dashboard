import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
import {
  Card,
  CardBody,
  CardContent,
  CardTitle,
  CardSubtitle,
} from "@strapi/design-system";
import { useSupportingDocument } from "./constant";

const SupportingDocument = ({ restaurantId }) => {
  const [todoData, setTodoData] = useState(null);
  const selectedRestaurant = restaurantId;
  const SUPPORTING_DOCUMENT = useSupportingDocument(todoData);

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

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        rowGap: "16px",
        gap: "16px",
      }}
    >
      {SUPPORTING_DOCUMENT.map((item, index) => (
        <Card
          key={index}
          style={{
            width: "240px",
          }}
        >
          <CardBody>
            <CardContent paddingLeft={2}>
              <CardTitle>{item.fileName}</CardTitle>
              <CardSubtitle>{item.title}</CardSubtitle>
            </CardContent>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default SupportingDocument;
