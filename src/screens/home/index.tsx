import React from "react";
import { AppScreen } from "@/common/components/app-screen";
import { Post } from "@/common/components/post/post";

export function HomeScreen() {
  return (
    <AppScreen>
      <div className="page">
        <Post />
      </div>
    </AppScreen>
  );
}
