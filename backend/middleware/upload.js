const multer = require('multer');
const path = require('path');
const sharp = require('sharp');
const fs = require('fs');

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter to accept only images
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'));
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: fileFilter
});

// Image processing middleware to crop images to 450x350
const cropImage = async (req, res, next) => {
  if (!req.file) {
    return next();
  }

  try {
    const originalPath = req.file.path;
    const croppedPath = path.join(uploadsDir, 'cropped-' + req.file.filename);

    await sharp(originalPath)
      .resize(450, 350, {
        fit: 'cover',
        position: 'center'
      })
      .toFile(croppedPath);

    // Delete original file and use cropped version
    fs.unlinkSync(originalPath);
    req.file.path = croppedPath;
    req.file.filename = 'cropped-' + req.file.filename;

    next();
  } catch (error) {
    console.error('Image cropping error:', error);
    next(error);
  }
};

module.exports = { upload, cropImage };
