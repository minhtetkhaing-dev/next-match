import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-red-500 font-semibold">Hello, World!</h1>
      <Button
        as={Link}
        href='/members'
        color="primary" 
        variant="bordered" 
        startContent={<FaRegSmile size={20}/>}
      >
        Click Me!
      </Button>
    </div>
  );
}
