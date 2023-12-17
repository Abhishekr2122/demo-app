import Button from "../ui/Button";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import { useUpdateUser } from "../ui/UpdateModal";

export default function UpdateUser() {
  const { setIsOpen, currentUser } = useUpdateUser();
  console.log("This is the current user", currentUser);
  return (
    <Form>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>First Name</strong>
        </label>
        <Input
          type="text"
          id="firstName"
          defaultValue={currentUser?.firstName ? currentUser.firstName : ""}
        />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Last Name</strong>
        </label>
        <Input
          type="text"
          id="lastName"
          defaultValue={currentUser?.lastName ? currentUser.lastName : ""}
        />
      </FormRow>

      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Email Address</strong>
        </label>
        <Input
          type="email"
          id="email"
          defaultValue={currentUser?.email ? currentUser.email : ""}
        />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Mobile</strong>
        </label>
        <Input
          type="tel"
          id="phonenumber"
          defaultValue={currentUser?.phoneNumber ? currentUser.phoneNumber : 0}
        />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Country</strong>
        </label>
        <Input
          type="text"
          id="country"
          defaultValue={currentUser?.country ? currentUser.country : "India"}
          disabled
        />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>State</strong>
        </label>
        <Input
          type="text"
          id="state"
          defaultValue={currentUser?.state ? currentUser.state : "Maharashtra"}
          disabled
        />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Address1</strong>
        </label>
        <Input
          type="text"
          id="address1"
          defaultValue={currentUser?.address1 ? currentUser.address1 : ""}
        />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Address2</strong>
        </label>
        <Input
          type="text"
          id="address2"
          defaultValue={currentUser?.address2 ? currentUser.address2 : ""}
        />
      </FormRow>
      <FormRow>
        <label>
          <strong style={{ color: "white" }}>Zipcode</strong>
        </label>
        <Input
          type="number"
          id="zipcode"
          defaultValue={currentUser?.zipcode ? currentUser.zipcode : 0}
        />
      </FormRow>
      <FormRow>
        <Button>Create new user</Button>
        <Button
          variation="secondary"
          type="reset"
          onClick={function () {
            console.log("cancel is being clicked");
          }}
          style={{ color: "white" }}
        >
          Cancel
        </Button>
        <Button
          variation="danger"
          onClick={function (e) {
            setIsOpen(false);
          }}
        >
          Close
        </Button>
      </FormRow>
    </Form>
  );
}
