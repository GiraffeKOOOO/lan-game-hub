import { useContext, useState } from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { PersonCircle, Key } from "react-bootstrap-icons";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <>
      <Card className="mx-auto w-[400px] my-[200px]">
        <Card.Body className="text-center p-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div grid grid-cols-1>
              <div>
                <Card.Title className="py-[15px]">Game hub login</Card.Title>
              </div>
              <div>
                <div className="flex my-[20px] mx-auto p-[5px] border-2 w-[320px] border-gray-300 rounded-xl">
                  <PersonCircle size={40} className="ml-auto mr-[10px] pr-[5px] border-r-2" />
                  <input placeholder="Username" {...register("loginUsername", { required: true })} className="mr-auto w-[250px] " />
                </div>
              </div>
              <div>{errors.loginUsername && <span>This field is required</span>}</div>
              <div>
                <div className="flex my-[20px] mx-auto p-[5px] border-2 w-[320px] border-gray-300 rounded-xl">
                  <Key size={40} className="ml-auto mr-[10px] pr-[5px] border-r-2" />
                  <input type="password" placeholder="Password" {...register("loginPassword", { required: true })} className="mr-auto w-[250px]" />
                </div>
              </div>
              <div className="my-[20px]">{errors.loginPassword && <span>This field is required</span>}</div>
              <div>
                <Button variant="primary" type="submit" className="w-[250px] mb-[20px]">
                  login
                </Button>
              </div>
            </div>
          </form>
        </Card.Body>
      </Card>
    </>
  );
}

export default Login;
