import Button from "../../ui/Button";
import { useFetcher } from "react-router-dom";

function UpdateOrder() {
  const { Form } = useFetcher();

  return (
    <Form method="PATCH">
      <input type="hidden" name="priority" value="true" />
      <Button type="primary" htmlType="submit">
        Make Priority
      </Button>
    </Form>
  );
}

export default UpdateOrder;
