import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
import { Typography, Checkbox } from "@strapi/design-system";
import { useCleanliness } from "./constant";
const Cleanliness = ({ restaurantId }) => {
  const [todoData, setTodoData] = useState(null);
  const selectedRestaurant = restaurantId;
  const CLEANLINESS_CHECKLIST = useCleanliness(todoData);
  const [isSubItemsChecked, setIsSubItemsChecked] = useState(false);

  useEffect(() => {
    async function fetchCleanliness() {
      try {
        const todo = await todoRequests.getOneTodo(selectedRestaurant);
        setTodoData(todo);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    }
    fetchCleanliness();
  }, [selectedRestaurant]);

  const renderCheckbox = (data) => {
    if (data) {
      return (
        <Checkbox
          checked={true}
          style={{ backgroundColor: "#004e5a", borderColor: "#004e5a" }}
        />
      );
    } else {
      return <Checkbox checked={false} />;
    }
  };
  return (
    <div style={{ display: "grid", rowGap: "16px", gap: "16px" }}>
      {CLEANLINESS_CHECKLIST.map((item, index) => (
        <div key={index}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {renderCheckbox(item.data)}
            <Typography>
              {item.label} {item.data}
            </Typography>
          </div>
          {item.subItems && (
            <div
              style={{ marginLeft: "24px", display: "grid", rowGap: "16px" }}
            >
              {item.subItems.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {renderCheckbox(subItem.data)}
                  <Typography>
                    {subItem.label} {subItem.data}
                  </Typography>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cleanliness;
