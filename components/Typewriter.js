import { useState, useEffect } from "react";

const Typewriter = () => {
  const [typer, setTyper] = useState("");

  useEffect(() => {
    const phrase = "I'm a Full Stack Developer";

    function updateTyper() {
      if (typer !== phrase) {
        setTyper(phrase.substring(0, typer.length + 1));
      }
    }

    const interval = setInterval(updateTyper, 50);

    if (typer === phrase) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [typer]);

  return (
    <span>
      {typer}
      <span className={"cursor blink"}></span>
    </span>
  );
};

export default Typewriter;
