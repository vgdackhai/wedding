import Slider, { Settings } from "react-slick";
import styles from "./index.module.css";

interface Props extends Settings {
  children?: React.ReactNode;
}

export const Slicker = ({ children, ...rest }: Props) => {
  return (
    <ul className={`${styles.sliderWrapper} md:min-w-[500px] w-full`}>
      <Slider {...rest}>
        {children}
        {/* {subcategoryItems.map((item) => (
          <li key={item?.node.id} className="flex flex-col">
            {children}
          </li>
        ))} */}
      </Slider>
    </ul>
  );
};
