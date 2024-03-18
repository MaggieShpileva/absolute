import styles from "./index.module.scss";
import user from "../../../images/icons/user.svg";
import bed from "../../../images/icons/bed.svg";
import { ContactCart } from "./ContactCart";
import { contactsData } from "../../data/contactsData";

export const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contacts}>
        <h2>Контакты</h2>
        <div className={styles.blocks}>
          {contactsData.map((item) => {
            return <ContactCart data={item} />;
          })}
        </div>
      </div>
      <div className={styles.map}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=38.468900%2C55.878655&mode=search&oid=49805171741&ol=biz&sctx=ZAAAAAgBEAAaKAoSCSzWcJF7mkpAEZSGGoUkbUxAEhIJZoLhXMMMxT8RW3o01ZP5rz8iBgABAgMEBSgKOABA9lNIAWoCcnWdAc3MTD2gAQCoAQC9AcOY5bfCAQaduPrEuQGCAh3QsNCx0YHQvtC70Y7RgiDQvdC%2B0LPQuNC90YHQuooCAJICBTEwNzQymgIMZGVza3RvcC1tYXBz&sll=38.468900%2C55.878655&sspn=0.007069%2C0.002754&text=%D0%B0%D0%B1%D1%81%D0%BE%D0%BB%D1%8E%D1%82%20%D0%BD%D0%BE%D0%B3%D0%B8%D0%BD%D1%81%D0%BA&z=17.54"
          width="650"
          height="450"
        ></iframe>
      </div>
    </div>
  );
};
