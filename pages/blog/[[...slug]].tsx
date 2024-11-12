import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    setInterval(() => {
      console.log("interval in Blog Page");
    }, 2000);
  });
  return <h1>This is OPTIONAL catch all blog/[[...slug]].tsx</h1>;
}
