import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type CustomButtonProps = {
  title: string;
  icon?: any;
  href?: string;
  classes?: string;
};

export default function CustomButton({
  title,
  icon,
  href,
  classes,
}: CustomButtonProps) {
  const Icon = icon;

  return (
    <>
      {href ? (
        <Button asChild className={classes}>
          <Link href={href} className="flex items-center">
            {Icon && <Icon className="mr-2 h-4 w-4" />}
            {title}
          </Link>
        </Button>
      ) : (
        <Button className={classes}>
          {Icon && <Icon className="mr-2 h-4 w-4" />}
          {title}
        </Button>
      )}
    </>
  );
}
