import { Text } from "./component/Text";
import s from "./Services.module.scss";

export const Services = () => {
  return (
    <section id="Services" className={s.Services}>
      <div className="container">
        <div className={s.servicesContent}>
          <div className={s.servicesHeader}>
            <div className={s.serviceTxt}>
              <h1>Наши услуги</h1>
              <p>
                Выберите подходящую услугу для вас и свяжитесь с нами по кнопке
                ниже
              </p>
            </div>
            <button>WhatsApp</button>
          </div>
          <div className={s.servicesCards}>
            <Text />
          </div>
        </div>
      </div>
    </section>
  );
};