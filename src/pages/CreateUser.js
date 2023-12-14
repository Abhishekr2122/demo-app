import styled from "styled-components";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Button from "../ui/Button";

import Modal, { OutPutContainer } from "../ui/Modal";
import StateModal, {
  InputElement,
  StateOutputContainer,
} from "../ui/StateModal";
import { InputElem } from "../ui/Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Paragraph = styled.p`
  color: red;
  width: auto;
  height: auto;
`;

export default function CreateUser() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);

  console.log(country);
  return (
    <Form
      onSubmit={function (e) {
        e.preventDefault();
      }}
    >
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>First Name</strong>
        </label>
        <Input
          type="text"
          id="firstName"
          placeholder="firstname"
          {...register("firstName", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Last Name</strong>
        </label>
        <Input
          type="text"
          id="lastName"
          placeholder="lastname"
          autoComplete="new-text"
          {...register("lastName", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Email Address</strong>
        </label>
        <Input
          type="email"
          placeholder="email"
          id="email"
          autoComplete="new-email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Mobile</strong>
        </label>
        <Input
          type="tel"
          id="phoneNumber"
          placeholder="phonenumber"
          autoComplete="new-tel"
          {...register("phoneNumber", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}> Address1</strong>
        </label>
        <Input
          type="text"
          id="address1"
          placeholder="address1"
          autoComplete="new-text"
          {...register("address1", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}> Address2</strong>
        </label>
        <Input
          type="text"
          id="address2"
          placeholder="address2(optional)"
          autoComplete="new-text"
        />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Country</strong>
        </label>
        <Modal setCountry={setCountry}>
          <InputElem placeholder={"country"} type={"country"} />
          <OutPutContainer />
        </Modal>
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>State</strong>
        </label>
        <StateModal country={country} setState={setState}>
          <InputElement type="state" placeholder="state" />
          <StateOutputContainer />
        </StateModal>
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Zipcode</strong>
        </label>
        <Input
          type="text"
          id="zipcode"
          placeholder="zipcode"
          autoComplete="new-number"
          {...register("zipcode", { required: "This field is required" })}
        />
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
