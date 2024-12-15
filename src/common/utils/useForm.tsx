import { useState } from "react";
import { notification } from "antd";
import emailjs from '@emailjs/browser';

interface IValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));

    // Use EmailJS to send email
    if (Object.values(errors).every((error) => error === "")) {
      emailjs.send(
        "service_jbvyfct",               // Replace with your EmailJS service ID
        "template_z37vckv",              // Replace with your EmailJS template ID
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        "-V71OC3x-1lYPTARK"
      )
      .then(() => {
          notification["success"]({
            message: "Success",
            description: "Your message has been sent!",
          });
      })
      .catch(() => {
          notification["error"]({
            message: "Error",
            description: "There was an error sending your message.",
          });
      });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};
