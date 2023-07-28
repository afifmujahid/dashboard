import { Layout as AntdLayout, Typography } from "antd";
import React, { ReactNode } from "react";

const { Content } = AntdLayout;
const { Title } = Typography;
import styled from "styled-components";
import { Box } from "@strapi/design-system";
interface LayoutProps {
  children: ReactNode;
  title?: string;
  sideNav?: ReactNode;
}

const GridContainer = styled(Box)<{ hasSideNav: boolean }>`
  display: grid;
  grid-template-columns: ${({ hasSideNav }) =>
    hasSideNav ? `auto 1fr` : "1fr"};
`;

const OverflowingItem = styled(Box)`
  overflow-x: hidden;
`;
const Layout = ({ sideNav, children, title }: LayoutProps) => (
  <GridContainer hasSideNav={Boolean(sideNav)}>
    {sideNav}
    <OverflowingItem paddingBottom={10}>{children}</OverflowingItem>
  </GridContainer>
);

export default Layout;
