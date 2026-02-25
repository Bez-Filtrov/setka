import { Html } from "@elysiajs/html";

interface PokemonCardProps {
  name: string;
  image: string;
  types: string[];
}

export const PokemonCard = ({ name, image, types }: PokemonCardProps) => {
  return (
    <div style={cardContainerStyle}>
      <div style={cardStyle}>
        <img
          src={image}
          alt={name}
          style={imageStyle}
        />
        <h2 style={titleStyle}>{name}</h2>
        <div style={typesContainerStyle}>
          {types.map((type) => (
            <span data-type={type} style={typeBadgeStyle}>
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const cardContainerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "2rem",
};

const cardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  padding: "2rem",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  textAlign: "center" as const,
  maxWidth: "320px",
  width: "100%",
};

const imageStyle = {
  width: "200px",
  height: "200px",
  objectFit: "contain" as const,
  marginBottom: "1rem",
};

const titleStyle = {
  margin: "0 0 1rem 0",
  fontSize: "1.5rem",
  color: "#333",
  textTransform: "capitalize" as const,
};

const typesContainerStyle = {
  display: "flex",
  gap: "0.5rem",
  justifyContent: "center",
  flexWrap: "wrap" as const,
};

const typeBadgeStyle = {
  padding: "0.25rem 0.75rem",
  backgroundColor: "#f0f0f0",
  borderRadius: "12px",
  fontSize: "0.875rem",
  color: "#666",
  textTransform: "capitalize" as const,
};
