import React from "react";
import {
  Box,
  HeaderLayout,
  ContentLayout,
  Layout,
} from "@strapi/design-system";
import RestaurantList from "../../components/Table";

const RestaurantPage = () => {
  return (
    <Box background="neutral100">
      <Layout>
        <HeaderLayout title="Restaurant" as="h2" />
        <ContentLayout>
          <RestaurantList />
        </ContentLayout>
      </Layout>
    </Box>
  );
};

export default RestaurantPage;
