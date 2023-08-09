import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
import {
  CarouselInput,
  CarouselSlide,
  CarouselImage,
  CarouselActions,
} from "@strapi/design-system";
import { Typography } from "@strapi/design-system/Typography";

const SupportingImage = ({ restaurantId }) => {
  const [todoData, setTodoData] = useState(null);
  const selectedRestaurant = restaurantId;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleNext = () => {
    setSelectedIndex((current) => (current < 2 ? current + 1 : 0));
  };
  const handlePrevious = () => {
    setSelectedIndex((current) => (current > 0 ? current - 1 : 2));
  };

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
      <CarouselInput
        selectedSlide={selectedIndex}
        label="premises"
        onNext={handleNext}
        onPrevious={handlePrevious}
        previousLabel="Previous slide"
        nextLabel="Next slide"
      >
        <CarouselSlide label="1 of 3 slides">
          <CarouselImage src={"/first.jpg"} alt="First" />
        </CarouselSlide>
        <CarouselSlide label="2 of 3 slides">
          <CarouselImage src={"/second.png"} alt="second" />
        </CarouselSlide>
        <CarouselSlide label="3 of 3 slides">
          <CarouselImage src={"/third.png"} alt="third" />
        </CarouselSlide>
      </CarouselInput>
    </div>
  );
};

export default SupportingImage;
