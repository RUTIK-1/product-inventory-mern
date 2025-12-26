import React from "react";
import TextType from "./TextType";
import DarkVeil from "./DarkVeil";


export function GithubLoginButton() {
  return (
    <button
        onClick={() => {
  window.location.href = "https://github.com/RUTIK-1/RUTIK.git";
}}
      style={{
        background: "#333333",
        color: "#ffffff",
        border: "none",
        padding: "10px 16px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
      }}
    >
      <svg
        fill="#ffffff"
        role="img"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
       GitHub
    </button>
  );
}

export function LinkedInLoginButton() {
  return (
    <button
    onClick={() => {
  window.location.href = "https://www.linkedin.com/in/rutik-tank-749905318/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
}}

      style={{
        background: "rgb(26, 129, 185)",
        color: "#ffffff",
        border: "none",
        padding: "10px 16px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 430.117 430.117" fill="#ffffff">
        <path d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219V143.24h92.21v39.309c12.251-18.869,34.13-45.824,83.102-45.824C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463c0,26.619,20.038,47.94,50.959,47.94c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184V143.24H5.477V420.56z" />
      </svg>
      LinkedIn
    </button>
  );
}

export function InstagramLoginButton() {
  return (
    <button 
            onClick={() => {
  window.location.href = "https://www.instagram.com/rutiiiiikkk?igsh=eW11MnhwNmQ0dHQ3";
}}
      style={{
        background:
          "linear-gradient(to right, rgb(236,146,35), rgb(177,42,160), rgb(105,14,224))",
        color: "#ffffff",
        border: "none",
        padding: "10px 16px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 169.063 169.063" fill="#ffffff">
        <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z" />
        <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561C128.094,60.512,108.552,40.97,84.531,40.97z" />
        <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78c-2.05-2.05-4.89-3.22-7.78-3.22z" />
      </svg>
     Instagram 
    </button>
  );
}


function About() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#0f172a",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <DarkVeil />
      </div>

      <div
        className="container mt-4"
        style={{
          position: "relative",
          zIndex: 1,
          color: "#ffffffff",
        }}
      >
        <hr className="my-5" />

        <TextType
          text={[
            "About This Project",
            "Product Inventory App",
            "Built by Rutik",
          ]}
          typingSpeed={70}
          pauseDuration={1500}
          showCursor={true}
        />

        <hr className="my-4" />

        <p>
          The <strong>Product Inventory App</strong> is a full-stack web
          application designed to help users manage product listings,
          monitor stock levels, and report on inventory status in a visual
          dashboard.
        </p>

        <h5 className="mt-4">What It Does</h5>
        <ul>
          <li>Show all products with stock information</li>
          <li>Dashboard with total, low stock, and out-of-stock counts</li>
          <li>Add new products</li>
          <li>Edit and delete products</li>
          <li>Admin login protection for sensitive actions</li>
        </ul>

        <h5 className="mt-4">Technology Stack</h5>
        <ul>
          <li><strong>Frontend:</strong> React (Vite), Bootstrap, CSS</li>
          <li><strong>Backend:</strong> Node.js, Express</li>
          <li><strong>Database:</strong> MongoDB</li>
        </ul>

        <h5 className="mt-4">About Me</h5>
        <p>
          I am a student learning full-stack web development. This project
          helped me understand how frontend and backend systems work
          together in a real-world application.
        </p>


        <div className="mt-4">
          <GithubLoginButton />
          <LinkedInLoginButton />
          <InstagramLoginButton />
        </div>
      </div>
    </div>
  );
}

export default About;
