"use server";

import sendMail from "./email.action";

export async function submitContactForm(formData: FormData) {
  try {
    // 1. Get form data
    const { name, email, message } = Object.fromEntries(formData);

    // 2. Send email
    console.log("Sending email with:", { name, email, message });
    await sendMail(name as string, email as string, message as string);

    return {
      success: true,
      message: "Message sent successfully"
    };

  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong"
    };
  }
}