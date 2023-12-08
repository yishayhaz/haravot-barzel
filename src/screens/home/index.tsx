import React from "react";
import { AppScreen } from "@/common/components/app-screen";
import { Post } from "@/common/components/post/post";
import { Popup } from "@/common/components/popup";

export function HomeScreen() {
  const [show, setShow] = React.useState(true);

  return (
    <AppScreen>
      <div className="page">
        {show && (
          <Popup>
            <Post onClose={() => setShow(false)} />
          </Popup>
        )}
      </div>
    </AppScreen>
  );
}
