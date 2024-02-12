import { useSearchParams } from "react-router-dom";

import { AppModal, Map } from "../components";
import { useSearchParam } from "../hooks";

export default function HomePage() {
  const [, setSearchParams] = useSearchParams();
  const [settings] = useSearchParam("settings");

  return (
    <>
      {settings && (
        <AppModal onClose={() => setSearchParams()} title="Search by date">
          content
        </AppModal>
      )}

      <Map />
    </>
  );
}
