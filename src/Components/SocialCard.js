import React from "react";
import "../scss/index.scss";
import { Facebook, Instagram, WhatsApp, LinkedIn } from "@mui/icons-material";
export function SocialCard() {
  return (
    <div className="ms-4 mt-4">
      <a href="/" className="social-icons">
        <Facebook />
      </a>
      <a href="/" className="social-icons">
        <WhatsApp />
      </a>
      <a href="/" className="social-icons">
        <Instagram />
      </a>
      <a href="/" className="social-icons">
        <LinkedIn />
      </a>
    </div>
  );
}
