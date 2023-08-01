/*
 *
 * RestaurantPAge
 *
 */
import React from "react";
import Layout from "../../components/Layout";
import RestaurantSetup from "../../modules/RestaurantSetup";
import {
  SubNav,
  SubNavHeader,
  SubNavSection,
  SubNavSections,
  SubNavLink,
  SubNavLinkSection,
  Box,
  HeaderLayout,
  ActionLayout,
  ContentLayout,
  Button,
  Tag,
  Table,
  TFooter,
  Thead,
  IconButton,
  Tr,
  Td,
  Flex,
  Tbody,
  Th,
  VisuallyHidden,
  Typography,
  BaseCheckbox,
  Avatar,
  TextInput,
} from "@strapi/design-system";
import {
  ExclamationMarkCircle,
  Apps,
  Plus,
  Pencil,
  Trash,
} from "@strapi/icons";
const { Title, Text } = Typography;

const RestaurantPage = () => {
  const links = [
    {
      id: 1,
      label: "Restaurant Details",
      icon: <ExclamationMarkCircle />,
      to: "/address",
    },
    {
      id: 2,
      label: "Number Of Employees",
      to: "/category",
    },
    {
      id: 3,
      label: "Key Personnel Responsible",
      icon: <Apps />,
      to: "/city",
      active: true,
    },
    {
      id: 4,
      label: "Operating Hour",
      to: "/country",
    },
    {
      id: 5,
      label: "Image Attachment",
      to: "/country",
    },
    {
      id: 6,
      label: "Document Submission",
      to: "/country",
    },
    {
      id: 7,
      label: "Cleanliness",
      to: "/country",
    },
  ];
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
      <Layout
      // sideNav={
      //   <SubNav ariaLabel="Restaurant">
      //     <SubNavHeader
      //       searchable
      //       value=""
      //       onClear={() => {}}
      //       onChange={() => {}}
      //       label="Restaurant"
      //       searchLabel="Search..."
      //     />
      //     <SubNavSections>
      //       <SubNavSection
      //         label="Collection Type"
      //         collapsable
      //         badgeLabel={links.length.toString()}
      //       >
      //         {links.map((link) => (
      //           <SubNavLink to={link.to} active={link.active} key={link.id}>
      //             {link.label}
      //           </SubNavLink>
      //         ))}
      //       </SubNavSection>
      //       <SubNavSection
      //         label="Single Type"
      //         collapsable
      //         badgeLabel={links.length.toString()}
      //       ></SubNavSection>
      //     </SubNavSections>
      //   </SubNav>
      // }
      >
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

export default RestaurantPage;
