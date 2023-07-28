/*
 *
 * RestaurantPAge
 *
 */
import { Typography } from "antd";
import React from "react";
import Layout from "../../components/Layout";
import RestaurantSetup from "../../modules/RestaurantSetup";

const { Title, Text } = Typography;

const RestaurantPage = () => {
  return (
    <Layout title="Restaurant">
      {/* <Text>Testing</Text> */}
      <RestaurantSetup />
    </Layout>
  );
};

export default RestaurantPage;
