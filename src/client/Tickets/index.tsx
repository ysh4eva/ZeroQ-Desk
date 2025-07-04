"use client";
import { useState } from "react";
import styles from "./Tickets.module.scss";
import SelectDropdown from "@/components/Dropdown/Dropdown";
import { companies } from "@/lib/companies";
import { ticketCreation } from "@/app/services/ticket";

export default function Tickets() {
  const [company, setCompany] = useState({ name: "Select Company", uuid: "" });
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const dropDownStyles = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    marginTop: "10px",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };
  const dropDownContainerStyles: React.CSSProperties = {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
    alignItems: "center",
    margin: "10px 0 10px 0",
    fontFamily: "Poppins, sans-serif",
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      Company: company,
      Issue: issue,
      "First Name": fName,
      "Last Name": lName,
      Email: email,
    });
    const ticketData = {
      company,
      issue,
      firstName: fName,
      lastName: lName,
      email,
    };
    const resp = await ticketCreation(ticketData);
    console.log(resp);
    if (resp.status === 200) {
      alert("Ticket created successfully!");
    } else {
      alert("Failed to create ticket. Please try again.");
    }
    console.log(resp);

    setSubmitted(true);
  };

  return (
    <div>
      {/* <Header /> */}
      <div className={styles.container}>
        <div className={styles.text}>Ticket to be raised</div>

        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          <div className={styles["name-container"]}>
            <div>
              <div style={{ marginBottom: "10px" }}>First Name:</div>
              <input
                type="text"
                placeholder="Enter your first name"
                required
                onChange={(e) => setFName(e.target.value)}
                value={fName}
                className={styles["input-name"]}
              />
            </div>
            <div>
              <div style={{ marginBottom: "10px" }}>Last Name:</div>
              <input
                type="text"
                placeholder="Enter your last name"
                required
                onChange={(e) => setLName(e.target.value)}
                value={lName}
                className={styles["input-name"]}
              />
            </div>
          </div>
          <div className={styles["email-container"]}>
            <div style={{ margin: "10px" }}>Email:</div>
            <input
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className={styles["input-email"]} // Assuming you have a class for email input
            />
          </div>
          <div className={styles["company-container"]}>
            <SelectDropdown
              label="Company"
              options={companies}
              value={company}
              onChange={(e) => setCompany(e)}
              style={dropDownStyles}
              mainStyle={dropDownContainerStyles}
            />
          </div>

          <div className={styles["issue-container"]}>
            <label>Issue:</label>
            <textarea
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              className={styles["input-issue"]}
              placeholder="Describe your issue here"
            />
          </div>

          <div className={styles["button-container"]}>
            <button type="submit" className={styles["submit-button"]}>
              Submit Ticket
            </button>
          </div>
        </form>

        {submitted && (
          <div style={{ marginTop: "20px", color: "green" }}>
            ✅ Ticket submitted successfully!
          </div>
        )}
      </div>
    </div>
  );
}
