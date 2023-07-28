import { Layout as AntdLayout, Typography } from "antd";
import React, { ReactNode } from "react";

const { Content } = AntdLayout;
const { Title } = Typography;

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title }: LayoutProps) => (
  <AntdLayout className="overflow-auto">
    <Content className="min-h-min p-4 md:p-8">
      <div className="flex flex-col gap-8">
        <Title className="text-2xl font-bold">{title}</Title>
        {children}
      </div>
    </Content>
  </AntdLayout>
);

export default Layout;
