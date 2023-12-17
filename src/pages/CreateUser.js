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
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Paragraph = styled.p`
  color: grey;
  width: auto;
  height: auto;
`;

export default function CreateUser() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [users, setUsers] = useState(function () {
    const items = localStorage.getItem("users");
    if (items === null || items === undefined) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("users"));
    }
  });

  useEffect(
    function () {
      if (users?.length !== 0) {
        localStorage.setItem("users", JSON.stringify(users));
      }
    },
    [users]
  );

  console.log("This is the user data in the creator form", users?.length);
  console.log(users);

  function onSubmit(formDataObj) {
    const {
      firstName,
      lastName,
      zipcode,
      phoneNumber,
      email,
      address1,
      address2,
    } = formDataObj;

    const userObj = {
      firstName,
      lastName,
      zipcode,
      phoneNumber,
      email,
      address1,
      address2,
      state,
      country: country.value,
    };
    setUsers(function (prevUser) {
      return [userObj, ...prevUser];
    });
    toast.success("New user successfully created");
    setCountry(null);
    setState(null);
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
        {errors?.firstName?.message ? (
          <Paragraph>{errors?.firstName?.message}</Paragraph>
        ) : (
          ""
        )}
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
        {errors?.lastName?.message ? (
          <Paragraph>{errors?.lastName?.message}</Paragraph>
        ) : (
          ""
        )}
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
        {errors?.email?.message ? (
          <Paragraph>{errors?.email?.message}</Paragraph>
        ) : (
          ""
        )}
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
        {errors?.phoneNumber?.message ? (
          <Paragraph>{errors?.phoneNumber?.message}</Paragraph>
        ) : (
          ""
        )}
      </FormRow>

      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Country</strong>
        </label>
        <Modal setCountry={setCountry} country={country}>
          <InputElem
            placeholder={"country"}
            type={"country"}
            register={register}
          />
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
          <strong style={{ color: "white" }}> Address1</strong>
        </label>
        <Input
          type="text"
          id="address1"
          placeholder="address1"
          autoComplete="new-text"
          {...register("address1", { required: "This field is required" })}
        />
        {errors?.address1?.message ? (
          <Paragraph>{errors?.address1?.message}</Paragraph>
        ) : (
          ""
        )}
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
          defaultValue={""}
          {...register("address2")}
        />
      </FormRow>

      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Zipcode</strong>
        </label>
        <Input
          type="number"
          id="zipcode"
          placeholder="zipcode"
          autoComplete="new-number"
          {...register("zipcode", { required: "This field is required" })}
        />
        {errors?.zipcode?.message ? (
          <Paragraph>{errors?.zipcode?.message}</Paragraph>
        ) : (
          ""
        )}
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={function () {
            reset();
            setCountry(null);
            setState(null);
          }}
          style={{ color: "white" }}
        >
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}
