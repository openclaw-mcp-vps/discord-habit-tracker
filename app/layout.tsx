import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Habit Tracker – Track Habits Inside Discord",
  description: "Discord bot for accountability groups, daily habit tracking, and leaderboards inside your Discord server."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ed3d41c0-dbe1-41cc-8f3b-67f570c610bc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
