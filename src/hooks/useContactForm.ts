import { useState } from "react";
import emailJs from "@emailjs/browser";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailJs.send(
        "service_tlnql5g",
        "template_hsbp4dl",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          service: formData.service,
          to_email: "alfurqan.shaikh@gmail.com",
        },
        "fBmiXavakQ6zlsaQC"
      );

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          service: "",
        });
      }, 2000);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return {
    formData,
    setFormData,
    loading,
    success,
    error,
    handleChange,
    handleSubmit,
  };
};
