export default function handler(req, res) {
  const key = req.query.auth_key || req.body?.auth_key;

  const OWNER_KEY = process.env.AUTH_KEY;

  if (key === OWNER_KEY) {
    return res.status(200).json({
      status: true,
      valid: true,
      owner: "XINN",
      premium: true,
      plan: "OWNER",
      limit: "UNLIMITED"
    });
  }

  return res.status(200).json({
    status: true,
    valid: true,
    owner: "USER",
    premium: false,
    plan: "FREE",
    limit: 5
  });
}