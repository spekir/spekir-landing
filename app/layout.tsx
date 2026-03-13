export const metadata = {
  title: "Spekir",
  description: "Decision intelligence for founders and leaders"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, sans-serif",
          background: "#F3F5F7",
          color: "#0A1A2F"
        }}
      >
        {children}
      </body>
    </html>
  );
}
