import React from "react";

export const Footer = () => {
  return (
    <div className="bg-[#323232] min-h-[70vh] flex flex-col justify-between">
      <div className="flex gap-16 px-28 py-20">
        <div>
          <h4 className="mb-6 text-white text-lg font-semibold uppercase">
            Quick Links
          </h4>
          <ul className="text-gray-300 space-y-3 text-sm">
            <li>GEU</li>
            <li>GEU</li>
            <li>GEU</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 text-white text-lg font-semibold uppercase">
            Related Links
          </h4>
          <ul className="text-gray-300 space-y-3 text-sm">
            <li>IQAC</li>
            <li>ARIIA</li>
            <li>NATS</li>
            <li>NIRF</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 text-white text-lg font-semibold uppercase">
            Authorized Login
          </h4>
          <ul className="text-gray-300 space-y-3 text-sm">
            <li>HRDC Login</li>
            <li>Admin Login</li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mb-8 text-white">
        Graphic Era (Deemed to be University) © 2024
      </p>
    </div>
  );
};
