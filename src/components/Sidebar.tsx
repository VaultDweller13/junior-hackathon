import { useSpring, a } from "@react-spring/web";
import { PropsWithChildren } from "react";
import styles from "./Sidebar.module.css";

type SidebarProps = {
  isOpen: boolean;
};

export const Sidebar = (props: PropsWithChildren<SidebarProps>) => {
  const { left } = useSpring({
    from: { left: "-100%" },
    left: props.isOpen ? "0" : "-100%",
  });

  return (
    <a.div style={{ left: left }} className={styles.sidebar}>
      {props.children}
    </a.div>
  );
};
