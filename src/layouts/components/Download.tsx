import { Link, Stack } from "@mui/material";

const downloadList = [
  {
    imgUrl: "/images/home/ios.png",
    link: "https://apps.apple.com/app/stepwatch/id6446752981?l",
  },
  {
    imgUrl: "/images/home/google-play.png",
    link: "https://play.google.com/store/apps/details?id=com.sp.stepwatch",
  },
];
export default function Download({ gap = 2 }: { gap?: number }) {
  return (
    <Stack direction="row" gap={gap} mt={2}>
      {downloadList.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          target="_blank"
          rel="noreferrer"
          sx={{
            transition: "all 0.3s",
            " :hover": { transform: "scale(1.05)", transition: "all 0.3s" },
          }}
        >
          <img src={item.imgUrl} alt="" />
        </Link>
      ))}
    </Stack>
  );
}
