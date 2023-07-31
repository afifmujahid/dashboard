/*
 *
 * RestaurantDetails
 *
 */
import React, { useState } from "react";
import Layout from "../../components/Layout";
import {
  SubNav,
  SubNavHeader,
  SubNavSection,
  SubNavSections,
  SubNavLink,
  Box,
  HeaderLayout,
  ContentLayout,
  Button,
  Grid,
  Typography,
  GridLayout,
  TextInput,
  SingleSelect,
  SingleSelectOption,
} from "@strapi/design-system";
import { Plus, Pencil } from "@strapi/icons";

const RestaurantDetails = () => {
  const links = [
    {
      id: 1,
      label: "Restaurant Details",
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
      to: "/city",
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
  return (
    <Box background="neutral100">
      <Layout
        sideNav={
          <SubNav ariaLabel="RestaurantDetails">
            <SubNavHeader
              searchable
              value=""
              onClear={() => {}}
              onChange={() => {}}
              label="RestaurantDetails"
              searchLabel="Search..."
            />
            <SubNavSections>
              <SubNavSection
                label="Collection Type"
                collapsable
                badgeLabel={links.length.toString()}
              >
                {links.map((link) => (
                  <SubNavLink to={link.to} key={link.id}>
                    {link.label}
                  </SubNavLink>
                ))}
              </SubNavSection>
              <SubNavSection
                label="Single Type"
                collapsable
                badgeLabel={links.length.toString()}
              ></SubNavSection>
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
            as="h2"
          />
          <ContentLayout>
            <Box background="neutral0">
              <GridLayout>
                <Box>
                  <div style={{ display: "flex", gap: "16px" }}>
                    <TextInput label="officerInCharge" />
                    <TextInput label="name" />
                  </div>
                  <div
                    style={{ display: "flex", gap: "16px", marginTop: "16px" }}
                  >
                    <TextInput label="registrationName" />
                    <TextInput label="registrationNo" />
                  </div>
                  <div
                    style={{ display: "flex", gap: "16px", marginTop: "16px" }}
                  >
                    <SingleSelect
                      label="status"
                      placeholder="Choose Here"
                      onClear={() => {
                        setStatusValue(undefined);
                      }}
                      value={statusValue}
                      onChange={setStatusValue}
                    >
                      <SingleSelectOption value="Bumiputera">
                        Bumiputera
                      </SingleSelectOption>
                      <SingleSelectOption value="Non-Bumiputera">
                        Non-Bumiputera
                      </SingleSelectOption>
                    </SingleSelect>
                    <TextInput label="address" />
                  </div>
                  <div
                    style={{ display: "flex", gap: "16px", marginTop: "16px" }}
                  >
                    <TextInput label="district" />
                    <TextInput label="postcode" />
                  </div>
                  <div
                    style={{ display: "flex", gap: "16px", marginTop: "16px" }}
                  >
                    <TextInput label="city" />
                    <TextInput label="state" />
                  </div>
                  <div
                    style={{ display: "flex", gap: "16px", marginTop: "16px" }}
                  >
                    <TextInput label="latitude" />
                    <TextInput label="longitude" />
                  </div>
                  <div
                    style={{ display: "flex", gap: "16px", marginTop: "16px" }}
                  >
                    <TextInput label="phone" />
                    <TextInput label="email" />
                  </div>
                  <div
                    style={{ display: "flex", gap: "16px", marginTop: "16px" }}
                  >
                    <TextInput label="numberOfShift" />
                    <TextInput label="revenue" />
                  </div>
                  <div
                    style={{ display: "flex", gap: "16px", marginTop: "16px" }}
                  >
                    <SingleSelect
                      label="businessType"
                      placeholder="Choose Here"
                      onClear={() => {
                        setBusinessTypeValue(undefined);
                      }}
                      value={businessTypeValue}
                      onChange={setBusinessTypeValue}
                    >
                      <SingleSelectOption value="Production">
                        Production
                      </SingleSelectOption>
                      <SingleSelectOption value="Food and Beverages">
                        Food and Beverages
                      </SingleSelectOption>
                      <SingleSelectOption value="Distributor/Trader">
                        Distributor/Trader
                      </SingleSelectOption>
                      <SingleSelectOption value="Service Provider">
                        Service Provider
                      </SingleSelectOption>
                      <SingleSelectOption value="Others">
                        Others
                      </SingleSelectOption>
                    </SingleSelect>
                    <SingleSelect
                      label="industryType"
                      placeholder="Choose Here"
                      onClear={() => {
                        setIndustryTypeValue(undefined);
                      }}
                      value={industryTypeValue}
                      onChange={setIndustryTypeValue}
                    >
                      <SingleSelectOption value="Micro Industry">
                        Micro Industry
                      </SingleSelectOption>
                      <SingleSelectOption value="Small Industry">
                        Small Industry
                      </SingleSelectOption>
                      <SingleSelectOption value="Medium Industry">
                        Medium Industry
                      </SingleSelectOption>
                      <SingleSelectOption value="Multinational">
                        Multinational
                      </SingleSelectOption>
                    </SingleSelect>
                  </div>
                  <div
                    style={{ display: "flex", gap: "16px", marginTop: "16px" }}
                  >
                    <SingleSelect
                      placeholder="Choose Here"
                      label="productMarket"
                      onClear={() => {
                        setProductMarketValue(undefined);
                      }}
                      value={productMarketValue}
                      onChange={setProductMarketValue}
                    >
                      <SingleSelectOption value="Local">
                        Local
                      </SingleSelectOption>
                      <SingleSelectOption value="International">
                        International
                      </SingleSelectOption>
                    </SingleSelect>
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

export default RestaurantDetails;
