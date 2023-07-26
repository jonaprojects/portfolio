import React from "react";
import Image from "next/image";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div id={props.id} className={classes.logo}>
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width ?? 60}
        height={props.height ?? 60}
        priority
      />
    </div>
  );
};

export default Logo;
