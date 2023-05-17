import { Suspense } from "react";
import ParamGrabber from "./ParamGrabber";

export default function BlogSearchPage() {
  return (
    <div className="prose py-12">
      <h1>Blog posts - Search by tag</h1>
      <hr />
      <Suspense>
        <ParamGrabber />
      </Suspense>
    </div>
  );
}
