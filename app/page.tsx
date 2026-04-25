import { redirect } from "next/navigation";

// Flip this to false when ready to launch the full site
const COMING_SOON = true;

export default function Home() {
  if (COMING_SOON) {
    redirect("/coming-soon");
  }

  // Full homepage — shown when COMING_SOON = false
  return null;
}
