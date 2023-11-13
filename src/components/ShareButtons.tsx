import {
  FacebookShareButton,
  TwitterShareButton,
  VKShareButton,
  FacebookIcon,
  TwitterIcon,
  VKIcon,
} from "react-share";
import styles from "./ShareButtons.module.css";

export const ShareButtons = () => {
  return (
    <div className={styles.main}>
      <FacebookShareButton url="https://imaginative-pothos-2e8e22.netlify.app/">
        <FacebookIcon />
      </FacebookShareButton>
      <TwitterShareButton url="https://imaginative-pothos-2e8e22.netlify.app/">
        <TwitterIcon />
      </TwitterShareButton>
      <VKShareButton url="https://imaginative-pothos-2e8e22.netlify.app/">
        <VKIcon />
      </VKShareButton>
    </div>
  );
};
