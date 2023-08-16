import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
import {
  Typography,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
} from "@strapi/design-system";

const OperatingHour = ({ restaurantId }) => {
  const [todoData, setTodoData] = useState(null);
  const selectedRestaurant = restaurantId;

  useEffect(() => {
    async function fetchOperatingHour() {
      try {
        const todo = await todoRequests.getOneTodo(selectedRestaurant);
        setTodoData(todo);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    }
    fetchOperatingHour();
  }, [selectedRestaurant]);

  const cellStyle = {
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    padding: "8px",
  };

  const headerCellStyle = {
    ...cellStyle,
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        borderLeft: "1px solid black",
        borderTop: "1px solid black",
      }}
    >
      <div style={headerCellStyle}></div>

      <Typography style={headerCellStyle} fontWeight="semiBold">
        From
      </Typography>
      <Typography style={headerCellStyle} fontWeight="semiBold">
        To
      </Typography>
      <Typography style={cellStyle} fontWeight="semiBold">
        Sunday
      </Typography>
      <Typography style={cellStyle}>{todoData?.name}</Typography>
      <Typography style={cellStyle}>{todoData?.registrationName}</Typography>
      <Typography style={cellStyle} fontWeight="semiBold">
        Monday
      </Typography>
      <Typography style={cellStyle}>{todoData?.status}</Typography>
      <Typography style={cellStyle}>{todoData?.district}</Typography>
      <Typography style={cellStyle} fontWeight="semiBold">
        Tuesday
      </Typography>
      <Typography style={cellStyle}>{todoData?.latitude}</Typography>
      <Typography style={cellStyle}>{todoData?.longitude}</Typography>
      <Typography style={cellStyle} fontWeight="semiBold">
        Wednesday
      </Typography>
      <Typography style={cellStyle}></Typography>
      <Typography style={cellStyle}></Typography>
      <Typography style={cellStyle} fontWeight="semiBold">
        Thursday
      </Typography>
      <Typography style={cellStyle}></Typography>
      <Typography style={cellStyle}></Typography>
      <Typography style={cellStyle} fontWeight="semiBold">
        Friday
      </Typography>
      <Typography style={cellStyle}></Typography>
      <Typography style={cellStyle}></Typography>
      <Typography style={cellStyle} fontWeight="semiBold">
        Saturday
      </Typography>
      <Typography style={cellStyle}></Typography>
      <Typography style={cellStyle}></Typography>
    </div>
  );
};

export default OperatingHour;
