export default function handler(req, res) {
  return res.status(200).json({
    status: "success",
    progress: 100,
    message: "API Vercel aktif",
    download: null
  });
}