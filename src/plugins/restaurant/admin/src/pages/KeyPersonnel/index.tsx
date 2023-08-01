/*
 *
 * RestaurantPAge
 *
 */
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import NextLink from "next/link";
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
  Link,
  EmptyStateLayout,
  GridLayout,
  TextInput,
  SingleSelect,
  SingleSelectOption,
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
import { TimePicker } from "antd";

// import TodoModal from "../../components/TodoModal";
// import TodoCount from "../../components/TodoCount";
// import TodoTable from "../../components/TodoTable";
const { Title, Text } = Typography;

const KeyPersonnel = () => {
  const history = useHistory();

  const handleSetupClick = () => {
    history.push(`/plugins/myRestaurantPlugin/setup`);
  };

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
  const [statusValue, setStatusValue] = useState();
  const [businessTypeValue, setBusinessTypeValue] = useState();
  const [industryTypeValue, setIndustryTypeValue] = useState();
  const [productMarketValue, setProductMarketValue] = useState();
  const [value, setValue] = useState<Dayjs | null>(null);

  const handleDateChange = (time: Dayjs | null, timestring: string) => {
    setValue(time);
  };
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
      //           <SubNavLink to={link.to} key={link.id}>
      //             {link.label}
      //           </SubNavLink>
      //         ))}
      //       </SubNavSection>
      //       <SubNavSection
      //         label="Single Type"
      //         collapsable
      //         // badgeLabel={links.length.toString()}
      //       >
      //         {/* <SubNavLinkSection label="Default">
      //           {links.map((link) => (
      //             <SubNavLink to={link.to} key={link.id}>
      //               {link.label}
      //             </SubNavLink>
      //           ))}
      //         </SubNavLinkSection> */}
      //       </SubNavSection>
      //     </SubNavSections>
      //   </SubNav>
      // }
      >
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
            <Box padding={8} background="neutral0">
              <GridLayout>
                <Box>
                  <div style={{ display: "flex", gap: "16px" }}>
                    <TextInput label="name" />
                    <TextInput label="position" />
                  </div>
                  <div
                    style={{ display: "flex", gap: "16px", marginTop: "16px" }}
                  >
                    <TextInput label="email" />
                    <TextInput label="phone" />
                  </div>
                  <div
                    style={{ display: "flex", gap: "16px", marginTop: "16px" }}
                  >
                    <TimePicker value={value} onChange={handleDateChange} />
                    <TimePicker value={value} onChange={handleDateChange} />
                  </div>
                  <div
                    style={{ display: "flex", gap: "16px", marginTop: "16px" }}
                  >
                    <TextInput label="restaurant" />
                  </div>
                </Box>
              </GridLayout>
            </Box>
          </ContentLayout>
        </>
      </Layout>
    </Box>
  );
};

export default KeyPersonnel;
