export default function handleTime(req, res) {
  const date = new Date();
  res.status(200).json({ date: date });
}
