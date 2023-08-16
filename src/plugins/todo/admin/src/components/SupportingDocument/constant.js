export const useSupportingDocument = (todoData) => {
  const SUPPORTING_DOCUMENT = [
    { fileName: todoData?.name, title: "Company Registeration Certificate" },
    { fileName: todoData?.name, title: "Business License" },
    { fileName: todoData?.name, title: "Annual Financial Statement" },
    { fileName: todoData?.name, title: "Muslim Employees Nric" },
    { fileName: todoData?.name, title: "Halal Certification Raw Material" },
    { fileName: todoData?.name, title: "Factory Location" },
    { fileName: todoData?.name, title: "Packaging Label" },
    { fileName: todoData?.name, title: "Complete Halal Application File" },
    { fileName: todoData?.name, title: "Halal Assurance System" },
    { fileName: todoData?.name, title: "Premise Layout" },
    { fileName: todoData?.name, title: "Pest Control Record" },
    { fileName: todoData?.name, title: "Purchase Record" },
    { fileName: todoData?.name, title: "Anti Thypoid Injection Record" },
    { fileName: todoData?.name, title: "Food Handler Course Certificate" },
  ];
  return SUPPORTING_DOCUMENT;
};
