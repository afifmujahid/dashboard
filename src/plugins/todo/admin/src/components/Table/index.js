import React, { useState, useEffect } from "react";
import todoRequests from "../../api/todo";
import {
  Table,
  Thead,
  TFooter,
  Tbody,
  Tr,
  Td,
  Th,
} from "@strapi/design-system/Table";
import { Typography } from "@strapi/design-system/Typography";
import { IconButton } from "@strapi/design-system/IconButton";
import Eye from "@strapi/icons/Eye";

const RestaurantList = () => {
  const [todoData, setTodoData] = useState([]);
  useEffect(() => {
    async function fetchTodos() {
      try {
        const todos = await todoRequests.getAllTodos();
        setTodoData(todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }
    fetchTodos();
  }, []);
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>
            <Typography>ID</Typography>
          </Th>

          <Th>
            <Typography>Name</Typography>
          </Th>

          <Th>
            <Typography>Officer In Charge Name</Typography>
          </Th>
          <Th>
            <Typography>Created Date</Typography>
          </Th>
          <Th>
            <Typography>Action</Typography>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {todoData.map((todo) => {
          return (
            <Tr key={todo.id}>
              <Td>
                <Typography textColor="neutral800">{todo.id}</Typography>
              </Td>
              <Td>
                <Typography textColor="neutral800">{todo.name}</Typography>
              </Td>
              <Td>
                <Typography textColor="neutral800">
                  {todo.officerInCharge}
                </Typography>
              </Td>
              <Td>
                <Typography textColor="neutral800">{todo.createdAt}</Typography>
              </Td>
              <Td>
                <IconButton
                  // onClick={() => setIsEdit(true)}
                  label="View"
                  noBorder
                  icon={<Eye />}
                />
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
export default RestaurantList;
