import type { NextPage } from "next";
import { Button, Input } from "@mantine/core";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <div>
      <h1>Book Market</h1>
      <div className="flex gap-2">
        <Input placeholder="your name" />
        <Button>Start</Button>
      </div>
    </div>
  );
};

export default Home;
