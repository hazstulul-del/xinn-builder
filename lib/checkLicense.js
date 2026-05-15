const axios = require("axios");

const API = "https://xinn-builder.vercel.app";
const AUTH_KEY = "XINN_BUILDER_2026";

async function checkLicense() {
  try {
    const res = await axios.get(`${API}/api/check-license`, {
      params: {
        auth_key: AUTH_KEY
      }
    });

    return res.data;
  } catch (err) {
    console.log("License error:", err.message);
    return {
      valid: false
    };
  }
}

module.exports = checkLicense;