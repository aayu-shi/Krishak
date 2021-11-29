import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/UpdateOptions/UpdateOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "Krishak",
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm here to help.Please fill feadback form if you are facing any issue with our website",
      {
        widget: "feedbackLinks",
      }
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "rgba(75, 163, 159, 0.85)",
    },
    chatButton: {
      backgroundColor: "#239599",
    },
  },
  widgets: [
    {
      widgetName: "updateOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "weathertLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Weather Update",
            url: "https://www.timeanddate.com/weather/india/sirsa/ext",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "covidLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Covid-19 Update",
            url: "https://kishikamittal.github.io/covidUpdate/",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "priceLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Price Update",
            url: "https://agmarknet.gov.in/",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "newsLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Latest News",
            url: "https://economictimes.indiatimes.com/topic/farmers",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "feedbackLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Feedback Form",
            url: "https://www.google.com/forms/about/",
            id: 1,
          },
        ],
      },
    },
  ],
};

export default config;
