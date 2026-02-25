import { Html } from "@elysiajs/html";

interface ServerInfoProps {
  ip: string;
  time: string;
}

export const ServerInfo = ({ ip, time }: ServerInfoProps) => {
  return (
    <div style={containerStyle}>
      <div style={infoRowStyle}>
        <span style={labelStyle}>Ваш IP:</span>
        <span style={valueStyle}>{ip}</span>
      </div>
      <div style={infoRowStyle}>
        <span style={labelStyle}>Время сервера:</span>
        <span style={valueStyle}>{time}</span>
      </div>
    </div>
  );
};

const containerStyle = {
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
  padding: "1.5rem",
  marginBottom: "2rem",
};

const infoRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem 0",
  borderBottom: "1px solid #e9ecef",
};

const labelStyle = {
  color: "#666",
  fontSize: "0.9rem",
};

const valueStyle = {
  color: "#333",
  fontWeight: "600",
  fontSize: "0.95rem",
};
