import { Button, Result } from "antd";
import { ResultStatusType } from "antd/lib/result";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPages() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Result
        status={error.status as ResultStatusType}
        title={error.statusText}
        subTitle={error.data?.message && <pre>{error.data.message}</pre>}
        extra={<Button type="primary">Back Home</Button>}
      />
    );
  } else {
    return (
      <Result
        title="Wrong click"
        subTitle="Opps"
        extra={<Button type="primary">Back Home</Button>}
      />
    );
  }
}
