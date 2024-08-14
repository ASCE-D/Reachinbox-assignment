import HandleRedirect from "@/components/HandleRedirect";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HandleRedirect />
    </Suspense>
  );
}
