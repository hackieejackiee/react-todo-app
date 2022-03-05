import React from "react";

export const Footer = () => {
    const align = {
        width: "100%"
    };

  return (
    <footer className="bg-dark text-light py-3">
      <p style={align} className="text-center">Copyright &copy; ToDo List App</p>
    </footer>
  );
};
