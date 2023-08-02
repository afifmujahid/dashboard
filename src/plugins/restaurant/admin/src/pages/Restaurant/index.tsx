import React, { useState, useEffect } from "react";
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
  Layout,
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@strapi/design-system";
import { Plus, Pencil, Trash } from "@strapi/icons";
const RestaurantPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Box background="neutral100">
      <Layout>
        <>
          <HeaderLayout
            primaryAction={
              <Button startIcon={<Plus />}>Create an entry</Button>
            }
            // secondaryAction={
            //   <Button variant="tertiary" startIcon={<Pencil />}>
            //     Edit
            //   </Button>
            // }
            title="Restaurant"
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
                  width: "300px",
                  height: "200px",
                  borderRadius: "20px",
                }}
                id="first"
                onClick={handleCardClick}
              >
                <CardHeader
                  style={{
                    width: "300px",
                    height: "200px",
                  }}
                >
                  <Typography fontWeight="bold" variant="beta">
                    Restaurant Name
                  </Typography>
                </CardHeader>
              </Card>
            </div>
          </ContentLayout>
          {isModalOpen && (
            <ModalLayout onClose={handleCloseModal}>
              <ModalHeader>
                <Typography>Restaurant Name</Typography>
              </ModalHeader>
              <ModalBody
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
              >
                <Typography>MFW Officer In Charge :</Typography>
                <Typography>Trade Name :</Typography>
                <Typography>Business Registration Name :</Typography>
                <Typography>Company Registration No :</Typography>
                <Typography>Company Status :</Typography>
                <Typography>Company Address :</Typography>
                <Typography>District :</Typography>
                <Typography>Latitude :</Typography>
                <Typography>Longitude :</Typography>
                <Typography>Postcode :</Typography>
                <Typography>City :</Typography>
                <Typography>State :</Typography>
                <Typography>Phone Number :</Typography>
                <Typography>Email :</Typography>
                <Typography>Number of Shifts :</Typography>
                <Typography>Annual Sales Revenue RM :</Typography>
                <Typography>Business Type :</Typography>
                <Typography>Type of Industry :</Typography>
                <Typography>Product Market :</Typography>
              </ModalBody>
              <ModalFooter
                endActions={
                  <>
                    <Button onClick={handleCloseModal}>Close</Button>
                  </>
                }
              />
            </ModalLayout>
          )}
        </>
      </Layout>
    </Box>
  );
};

export default RestaurantPage;
