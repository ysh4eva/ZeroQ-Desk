import Image from "next/image";
import { useState } from "react";

interface IOptions {
  name: string;
  logo?: string;
  uuid: string;
}
interface ISelectDropdownProps {
  label: string;
  options: IOptions[];
  value: IOptions | null;
  onChange: (option: IOptions) => void;
  style?: React.CSSProperties;
  mainStyle?: React.CSSProperties;
}
export default function SelectDropdown({
  label,
  options,
  value,
  onChange,
  style,
  mainStyle,
}: ISelectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: IOptions) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div
      style={{
        position: "relative",
        marginBottom: "10px",
        width: "100%",
        ...mainStyle,
      }}
    >
      <label>{label}:</label>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          cursor: "pointer",
          borderRadius: "8px",
          width: "100%", // ✅ Make sure the clickable box has a full width
          ...style,
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value ? (
          <span>
            {value?.logo && (
              <Image
                src={value?.logo ?? ""}
                alt={value.name}
                width={20}
                height={20}
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
            )}
            {value.name}
          </span>
        ) : (
          <span>Select {label}</span>
        )}
      </div>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            borderRadius: "8px",
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 1000,
            minWidth: "100%", // ✅ Fix: make dropdown match the main box width
          }}
        >
          {options.map((opt, index) => (
            <div
              key={index}
              onClick={() => handleSelect(opt)}
              style={{
                padding: "8px 10px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {opt.logo && (
                <Image
                  src={opt.logo}
                  alt={opt.name}
                  width={20}
                  height={20}
                  style={{ marginRight: "10px" }}
                />
              )}

              {opt.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
