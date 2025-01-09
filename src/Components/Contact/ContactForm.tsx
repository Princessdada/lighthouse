import { Box, Flex, Input, Textarea, Button, Grid } from "@chakra-ui/react";
import { Field } from "../ui/field";
import React, { useState } from "react";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}
const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevdata) => ({ ...prevdata, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Sucessfully", formData);
    alert("Message sent successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg={"#fff"}
      color={"#1D2130"}
      fontSize={"12px"}>
      <Grid
        alignItems={"center"}
        textAlign="center"
        templateColumns="1fr"
        p={"6"}
        maxW={"800px"}
        w="100%">
        <form onSubmit={handleSubmit}>
          {/* First Name and Last Name */}
          <Flex gap={"6"} pb={"10px"}>
            <Field>
              <Field>First Name</Field>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
              />
            </Field>

            <Field>
              <Field>Last Name</Field>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
              />
            </Field>
          </Flex>

          {/* Email */}
          <Flex gap={"4"} pb={"10px"}>
            <Field>
              <Field>Email</Field>
              <Input
                type="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="me@example.com"
              />
            </Field>

            {/* Subject */}

            <Field>
              <Field>Subject</Field>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter the subject"
              />
            </Field>
          </Flex>
          {/* Message */}
          <Field mb={4}>
            <Field>Message</Field>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
              rows={7}
            />
          </Field>

          {/* Submit Button */}
          <Button
            type="submit"
            bg="#F2C94C"
            h={"51px"}
            fontSize={"12px"}
            mt={4}>
            Send Message
          </Button>
        </form>
      </Grid>
    </Flex>
  );
};

export default ContactForm;
