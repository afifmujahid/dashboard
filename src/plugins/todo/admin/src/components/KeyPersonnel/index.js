import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import todoRequests from "../../api/todo";
import pluginId from "../../pluginId";
import { Table, Thead, Tbody, Tr, Td, Th } from "@strapi/design-system/Table";
import { Typography } from "@strapi/design-system/Typography";
import { IconButton } from "@strapi/design-system/IconButton";
import Eye from "@strapi/icons/Eye";

const KeyPersonnel = () => {
  const history = useHistory();
  const [todoData, setTodoData] = useState([]);
  useEffect(() => {
    async function fetchTodos() {
      try {
        const todos = await todoRequests.getAllTodos();
        const sortedTodos = todos.sort((a, b) => a.id - b.id);
        setTodoData(sortedTodos);
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
            <Typography>No.</Typography>
          </Th>

          <Th>
            <Typography>Name</Typography>
          </Th>

          <Th>
            <Typography>Position</Typography>
          </Th>
          <Th>
            <Typography>Email</Typography>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {todoData.map((todo, index) => {
          const count = index + 1;
          return (
            <Tr key={todo.id}>
              <Td>
                <Typography textColor="neutral800">{count}</Typography>
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
                <Typography textColor="neutral800">{todo.email}</Typography>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
export default KeyPersonnel;
