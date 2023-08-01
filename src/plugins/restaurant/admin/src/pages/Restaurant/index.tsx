import React, { useState, useEffect } from "react";
// import Strapi from "strapi-sdk-javascript";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout";
import NextLink from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardCheckbox,
  CardAction,
  CardAsset,
  CardTimer,
  CardContent,
  CardBadge,
  CardTitle,
  CardSubtitle,
  Box,
  HeaderLayout,
  ContentLayout,
  Button,
  Typography,
  EmptyStateLayout,
} from "@strapi/design-system";
import {
  ExclamationMarkCircle,
  Apps,
  Plus,
  Pencil,
  Trash,
} from "@strapi/icons";
import { Illo } from "../../components/lllo";
import RestaurantSetup from "../RestaurantSetup";

// import TodoModal from "../../components/TodoModal";
// import TodoCount from "../../components/TodoCount";
// import TodoTable from "../../components/TodoTable";
const { Title, Text } = Typography;
// const strapi = new Strapi("http://localhost:1337");
const RestaurantPage = () => {
  const history = useHistory();
  const ROW_COUNT = 6;
  const COL_COUNT = 10;
  const entry = {
    cover: "https://avatars.githubusercontent.com/u/3874873?v=4",
    description: "Chez Léon is a human sized Parisian",
    category: "French cuisine",
    contact: "Leon Lafrite",
  };
  const entries = [];
  for (let i = 0; i < 5; i++) {
    entries.push({
      ...entry,
      id: i,
    });
  }
  // const [restaurants, setRestaurants] = useState([]);

  // useEffect(() => {
  //   const fetchRestaurants = async () => {
  //     try {
  //       const response = await strapi.getEntries("restaurants");
  //       setRestaurants(response);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   fetchRestaurants();
  // }, []);
  return (
    <Box background="neutral100">
      <Layout>
        <>
          <HeaderLayout
            primaryAction={
              <Button startIcon={<Plus />}>Create an entry</Button>
            }
            secondaryAction={
              <Button variant="tertiary" startIcon={<Pencil />}>
                Edit
              </Button>
            }
            title="Restaurant"
            subtitle="36 entries found"
            as="h2"
          />
          <ContentLayout>
            <div
              style={{
                display: "flex",
                gap: "16px",
              }}
            >
              <Card
                style={{
                  width: "400px",
                  height: "200px",
                }}
                id="fourth"
              >
                <CardBody>
                  <Box padding={2} background="primary100">
                    <Pencil />
                  </Box>
                  <CardContent paddingLeft={2}>
                    <CardTitle>File name</CardTitle>
                    <CardSubtitle>PNG - 400✕400</CardSubtitle>
                  </CardContent>
                  <CardBadge>Doc</CardBadge>
                </CardBody>
              </Card>
              <Card
                style={{
                  width: "400px",
                  height: "200px",
                }}
                id="fourth"
              >
                <CardBody>
                  <Box padding={2} background="primary100">
                    <Pencil />
                  </Box>
                  <CardContent paddingLeft={2}>
                    <CardTitle>File name</CardTitle>
                    <CardSubtitle>PNG - 400✕400</CardSubtitle>
                  </CardContent>
                  <CardBadge>Doc</CardBadge>
                </CardBody>
              </Card>
              <Card
                style={{
                  width: "400px",
                  height: "200px",
                }}
                id="fourth"
              >
                <CardBody>
                  <Box padding={2} background="primary100">
                    <Pencil />
                  </Box>
                  <CardContent paddingLeft={2}>
                    <CardTitle>File name</CardTitle>
                    <CardSubtitle>PNG - 400✕400</CardSubtitle>
                  </CardContent>
                  <CardBadge>Doc</CardBadge>
                </CardBody>
              </Card>
            </div>
          </ContentLayout>
        </>
      </Layout>
    </Box>
  );
};

export default RestaurantPage;
