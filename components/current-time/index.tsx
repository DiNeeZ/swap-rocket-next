import React from "react";

export default function CurrentTime() {
  return <>{new Date().toLocaleDateString("ru-RU")}</>;
}
