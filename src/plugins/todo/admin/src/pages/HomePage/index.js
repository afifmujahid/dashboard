// /*
//  *
//  * HomePage
//  *
//  */

// import React, { memo, useState, useEffect } from "react";
// import { LoadingIndicatorPage } from "@strapi/helper-plugin";
// import todoRequests from "../../api/todo";
// import {
//   Layout,
//   BaseHeaderLayout,
//   ContentLayout,
// } from "@strapi/design-system/Layout";

// import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
// import { Button } from "@strapi/design-system/Button";
// import Plus from "@strapi/icons/Plus";
// import { Illo } from "../../components/Illo";

// import TodoModal from "../../components/TodoModal";
// import TodoCount from "../../components/TodoCount";
// import TodoTable from "../../components/TodoTable";

// const HomePage = () => {
//   const [todoData, setTodoData] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   const fetchData = async () => {
//     if (isLoading === false) setIsLoading(true);
//     const todo = await todoRequests.getAllTodos();
//     setTodoData(todo);
//     setIsLoading(false);
//   };

//   useEffect(async () => {
//     await fetchData();
//   }, []);

//   async function addTodo(data) {
//     await todoRequests.addTodo(data);
//     await fetchData();
//   }

//   async function toggleTodo(data) {
//     await todoRequests.toggleTodo(data.id);
//   }

//   async function deleteTodo(data) {
//     await todoRequests.deleteTodo(data.id);
//     await fetchData();
//   }

//   async function editTodo(id, data) {
//     await todoRequests.editTodo(id, data);
//     await fetchData();
//   }

//   if (isLoading) return <LoadingIndicatorPage />;

//   return (
//     <Layout>
//       <BaseHeaderLayout
//         title="Todo Plugin"
//         subtitle="All your todos in one place."
//         as="h2"
//       />

//       <ContentLayout>
//         {todoData.length === 0 ? (
//           <EmptyStateLayout
//             icon={<Illo />}
//             content="You don't have any todos yet..."
//             action={
//               <Button
//                 onClick={() => setShowModal(true)}
//                 variant="secondary"
//                 startIcon={<Plus />}
//               >
//                 Add your first todo
//               </Button>
//             }
//           />
//         ) : (
//           <>
//             <TodoCount count={todoData.length} />
//             <TodoTable
//               todoData={todoData}
//               setShowModal={setShowModal}
//               toggleTodo={toggleTodo}
//               deleteTodo={deleteTodo}
//               editTodo={editTodo}
//             />
//           </>
//         )}
//       </ContentLayout>
//       {showModal && <TodoModal setShowModal={setShowModal} addTodo={addTodo} />}
//     </Layout>
//   );
// };

// export default memo(HomePage);
import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
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
  const [todoData, setTodoData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    async function fetchTodos() {
      try {
        const todos = await todoRequests.getAllTodos();
        console.log("Fetched todos:", todos); // For debugging purposes
        setTodoData(todos);
      } catch (error) {
        // Handle error while fetching todos
        console.error("Error fetching todos:", error);
      }
    }
    fetchTodos();
  }, []);

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
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
              }}
            >
              {todoData.map((todo) => (
                <React.Fragment key={todo.id}>
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
                          {todo.name}
                        </Typography>
                      </CardHeader>
                    </Card>
                  </div>
                </React.Fragment>
              ))}
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
                {todoData.map((todo) => (
                  <React.Fragment key={todo.id}>
                    <Typography>
                      MFW Officer In Charge : {todo.officerInCharge}
                    </Typography>
                    <Typography>Trade Name : {todo.name}</Typography>
                    <Typography>
                      Business Registration Name : {todo.registrationName}
                    </Typography>
                    <Typography>
                      Company Registration No : {todo.registrationNo}
                    </Typography>
                    <Typography>Company Status : {todo.status}</Typography>
                    <Typography>Company Address : {todo.address}</Typography>
                    <Typography>District : {todo.district}</Typography>
                    <Typography>Latitude : {todo.latitude}</Typography>
                    <Typography>Longitude : {todo.longitude}</Typography>
                    <Typography>Postcode : {todo.postcode}</Typography>
                    <Typography>City : {todo.city}</Typography>
                    <Typography>State : {todo.state}</Typography>
                    <Typography>Phone Number : {todo.phone}</Typography>
                    <Typography>Email : {todo.email}</Typography>
                    <Typography>
                      Number of Shifts : {todo.numberOfShift}
                    </Typography>
                    <Typography>
                      Annual Sales Revenue RM : {todo.revenue}
                    </Typography>
                    <Typography>Business Type : {todo.businessType}</Typography>
                    <Typography>
                      Type of Industry : {todo.industryType}
                    </Typography>
                    <Typography>
                      Product Market : {todo.productMarket}
                    </Typography>
                  </React.Fragment>
                ))}
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
