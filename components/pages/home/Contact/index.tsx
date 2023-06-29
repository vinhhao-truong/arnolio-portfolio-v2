"use client";

import FloatInSection from "@/components/common/FloatInSection";
import SectionHeader from "@/components/common/SectionHeader";
import PageContainer from "@/components/layout/PageContainer";
import Image from "next/image";
import React, { HTMLInputTypeAttribute, useEffect, useState } from "react";
import ReactProps from "@/interfaces/ReactProps";
import Logo from "@/components/common/Logo";
import styles from "./Contact.module.scss";
import axios from "axios";
import Response from "@/interfaces/ResponseData";
import { getClasses } from "@/libs/utils/get/getProps";
import { HiPaperAirplane as PlaneIcon } from "react-icons/hi";
import { motion } from "framer-motion";

interface InputsInterface {
  email: string;
  msg: string;
}
const initialInputs: InputsInterface = { email: "", msg: "" };

//@ts-ignore
const Input = (props) => {
  const isEmail = props.input === "email";
  const label = isEmail ? "Email *" : "Message *";

  return (
    <>
      <label htmlFor={props.id} className="w-max">
        {label}
      </label>
      {isEmail ? (
        <input
          {...props}
          className={`${getClasses(props.className)}`}
          type="email"
          input={undefined}
          placeholder="Enter your email here..."
        />
      ) : (
        <textarea
          {...props}
          className={`${getClasses(props.className)} h-[200px] resize-none`}
          input={undefined}
          placeholder="Enter your message here..."
        />
      )}
    </>
  );
};

const Contact = () => {
  const [inputs, setInputs] = useState<InputsInterface>(initialInputs);
  const [status, setStatus] = useState<
    "waiting" | "sending" | "success" | "error"
  >();

  const emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const isEmailValid = emailCheck.test(inputs.email);

  const onInputChange =
    (
      field: keyof InputsInterface
    ): React.ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      e.preventDefault();
      setInputs((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const sendMsg: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // dispatch(startLoading());
    if (inputs.email && inputs.msg && isEmailValid) {
      setStatus("sending");
      try {
        const response = await axios.post("/send-msg", {
          email: inputs.email,
          message: inputs.msg,
        });

        const resData: Response = await response.data.data;

        setStatus("success");
        // console.log(messageInput);
      } catch (err) {
        console.log(err);
        setStatus("error");
      }
    }
  };

  return (
    <PageContainer className={`${styles.Background} mt-16`} id="contact">
      <FloatInSection className="my-10">
        <h2 className="my-8 text-xl font-semibold leading-loose text-center sm:text-2xl lg:text-4xl text-gradient">
          Interested? Leave a message here and I will respond ASAP.
        </h2>
        <div className="flex flex-none justify-evenly">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5ade0eb85cfd79247926399a/1621039002787-XLD71SBNR2SSMKSWCDBB/5147423.gif"
            alt="contact-gif"
            height={300}
            width={300}
            className="object-contain h-max hidden sm:block sm:w-[200px] lg:w-[300px]"
          />
          <form
            onSubmit={sendMsg}
            className="flex flex-col w-full gap-3 sm:w-2/3 lg:w-1/2"
          >
            {/* @ts-ignore */}
            {Object.keys(inputs).map((inputKey: keyof InputsInterface, idx) => {
              return (
                <div
                  key={`contact-form-${idx}`}
                  className={`${
                    inputKey === "email" &&
                    !isEmailValid &&
                    inputs.email.length > 0
                      ? "focus-within:text-red-500 text-red-500"
                      : inputKey === "email" &&
                        isEmailValid &&
                        inputs.email.length > 0
                      ? "focus-within:text-emerald-500 dark:focus-within:text-emerald-400 text-emerald-500 dark:text-emerald-400"
                      : "focus-within:text-system-blue dark:focus-within:text-system-white"
                  } flex flex-col`}
                >
                  <Input
                    className={`${
                      inputKey === "email" &&
                      !isEmailValid &&
                      inputs.email.length > 0
                        ? "border-red-500 focus:border-red-500"
                        : inputKey === "email" &&
                          isEmailValid &&
                          inputs.email.length > 0
                        ? "border-emerald-500 dark:border-emerald-400 focus:border-emerald-500 dark:focus:border-emerald-400"
                        : "focus:border-system-blue dark:focus:border-system-white dark:border-gray-200 border-gray-400"
                    } ${styles.Input}`}
                    value={inputs[inputKey]}
                    onChange={onInputChange(inputKey)}
                    name={inputKey}
                    input={inputKey}
                    id={`contact-${inputKey}`}
                    required
                  />
                </div>
              );
            })}
            <motion.button
              whileTap={{ scale: 0.95 }}
              initial={{
                backgroundImage:
                  "linear-gradient(90deg, #4f76f6 0%, #77f2a1 100%)",
              }}
              whileHover={{
                backgroundImage:
                  "linear-gradient(115deg, #4f76f6 0%, #77f2a1 100%)",
              }}
              className="block mx-auto rounded-full w-max"
            >
              <motion.div
                initial={{ x: 2 }}
                whileHover={{ x: [1, 4] }}
                className="p-2.5"
              >
                <PlaneIcon className="text-xl rotate-90 text-system-white" />
              </motion.div>
            </motion.button>
          </form>
        </div>
      </FloatInSection>
    </PageContainer>
  );
};

export default Contact;
