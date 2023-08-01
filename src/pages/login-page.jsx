import styled from "@emotion/styled";
import { useState } from "react";
import { Button, Form, ContainerForm, Welcome } from "../components/utils";
import Input from "../components/input";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.dir(email, password);
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
          label={"Password"}
          type={"password"}
          name={"password"}
          value={password}
          placeholder={"******"}
          onChange={handleChange}
        />
        <Button>submit</Button>
      </Form>
      <h3>Sign up</h3>
    </ContainerForm>
  );
}

export default LoginPage;
