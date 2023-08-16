export const useSupportingImage = (todoData) => {
  const SUPPORTING_IMAGE = [
    { label: "Premises", src: todoData?.officerInCharge },
    { label: "Dry Kitchen", src: todoData?.name },
    { label: "Wet Kitchen", src: todoData?.officerInCharge },
    { label: "Storage Place", src: todoData?.name },
    { label: "Toilet ", src: todoData?.officerInCharge },
    { label: "Menu", src: todoData?.name },
    { label: "Preparation Of Food", src: todoData?.officerInCharge },
    { label: "Dining Area", src: todoData?.name },
    { label: "Payment Counter", src: todoData?.officerInCharge },
    { label: "Employees Uniform ", src: todoData?.name },
    { label: "Receiving Area", src: todoData?.officerInCharge },
    { label: "Loading Area", src: todoData?.name },
  ];
  return SUPPORTING_IMAGE;
};
