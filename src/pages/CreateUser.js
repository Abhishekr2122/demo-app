import styled from "styled-components";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { getCountries } from "../getCountries";

const Paragraph = styled.p`
  color: red;
  width: auto;
  height: auto;
`;

export default function CreateUser() {
  return (
    <Form>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>First Name</strong>
        </label>
        <Input type="text" id="firstName" placeholder="firtname" />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Last Name</strong>
        </label>
        <Input type="text" id="lastName" placeholder="lastname" />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Email Address</strong>
        </label>
        <Input type="email" placeholder="email" id="email" />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Mobile</strong>
        </label>
        <Input type="tel" id="phonenumber" placeholder="phonenumber" />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}> Address1</strong>
        </label>
        <Input type="text" id="address1" placeholder="address1" />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}> Address2</strong>
        </label>
        <Input type="text" id="address2" placeholder="address2(optional)" />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Country</strong>
        </label>
        <Input
          type="search"
          id="country"
          placeholder="country"
          onFocus={function () {
            getCountries();
          }}
        />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>State</strong>
        </label>
        <Input type="search" id="state" placeholder="state" />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Zipcode</strong>
        </label>
        <Input type="number" id="zipcode" placeholder="zipcode" />
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          //   disabled={isLoading}
          //   onClick={reset}
          style={{ color: "white" }}
        >
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}
