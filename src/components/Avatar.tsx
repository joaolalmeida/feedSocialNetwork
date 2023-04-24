import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean // o ? é usado quando algo é opcional
}

export function Avatar({hasBorder = true, ...props}: AvatarProps) {
 // const hasBorder = props.hasBorder != false; //fazendo sempre que for true a propriedade ela aplicar o stilo
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} // se tiver a propriedade hasBorder mostrar .avatarWithBorder se nao tiver mostrar .avatar
      {...props}
    />
  )
}