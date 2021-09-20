import React, { useState } from "react";

import { Formik, Form } from "formik";

import { PopoverPicker } from "@/components/PopoverPicker";
import TextInput from "@/components/Formik/TextInput";
import Select from "@/components/Formik/Select";
import { validationSchema } from "@/utils/validationSchema";

import FormikStyles from "@/components/Formik/formik.style.module.scss";

interface ILinkSubmit {
  userName: string;
  repoName: string;
  avatarStyle: string;
  // id: number;
  // wrapperBackground: string;
  // cardBackground: string;
  // buttonBackground1: string;
  // buttonBackground2: string;
  // buttonBorderRadius: string;
}

const HomePage = () => {
  const [wrapperBackground, setWrapperBackground] = useState("#aabbcc");
  const [cardBackground, setCardBackground] = useState("#aabbcc");

  const submitForm = (values: ILinkSubmit) => {
    const { userName, repoName, avatarStyle } = values;
    const newLink = {
      link: `https://api.github.com/repos/${userName.trim()}/${repoName.trim()}`,
      id: 12346,
      wrapperBackground: wrapperBackground,
      cardBackground: cardBackground,
      avatarStyle: avatarStyle,
      buttonBackground1: "",
      buttonBackground2: "",
      buttonBorderRadius: "",
    };
    console.log("newLink", newLink);
  };
  return (
    <>
      <h1>Choose your style before getting a link:</h1>
      <Formik
        initialValues={{
          userName: "",
          repoName: "",
          avatarStyle: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => submitForm(values)}
      >
        <Form className="">
          <TextInput
            label="User name"
            name="userName"
            type="text"
            placeholder="Type github user name"
          />
          <TextInput
            label="Repository name"
            name="repoName"
            type="text"
            placeholder="Type github repo name"
          />
          <Select label="Avatar style" name="avatarStyle">
            <option value="">Choose avatar style</option>
            <option value="rounded">Rounded</option>
            <option value="square">Square</option>
          </Select>
          <div>
            Choose background color:
            <PopoverPicker
              color={wrapperBackground}
              onChange={setWrapperBackground}
            />
          </div>
          <div>
            Choose card color:
            <PopoverPicker
              color={cardBackground}
              onChange={setCardBackground}
            />
          </div>
          <button type="submit" className={FormikStyles.button}>
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default HomePage;
