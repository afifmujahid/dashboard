import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import todoRequests from "../../api/todo";
import pluginId from "../../pluginId";
import { Button } from "@strapi/design-system";
import { Table, Thead, Tbody, Tr, Td, Th } from "@strapi/design-system/Table";
import { Typography } from "@strapi/design-system/Typography";
import { IconButton } from "@strapi/design-system/IconButton";
import Eye from "@strapi/icons/Eye";
import * as XLSX from "xlsx";

const RestaurantList = () => {
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

  const exportToExcel = () => {
    const formattedData = todoData.map((todo, index) => ({
      "No.": index + 1,
      "Restaurant Name": todo.name,
      "Officer In Charge Name": todo.officerInCharge,
      "Created Date": new Date(todo.createdAt).toLocaleDateString("en-GB"),
      "Registeration Name": todo.registrationName,
      "Registeration No": todo.registrationNo,
      "Company Status": todo.status,
      "Company Address": todo.address,
      District: todo.district,
      Postcode: todo.postcode,
      City: todo.city,
      State: todo.state,
      Latitude: todo.latitude,
      Longtitude: todo.longitude,
      "Phone Number": todo.phone,
      Email: todo.email,
      "Number of Shifts": todo.numberOfShift,
      "Annual Sales Revenue RM": todo.revenue,
      "Business Type": todo.businessType,
      "Type of Industry": todo.industryType,
      "Product Market": todo.productMarket,
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Restaurant List");
    XLSX.writeFile(workbook, "Restaurant List.xlsx");
  };

  return (
    <div style={{ display: "grid", rowGap: "15px " }}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={exportToExcel}
          style={{
            backgroundColor: "#004e5a",
            borderColor: "#004e5a",
            color: "white",
          }}
        >
          Export to Excel
        </Button>
      </div>
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
                  <Typography textColor="neutral800">
                    {new Date(todo.createdAt).toLocaleDateString("en-GB")}
                  </Typography>
                </Td>
                <Td>
                  <IconButton
                    label="View"
                    noBorder
                    icon={<Eye />}
                    onClick={() =>
                      history.push({
                        pathname: `/plugins/${pluginId}/${todo.id}`,
                        state: { todo },
                      })
                    }
                  />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};
export default RestaurantList;
