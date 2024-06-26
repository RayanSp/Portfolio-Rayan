import { f as fail } from "../../../chunks/index.js";
import fetch from "node-fetch";
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    if (!name || !email || !message) {
      return fail(400, {
        error: "Vul alle vereiste velden in.",
        values: { name, email, message }
      });
    }
    const payload = {
      access_key: "9729ab9d-d874-4953-ab43-bb464b4f74ba",
      name,
      email,
      message
    };
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (response.ok) {
        return {
          success: true,
          message: "Verzonden!",
          values: { name: "", email: "", message: "" }
        };
      } else {
        return fail(500, {
          error: "Er is een fout opgetreden. Probeert u het alstublieft opnieuw.",
          values: { name, email, message }
        });
      }
    } catch (err) {
      return fail(500, {
        error: "Er is een fout opgetreden. Probeert u het alstublieft opnieuw.",
        values: { name, email, message }
      });
    }
  }
};
export {
  actions
};
