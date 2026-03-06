const { randomUUID } = require('crypto');

const MAX_MB = Number(process.env.UPLOAD_MAX_MB || 15);
const allowed = new Set(['image/jpeg', 'image/png', 'image/webp']);

const genericStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsPath),
  filename: (req, file, cb) => {
    const ext =
      file.mimetype === 'image/png' ? '.png' :
      file.mimetype === 'image/webp' ? '.webp' : '.jpg';
    cb(null, `${randomUUID()}${ext}`);
  }
});

const genericUpload = multer({
  storage: genericStorage,
  limits: { fileSize: MAX_MB * 1024 * 1024 },
  fileFilter: (req, file, cb) => cb(null, allowed.has(file.mimetype))
});

app.post('/api/uploads', genericUpload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({
    url: `/uploads/${req.file.filename}`,
    filename: req.file.filename
  });
});
