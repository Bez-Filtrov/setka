import { Html } from "@elysiajs/html";

interface LayoutProps {
  children: any;
  title?: string;
}

export const Layout = ({ children, title = "Pokemon of the Day" }: LayoutProps) => {
  return (
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </head>
      <body style={bodyStyle}>
        <div style={wrapperStyle}>
          <header style={headerStyle}>
            <h1 style={headerTitleStyle}>Покемон дня</h1>
            <p style={headerSubtitleStyle}>
              Узнай, какой покемон соответствует твоему IP сегодня
            </p>
          </header>
          <main style={mainStyle}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

const bodyStyle = {
  margin: '0',
  padding: '0',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  backgroundColor: "#f5f5f5",
  minHeight: "100vh",
};

const wrapperStyle = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "2rem 1rem",
};

const headerStyle = {
  textAlign: "center" as const,
  marginBottom: "2rem",
};

const headerTitleStyle = {
  margin: "0 0 0.5rem 0",
  fontSize: "2rem",
  color: "#333",
};

const headerSubtitleStyle = {
  margin: '0',
  color: "#666",
  fontSize: "1rem",
};

const mainStyle = {
  backgroundColor: "#fff",
  borderRadius: "12px",
  padding: "2rem",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
};
