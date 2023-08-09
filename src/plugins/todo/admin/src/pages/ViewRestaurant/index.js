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
import EmployeeNumber from "../../components/EmployeeNumber";

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
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
            <Card
              style={{
                display: "grid",
                rowGap: "16px",
                width: "48px",
                height: "48px",
                borderRadius: "10px",
                backgroundColor: "#004e5a",
                color: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              1
            </Card>
            <ContentLayout>
              <EmployeeNumber restaurantId={restaurantId}></EmployeeNumber>
            </ContentLayout>
          </div>
        </Box>
      </Layout>
    </Box>
  );
};

export default ViewRestaurant;
