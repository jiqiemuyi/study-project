import { Button, Input } from "antd";
import SchemaTable from "./components/SchemaTable";
import SchemaForm, {
  createForm,
  createFormActions,
  createVirtualBox,
} from "@formily/antd";
import { useRef } from "react";

createVirtualBox("schemaTable", SchemaTable);

const form = createForm();
const schemaTableProps = {
  // request: "{{request}}",
  rowSelection: false,
  // pagination: { pageSize: 10 },
  // actionRef: "{{actionRef}}",
  // formRef: "{{formRef}}",
  // toolbar: "{{toolbar}}",
  // scroll: { x: 'max-content' },
  // scroll: { y: 'calc(40vh - 48px)' },
  // autoCalculateTableHeight: false,
  // customCalculateTableHeight: 50,
  columns: [
    {
      title: "ID",
      dataIndex: "id",
      key: "invoice_id",
      width: 80,
      fixed: "left",
      formItemProps: {
        label: "开票ID",
      },
      fieldProps: {
        placeholder: "请输入开票ID",
      },
    },
  ],
};

const schema = {
  type: "object",
  properties: {
    NO_NAME_FIELD_$0: {
      name: "NO_NAME_FIELD_$0",
      type: "object",
      "x-component": "schemaTable",
      "x-component-props": schemaTableProps,
    },
  },
};

export default function SchemaPage() {
  const actions = useRef(createFormActions());

  const handleSubmit = () => {
    form.submit().then((values) => {
      console.log("Form Values:", values);
    });
  };
  return (
    <SchemaForm
      form={form}
      actions={actions.current}
      schema={schema}
      components={{ Input }}
      onSubmit={handleSubmit}
    >
      <Button onClick={handleSubmit} type="primary">
        Submit
      </Button>
    </SchemaForm>
  );
}
