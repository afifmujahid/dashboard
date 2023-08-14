import React, { useState } from "react";
import {
  Box,
  HeaderLayout,
  ContentLayout,
  Layout,
  Card,
} from "@strapi/design-system";
import { Typography } from "@strapi/design-system/Typography";
import RestaurantDetail from "../../components/RestaurantDetail";
import EmployeeNumber from "../../components/EmployeeNumber";
import KeyPersonnel from "../../components/KeyPersonnel";
import OperatingHour from "../../components/OperatingHour";
import SupportingImage from "../../components/SupportingImage";
import SupportingDocument from "../../components/SupportingDocument";
import Cleanliness from "../../components/Cleanliness";

const ViewRestaurant = ({ location }) => {
  const restaurantId = location.state.todo.id;
  const [selectedStep, setSelectedStep] = useState(1);

  const handleCardClick = (step) => {
    setSelectedStep(step);
  };
  const steps = [1, 2, 3, 4, 5, 6, 7];
  const getTitle = (step) => {
    switch (step) {
      case 1:
        return "Restaurant Detail";
      case 2:
        return "Number of Employee";
      case 3:
        return "Key Personnel Responsible";
      case 4:
        return "Operating Hour";
      case 5:
        return "Image Attachment";
      case 6:
        return "Document Submission";
      case 7:
        return "Cleanliness";
    }
  };
  return (
    <Box background="neutral100">
      <Layout>
        <HeaderLayout title="View Restaurant" as="h2" />
        <Box
          background="neutral0"
          hasRadius={true}
          shadow="filterShadow"
          style={{
            marginTop: "10px",
            display: "grid",
            gridTemplateColumns: "300px 1px 1fr",
          }}
        >
          <div
            style={{
              display: "grid",
              rowGap: "16px",
              padding: "40px",
            }}
          >
            {steps.map((step) => (
              <div
                key={step}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  columnGap: "8px",
                  alignItems: "center",
                }}
              >
                <Card
                  style={{
                    display: "grid",
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    backgroundColor:
                      selectedStep === step ? "#004e5a" : "transparent",
                    color: selectedStep === step ? "white" : "black",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => handleCardClick(step)}
                >
                  {step}
                </Card>
                <Typography variant="body" fontWeight="semiBold">
                  {getTitle(step)}
                </Typography>
              </div>
            ))}
          </div>
          <div style={{ borderLeft: "1px solid #ccc" }} />
          <ContentLayout>
            <div style={{ padding: "40px" }}>
              {selectedStep === 1 && (
                <>
                  <Typography variant="beta">Restaurant Detail</Typography>
                  <div style={{ marginTop: "32px" }}>
                    <RestaurantDetail restaurantId={restaurantId} />
                  </div>
                </>
              )}
              {selectedStep === 2 && (
                <>
                  <Typography variant="beta">Employee Number</Typography>
                  <div style={{ marginTop: "32px" }}>
                    <EmployeeNumber restaurantId={restaurantId} />
                  </div>
                </>
              )}
              {selectedStep === 3 && (
                <>
                  <Typography variant="beta">
                    Key Personnel Responsible
                  </Typography>
                  <div style={{ marginTop: "32px" }}>
                    <KeyPersonnel restaurantId={restaurantId} />
                  </div>
                </>
              )}
              {selectedStep === 4 && (
                <>
                  <Typography variant="beta">Operating Hour</Typography>
                  <div style={{ marginTop: "32px" }}>
                    <OperatingHour restaurantId={restaurantId} />
                  </div>
                </>
              )}
              {selectedStep === 5 && (
                <>
                  <Typography variant="beta">Image</Typography>
                  <div style={{ marginTop: "32px" }}>
                    <SupportingImage restaurantId={restaurantId} />
                  </div>
                </>
              )}
              {selectedStep === 6 && (
                <>
                  <Typography variant="beta">Document</Typography>
                  <div style={{ marginTop: "32px" }}>
                    <SupportingDocument restaurantId={restaurantId} />
                  </div>
                </>
              )}
              {selectedStep === 7 && (
                <>
                  <Typography variant="beta">Cleanliness</Typography>
                  <div style={{ marginTop: "32px" }}>
                    <Cleanliness restaurantId={restaurantId} />
                  </div>
                </>
              )}
            </div>
          </ContentLayout>
        </Box>
      </Layout>
    </Box>
  );
};

export default ViewRestaurant;
