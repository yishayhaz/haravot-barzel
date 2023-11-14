import React from "react";
import { AppScreen } from "@/common/components/app-screen";
import { Post } from "@/common/components/post/post";
import { Popup } from "@/common/components/popup";

export function HomeScreen() {
  return (
    <AppScreen>
      <div className="page">
        <Popup>
          <Post />
        </Popup>
      </div>
    </AppScreen>
  );
}
