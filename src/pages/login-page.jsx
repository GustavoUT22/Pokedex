import { useState } from "react";
import { Button, Form, ContainerForm, Welcome } from "../components/utils";
import Input from "../components/input";
import { useAuth } from "../context/auth-context";

function LoginPage() {
  const { login } = useAuth();
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
    login(formData);
  }

  return (
    <ContainerForm>
      <Welcome>Welcome to Poke Collection !</Welcome>
      <Form onSubmit={handleSubmit}>
        <Input
          label={"Email"}
          type={"text"}
          name={"email"}
          value={email ? email : ""}
          placeholder={"test@mail.com"}
          onChange={handleChange}
        />
        <Input
          label={"Password"}
          type={"password"}
          name={"password"}
          value={password ? password : ""}
          placeholder={"******"}
          onChange={handleChange}
        />
        <Button type="submit">Login</Button>
      </Form>
      <h3>Sign up</h3>
    </ContainerForm>
  );
}

export default LoginPage;
