/*
 *
 * HomePage
 *
 */
import { Typography } from "antd";
import React from "react";
import pluginId from "../../pluginId";

const { Title, Text } = Typography;

const HomePage = () => {
  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <Text>Test</Text>
    </div>
  );
};

export default HomePage;
