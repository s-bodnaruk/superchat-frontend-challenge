import React, { useState } from "react";
import { NextPage } from "next";

import axios from "axios";
import { Formik, Form } from "formik";

import { CopyFilled } from "@ant-design/icons";

import { PopoverPicker } from "@/components/PopoverPicker";
import TextInput from "@/components/Formik/TextInput";
import Select from "@/components/Formik/Select";

import { notifyerror, notifysuccess } from "@/utils/notify";
import { validationSchema } from "@/utils/validationSchema";

import FormikStyles from "@/components/Formik/formik.style.module.scss";

interface ILinkSubmit {
  userName: string;
  repoName: string;
  avatarStyle: string;
  metricBorderRadius: string;
  metricFontSize: string;
}

const defaultBgColor = "#ffffff";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const HomePage: NextPage = () => {
  const [wrapperBackground, setWrapperBackground] = useState(defaultBgColor);
  const [cardBackground, setCardBackground] = useState(defaultBgColor);
  const [metricBackground, setMetricBackground] = useState(defaultBgColor);
  const [metricFontColor, setMetricFontColor] = useState("#000000");
  const [generatedLink, setGeneratedLink] = useState("");
  const [result, setResult] = useState(false);

  const copyInBuffer = async () => {
    await navigator.clipboard.writeText(generatedLink);
    notifysuccess("Link copied");
  };

  const submitForm = async (values: ILinkSubmit) => {
    const {
      userName,
      repoName,
      avatarStyle,
      metricBorderRadius,
      metricFontSize,
    } = values;

    const link = `https://api.github.com/repos/${userName.trim()}/${repoName.trim()}`;

    const newLink = {
      link,
      shortLinkId: Math.random().toString(36).substr(2, 5),
      wrapperBackground,
      cardBackground,
      avatarStyle,
      metricBackground,
      metricBorderRadius,
      metricFontSize,
      metricFontColor,
    };

    const getRepo = async () => {
      try {
        setResult(false);
        const result = await axios.get(link);
        if (result && result.data) {
          try {
            const result = await axios.post("/api/link/add", newLink);
            setResult(true);
            if (result && result.data) {
              setGeneratedLink(`${BASE_URL}/${newLink.shortLinkId}`);
            }
          } catch (e) {
            notifyerror("Something went wrong! Please, try again!");
          }
        }

        return result;
      } catch (error: any) {
        if (error && error.response) {
          if (error.response.status === 404) {
            notifyerror(
              "Repository not found. Please, check username and repo name and try again"
            );
          } else if (error.response.status === 403) {
            notifyerror("You exceeded rate limit. Please try again later");
          } else {
            notifyerror(`Something went wrong! Please, try again! ${error}`);
          }
        }
      }
    };

    getRepo();
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
      {result && (
        <div className={FormikStyles.link}>
          <a href={generatedLink}>{generatedLink}</a>
          <CopyFilled
            onClick={copyInBuffer}
            style={{ fontSize: "20px", color: "#4A5568", marginLeft: "20px" }}
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
