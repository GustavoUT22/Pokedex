import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import { Button, Form, ContainerForm, Welcome } from "../components/utils";

function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const { email, first_name, last_name, password } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("here");
  }

  return (
    <ContainerForm>
      <Welcome>Welcome to Poke Collection !</Welcome>
      <Form onSubmit={handleSubmit}>
        <Input
          label={"Email"}
          type={"text"}
          name={"email"}
          value={email}
          placeholder={"test@mail.com"}
          onChange={handleChange}
        />
        <Input
          label={"First Name"}
          type={"text"}
          name={"first_name"}
          value={first_name}
          placeholder={"John"}
          onChange={handleChange}
        />
        <Input
          label={"Last Name"}
          type={"text"}
          name={"last_name"}
          value={last_name}
          placeholder={"Doe"}
          onChange={handleChange}
        />
        <Input
          label={"Password"}
          type={"password"}
          name={"password"}
          value={password}
          placeholder={"******"}
          onChange={handleChange}
        />
        <Button>Submit</Button>
      </Form>
      <h3>Login</h3>
    </ContainerForm>
  );
}

export default SignupPage;
