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
import OperatingHour from "../../components/OperatinHour";

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
          padding={8}
          style={{
            marginTop: "10px",
            display: "grid",
            gridTemplateColumns: "300px 1fr",
          }}
        >
          <div style={{ display: "grid", rowGap: "16px" }}>
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
          <ContentLayout>
            {selectedStep === 1 && (
              <>
                <h2 style={{ marginBottom: "28px" }}>Restaurant Detail</h2>
                <RestaurantDetail restaurantId={restaurantId} />
              </>
            )}
            {selectedStep === 2 && (
              <>
                <h2 style={{ marginBottom: "28px" }}>Employee Number</h2>
                <EmployeeNumber restaurantId={restaurantId} />
              </>
            )}
            {selectedStep === 3 && (
              <>
                <h2 style={{ marginBottom: "28px" }}>
                  Key Personnel Responsible
                </h2>
                <KeyPersonnel />
              </>
            )}
            {selectedStep === 4 && (
              <>
                <h2 style={{ marginBottom: "28px" }}>
                  Key Personnel Responsible
                </h2>
                <OperatingHour restaurantId={restaurantId} />
              </>
            )}
            {/* {selectedStep === 5 && (
              <>
                <h2 style={{ marginBottom: "28px" }}>
                  Key Personnel Responsible
                </h2>
                <KeyPersonnel restaurantId={restaurantId} />
              </>
            )}
            {selectedStep === 6 && (
              <>
                <h2 style={{ marginBottom: "28px" }}>
                  Key Personnel Responsible
                </h2>
                <KeyPersonnel restaurantId={restaurantId} />
              </>
            )}
            {selectedStep === 7 && (
              <>
                <h2 style={{ marginBottom: "28px" }}>
                  Key Personnel Responsible
                </h2>
                <KeyPersonnel restaurantId={restaurantId} />
              </>
            )} */}
          </ContentLayout>
        </Box>
      </Layout>
    </Box>
  );
};

export default ViewRestaurant;
