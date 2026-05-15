export default function handler(req, res) {
  const key = req.body?.auth_key || req.query?.auth_key;

  if (key !== process.env.AUTH_KEY) {
    return res.status(403).json({
      status: false,
      message: "Auth key salah"
    });
  }

  return res.status(200).json({
    status: true,
    id: "BUILD_" + Date.now(),
    message: "Masuk queue"
  });
}