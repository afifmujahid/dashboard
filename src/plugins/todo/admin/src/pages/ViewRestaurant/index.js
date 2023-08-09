import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
import {
  Box,
  HeaderLayout,
  ContentLayout,
  Layout,
  Card,
} from "@strapi/design-system";
import { Typography } from "@strapi/design-system/Typography";
import RestaurantDetail from "../../components/RestaurantDetail";

const ViewRestaurant = ({ location }) => {
  const restaurantId = location.state.todo.id;

  return (
    <Box background="neutral100">
      <Layout>
        <HeaderLayout title="View Restaurant" as="h2" />
        <Box
          background="neutral0"
          hasRadius={true}
          shadow="filterShadow"
          padding={8}
          style={{ marginTop: "10px" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "400px 1fr" }}>
            <Card
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                rowGap: "16px",
                width: "100px",
                height: "100px",
                borderRadius: "20px",
                backgroundColor: "#004e5a",
                color: "white",
              }}
            ></Card>
            <ContentLayout>
              <RestaurantDetail restaurantId={restaurantId}></RestaurantDetail>
            </ContentLayout>
          </div>
        </Box>
      </Layout>
    </Box>
  );
};

export default ViewRestaurant;
