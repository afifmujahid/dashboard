import React, { ReactNode } from "react";

import styled from "styled-components";
import { Box, Typography } from "@strapi/design-system";
interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title }: LayoutProps) => <div>{children}</div>;

export default Layout;
