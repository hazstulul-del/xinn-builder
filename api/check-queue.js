export default function handler(req, res) {
  res.json({
    status: "success",
    progress: 100,
    message: "API Vercel aktif",
    download: null
  });
}
