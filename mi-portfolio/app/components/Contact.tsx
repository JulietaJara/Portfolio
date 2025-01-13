"use client";

import { useState } from "react";
import Button from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Mail } from "lucide-react";

export default function ContactEmail() {
  const [isCopied, setIsCopied] = useState(false);
  const email = "jarajulieta284@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardContent className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-3">
              <Mail className="text-gray-400" size={24} />
              <a
                href={`mailto:${email}`}
                className="text-lg text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                {email}
              </a>
            </div>
            <Button
              onClick={copyToClipboard}
              variant="ghost"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              {isCopied ? "¡Copiado!" : "Copiar"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
