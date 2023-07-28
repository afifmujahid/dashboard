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
        sideNav={
          <SubNav ariaLabel="Restaurant">
            <SubNavHeader
              searchable
              value=""
              onClear={() => {}}
              onChange={() => {}}
              label="Restaurant"
              searchLabel="Search..."
            />
            <SubNavSections>
              <SubNavSection
                label="Collection Type"
                collapsable
                badgeLabel={links.length.toString()}
              >
                {links.map((link) => (
                  <SubNavLink to={link.to} active={link.active} key={link.id}>
                    {link.label}
                  </SubNavLink>
                ))}
              </SubNavSection>
              <SubNavSection
                label="Single Type"
                collapsable
                badgeLabel={links.length.toString()}
              >
                {/* <SubNavLinkSection label="Default">
                  {links.map((link) => (
                    <SubNavLink to={link.to} key={link.id}>
                      {link.label}
                    </SubNavLink>
                  ))}
                </SubNavLinkSection> */}
              </SubNavSection>
            </SubNavSections>
          </SubNav>
        }
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
            subtitle="36 entries found"
            as="h2"
          />
          {/* <ActionLayout
            startActions={
              <>
                {Array(20)
                  .fill(null)
                  .map((_, index) => (
                    <Box paddingTop={2} key={index}>
                      <Tag key={index} icon={<Plus aria-hidden />}>
                        Hello world {index}
                      </Tag>
                    </Box>
                  ))}
              </>
            }
            endActions={
              <>
                <Button size="M" variant="tertiary">
                  Settings
                </Button>
                <Button size="M" variant="tertiary">
                  Settings
                </Button>
              </>
            }
          /> */}
          <ContentLayout>
            <Table
              colCount={COL_COUNT}
              rowCount={ROW_COUNT}
              footer={
                <TFooter icon={<Plus />}>
                  Add another field to this collection type
                </TFooter>
              }
            >
              <Thead>
                <Tr>
                  <Th>
                    <BaseCheckbox aria-label="Select all entries" />
                  </Th>
                  <Th>
                    <Typography variant="sigma">ID</Typography>
                  </Th>
                  <Th>
                    <Typography variant="sigma">Cover</Typography>
                  </Th>
                  <Th>
                    <Typography variant="sigma">Description</Typography>
                  </Th>
                  <Th>
                    <Typography variant="sigma">Categories</Typography>
                  </Th>
                  <Th>
                    <Typography variant="sigma">Contact</Typography>
                  </Th>
                  <Th>More</Th>
                  <Th>More</Th>
                  <Th>More</Th>
                  <Th>
                    <VisuallyHidden>Actions</VisuallyHidden>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {entries.map((entry) => (
                  <Tr key={entry.id}>
                    <Td>
                      <BaseCheckbox aria-label={`Select ${entry.contact}`} />
                    </Td>
                    <Td>
                      <Typography textColor="neutral800">{entry.id}</Typography>
                    </Td>
                    <Td>
                      <Avatar src={entry.cover} alt={entry.contact} />
                    </Td>
                    <Td>
                      <Typography textColor="neutral800">
                        {entry.description}
                      </Typography>
                    </Td>
                    <Td>
                      <Typography textColor="neutral800">
                        {entry.category}
                      </Typography>
                    </Td>
                    <Td>
                      <Typography textColor="neutral800">
                        {entry.contact}
                      </Typography>
                    </Td>
                    <Td>
                      <Typography textColor="neutral800">
                        {entry.description}
                      </Typography>
                    </Td>
                    <Td>
                      <Typography textColor="neutral800">
                        {entry.description}
                      </Typography>
                    </Td>
                    <Td>
                      <Typography textColor="neutral800">
                        {entry.description}
                      </Typography>
                    </Td>
                    <Td>
                      <Flex>
                        <IconButton
                          onClick={() => console.log("edit")}
                          label="Edit"
                          icon={<Pencil />}
                        />
                        <Box paddingLeft={1}>
                          <IconButton
                            onClick={() => console.log("edit")}
                            label="Delete"
                            icon={<Trash />}
                          />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ContentLayout>
        </>
      </Layout>
    </Box>
  );
};

export default RestaurantPage;
