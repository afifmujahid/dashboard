import React from "react";
import {
  Box,
  HeaderLayout,
  ContentLayout,
  Layout,
  Card,
  Flex,
} from "@strapi/design-system";
import RestaurantList from "../../components/Table";

const RestaurantPage = () => {
  return (
    <Box background="neutral100">
      <Layout>
        <HeaderLayout title="Restaurant List" as="h2" />
        <ContentLayout>
          <RestaurantList />
        </ContentLayout>
      </Layout>
    </Box>
  );
};

export default RestaurantPage;
