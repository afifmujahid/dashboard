export const useRestaurant = (todoData) => {
  const RESTAURANT_DETAIL = [
    { label: "MFW Officer In Charge", value: todoData?.officerInCharge },
    { label: "Trade Name", value: todoData?.name },
    { label: "Business Registration Name", value: todoData?.registrationName },
    { label: "Company Registration No", value: todoData?.registrationNo },
    { label: "Company Status", value: todoData?.status },
    { label: "Company Address", value: todoData?.address },
    { label: "District", value: todoData?.district },
    { label: "Latitude", value: todoData?.latitude },
    { label: "Longitude", value: todoData?.longitude },
    { label: "Postcode", value: todoData?.postcode },
    { label: "City", value: todoData?.city },
    { label: "State", value: todoData?.state },
    { label: "Phone Number", value: todoData?.phone },
    { label: "Email", value: todoData?.email },
    { label: "Number of Shifts", value: todoData?.numberOfShift },
    { label: "Annual Sales Revenue RM", value: todoData?.revenue },
    { label: "Business Type", value: todoData?.businessType },
    { label: "Type of Industry", value: todoData?.industryType },
    { label: "Product Market", value: todoData?.productMarket },
  ];
  return RESTAURANT_DETAIL;
};
