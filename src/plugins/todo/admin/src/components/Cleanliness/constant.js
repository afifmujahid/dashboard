export const useCleanliness = (todoData) => {
  const CLEANLINESS_CHECKLIST = [
    {
      label: "The room shall be kept clean and well maintained including:",
      data: todoData?.name,
      subItems: [
        {
          label: "Dry Kitchen:",
          data: todoData?.name,
        },
        {
          label: "Dining Area:",
          data: todoData?.registrationName,
        },
        {
          label: "Storage place for dry cooking ingredients and frozen:",
          data: todoData?.registrationNo,
        },
        {
          label: "Male & Female Toilet:",
          data: todoData?.status,
        },
      ],
    },
    {
      label: "Water Pipe & Hose:",
      data: todoData?.district,
      subItems: [
        {
          label: "Sink:",
          data: todoData?.latitude,
        },
        {
          label: "Tissue / Hand Dryer:",
          data: todoData?.longitude,
        },
        {
          label: "Dustbin:",
          data: todoData?.postcode,
        },
        {
          label: "Sanitary Bin:",
          data: todoData?.city,
        },
        {
          label: "Soap & Hand Sanitizer:",
          data: todoData?.state,
        },
      ],
    },

    {
      label: "The washroom floor shall be kept clean:",
      data: todoData?.phone,
    },
    {
      label: "Cleanliness of food handling & cooking utensils:",
      data: todoData?.email,
    },
    {
      label: "Handling waste material properly:",
      data: todoData?.numberOfShift,
    },
    {
      label: "Employees with proper practice personal care & hygiene:",
      data: todoData?.revenue,
    },
    {
      label: "Engagement with pest control services:",
      data: todoData?.businessType,
    },
  ];
  return CLEANLINESS_CHECKLIST;
};
