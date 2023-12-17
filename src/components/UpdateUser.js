import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";

export default function UpdateUser() {
  return (
    <Form>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>First Name</strong>
        </label>
        <Input type="text" id="firstName" defaultValue={"Abhishke"} />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Last Name</strong>
        </label>
        <Input type="text" id="lastName" defaultValue={"Shinde"} />
      </FormRow>

      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Email Address</strong>
        </label>
        <Input
          type="email"
          id="email"
          defaultValue={"abhishekrshinde21@gmail.com"}
        />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Mobile</strong>
        </label>
        <Input type="tel" id="phonenumber" defaultValue={7720960310} />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Country</strong>
        </label>
        <Input type="text" id="country" defaultValue={"india"} disabled />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>State</strong>
        </label>
        <Input type="text" id="state" defaultValue={"Maharashtra"} disabled />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Address1</strong>
        </label>
        <Input
          type="text"
          id="address1"
          defaultValue={"Panchkrishna nivas vatsalya nagar society nanded"}
        />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Address2</strong>
        </label>
        <Input
          type="text"
          id="address2"
          defaultValue={"Near balaji temple nanded"}
        />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Zipcode</strong>
        </label>
        <Input type="number" id="address2" defaultValue={431605} />
      </FormRow>
    </Form>
  );
}
