import React, { useState } from "react";
import { NextPage } from "next";

import axios from "axios";
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
  metricBorderRadius: string;
  metricFontSize: string;
}

const HomePage: NextPage = () => {
  const [wrapperBackground, setWrapperBackground] = useState("#ffffff");
  const [cardBackground, setCardBackground] = useState("#ffffff");
  const [metricBackground, setMetricBackground] = useState("#ffffff");
  const [metricFontColor, setMetricFontColor] = useState("#ffffff");
  const [generatedLink, setGeneratedLink] = useState("");
  const [error, setError] = useState("");

  const submitForm = async (values: ILinkSubmit) => {
    const {
      userName,
      repoName,
      avatarStyle,
      metricBorderRadius,
      metricFontSize,
    } = values;
    const newLink = {
      link: `https://api.github.com/repos/${userName.trim()}/${repoName.trim()}`,
      shortLinkId: Math.random().toString(36).substr(2, 5),
      wrapperBackground: wrapperBackground,
      cardBackground: cardBackground,
      avatarStyle: avatarStyle,
      metricBackground: metricBackground,
      metricBorderRadius: metricBorderRadius,
      metricFontSize: metricFontSize,
      metricFontColor: metricFontColor,
    };
    if (newLink) {
      try {
        const result = await axios.post("/api/link/add", newLink);
        if (result && result.data) {
          setGeneratedLink(`/${newLink.shortLinkId}`);
        }
      } catch (e) {
        setError("Something went wrong! Please, try again!");
      }
    }
  };

  return (
    <div className={FormikStyles.formWrapper}>
      <h1>Choose your style before getting a link:</h1>
      <Formik
        initialValues={{
          userName: "",
          repoName: "",
          avatarStyle: "",
          metricBorderRadius: "",
          metricFontSize: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => submitForm(values)}
      >
        <Form className={FormikStyles.form}>
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
          <div className={FormikStyles.metricForm}>
            <span className={FormikStyles.label}>Choose background color:</span>
            <PopoverPicker
              color={wrapperBackground}
              onChange={setWrapperBackground}
            />
          </div>
          <div className={FormikStyles.metricForm}>
            <span className={FormikStyles.label}>Choose card color:</span>
            <PopoverPicker
              color={cardBackground}
              onChange={setCardBackground}
            />
          </div>
          <Select label="Avatar style" name="avatarStyle">
            <option value="">Choose avatar style</option>
            <option value="rounded">Rounded</option>
            <option value="square">Square</option>
          </Select>
          <Select label="Metric area border" name="metricBorderRadius">
            <option value="">Choose metric area border</option>
            <option value="rounded">Rounded</option>
            <option value="square">Square</option>
          </Select>
          <div className={FormikStyles.metricForm}>
            <span className={FormikStyles.label}>
              Choose metric background color:
            </span>
            <PopoverPicker
              color={metricBackground}
              onChange={setMetricBackground}
            />
          </div>
          <Select label="Metric font size" name="metricFontSize">
            <option value="">Choose metric font size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </Select>
          <div className={FormikStyles.metricForm}>
            <span className={FormikStyles.label}>
              Choose metric font color:
            </span>
            <PopoverPicker
              color={metricFontColor}
              onChange={setMetricFontColor}
            />
          </div>
          <button type="submit" className={FormikStyles.button}>
            Get link
          </button>
        </Form>
      </Formik>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          <a href={generatedLink}>{generatedLink}</a>
        </div>
      )}
    </div>
  );
};

export default HomePage;
