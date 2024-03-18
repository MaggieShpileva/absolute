import { EmailIcon, PhoneIcon, TimeIcon } from "@chakra-ui/icons";
import styles from "./index.module.scss";
import phone_img from "../../../images/icons/phone.svg";
import { FC } from "react";

type Props = {
  data: {
    id: number;
    icon: string;
    title: string;
    link: string;
    link_text: string;
  };
};

export const ContactCart: FC<Props> = ({ data }) => {
  return (
    <div className={styles.cart}>
      <div className={styles.icon}>
        {/* <img src={data.icon} alt="" /> */}
        {/* <TimeIcon /> */}
        {/* <EmailIcon /> */}
        <span className="material-symbols-outlined">{data.icon}</span>
      </div>
      <div className={styles.text}>
        <h3>{data.title}</h3>
        <a href={data.link}>{data.link_text}</a>
      </div>
    </div>
  );
};
