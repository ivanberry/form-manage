import Layout from "antd/lib/layout/layout";
import * as React from "react";
import Draggable from "react-draggable";
import { default as formItems } from "../Forms";
import "./index.scss";

const { Content } = Layout;

export default () => {
  return (
    <Layout className="basic-layout">
      <div className="basic-components">
        {formItems.map(({ name, Component }) => (
          <Draggable cancel=".not-draggable">
            <div key={name}>
              <h1>{name}</h1>
              <Component className="not-draggable"  />
            </div>
          </Draggable>
        ))}
      </div>
      <Content className="layout-item">zzzz</Content>
      <div className="basic-components__config">
        <h1>yyy</h1>
      </div>
    </Layout>
  );
};
