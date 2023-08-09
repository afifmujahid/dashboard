import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
import {
  Box,
  HeaderLayout,
  ContentLayout,
  Layout,
} from "@strapi/design-system";
import { Typography } from "@strapi/design-system/Typography";
import RestaurantDetail from "../../components/RestaurantDetail";

const ViewRestaurant = ({ location }) => {
  const selectedRestaurant = location.state.todo.id;

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
          <ContentLayout>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                rowGap: "16px",
                gap: "16px",
              }}
            >
              <RestaurantDetail
                restaurantId={selectedRestaurant}
              ></RestaurantDetail>
            </div>
          </ContentLayout>
        </Box>
      </Layout>
    </Box>
  );
};

export default ViewRestaurant;
