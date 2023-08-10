import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
import { ContentLayout, Typography, Checkbox } from "@strapi/design-system";

const Cleanliness = ({ restaurantId }) => {
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

  const renderCheckbox = (data) => {
    if (data) {
      return (
        <Checkbox
          checked
          style={{ backgroundColor: "#004e5a", borderColor: "#004e5a" }}
        />
      );
    } else {
      return <Checkbox />;
    }
  };
  return (
    <div
      style={{
        display: "grid",
        rowGap: "16px",
        gap: "16px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {renderCheckbox(todoData?.officerInCharge)}
        <Typography>
          The room shall be kept clean and well maintained including:{" "}
          {todoData?.officerInCharge}
        </Typography>
      </div>
      <div style={{ marginLeft: "24px", rowGap: "16px", display: "grid" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {renderCheckbox(todoData?.name)}
          <Typography>Dry Kitchen : {todoData?.name}</Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {renderCheckbox(todoData?.registrationName)}
          <Typography>Dining Area : {todoData?.registrationName}</Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {renderCheckbox(todoData?.registrationNo)}
          <Typography>
            Storage place for dry cooking ingredients and frozen :{" "}
            {todoData?.registrationNo}
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {renderCheckbox(todoData?.status)}
          <Typography>Male & Female Toilet : {todoData?.status}</Typography>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {renderCheckbox(todoData?.address)}
        <Typography>
          The washroom shall be equipped with: : {todoData?.address}
        </Typography>
      </div>
      <div style={{ marginLeft: "24px", rowGap: "16px", display: "grid" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {renderCheckbox(todoData?.district)}
          <Typography>Water Pipe & Hose : {todoData?.district}</Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {renderCheckbox(todoData?.latitude)}
          <Typography>Sink : {todoData?.latitude}</Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {renderCheckbox(todoData?.longitude)}
          <Typography>Tissue / Hand Dryer : {todoData?.longitude}</Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {renderCheckbox(todoData?.postcode)}
          <Typography>Dustbin : {todoData?.postcode}</Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {renderCheckbox(todoData?.city)}
          <Typography>Sanitary Bin : {todoData?.city}</Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {renderCheckbox(todoData?.state)}
          <Typography>Soap & Hand Sanitizer : {todoData?.state}</Typography>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {renderCheckbox(todoData?.phone)}
        <Typography>
          The washroom floor shall be kept clean : {todoData?.phone}
        </Typography>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {renderCheckbox(todoData?.email)}
        <Typography>
          Cleanliness of food handling & cooking utensils : {todoData?.email}
        </Typography>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {renderCheckbox(todoData?.numberOfShift)}
        <Typography>
          Handling waste material properly : {todoData?.numberOfShift}
        </Typography>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {renderCheckbox(todoData?.revenue)}
        <Typography>
          Employees with proper practice personal care & hygiene :{" "}
          {todoData?.revenue}
        </Typography>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {renderCheckbox(todoData?.businessType)}
        <Typography>
          Engagement with pest control services : {todoData?.businessType}
        </Typography>
      </div>
    </div>
  );
};

export default Cleanliness;
