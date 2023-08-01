/*
 *
 * RestaurantPAge
 *
 */
import React from "react";
import Layout from "../../components/Layout";
import {
  Box,
  HeaderLayout,
  ContentLayout,
  Button,
  Typography,
  TextInput,
} from "@strapi/design-system";
import { Plus, Pencil } from "@strapi/icons";
const { Title, Text } = Typography;

const RestaurantSetup = () => {
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
  return (
    <Box background="neutral100">
      <Layout>
        <>
          <HeaderLayout
            primaryAction={<Button startIcon={<Plus />}>Add an entry</Button>}
            secondaryAction={
              <Button variant="tertiary" startIcon={<Pencil />}>
                Edit
              </Button>
            }
            title="Restaurant"
            as="h2"
          />
          <ContentLayout>
            <div style={{ display: "flex", gap: "16px" }}>
              <TextInput label="officerInCharge" />
              <TextInput label="name" />
            </div>
            <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
              <TextInput label="registrationName" />
              <TextInput label="registrationNo" />
            </div>
          </ContentLayout>
        </>
      </Layout>
    </Box>
  );
};

export default RestaurantSetup;
