import Layout from "antd/lib/layout/layout";
import * as React from "react";
import * as formItems from "../Forms";
import "./index.scss";

const { Content } = Layout;

export default () => {
  let counter = 0;
  return (
    <Layout className="basic-layout">
      <div>
        {Object.values(formItems).map((Item: any) => <Item key={counter++} />)}
      </div>
      <Content className="layout-item">zzzz</Content>
      <div>
        <h1>yyy</h1>
      </div>
    </Layout>
  );
};
