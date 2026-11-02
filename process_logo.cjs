const sharp = require('sharp');
const fs = require('fs');

const inputPath = 'C:/Users/HP/.gemini/antigravity-ide/brain/1124f1f4-d661-41ca-965d-6f32ccc3da6b/.user_uploaded/media_1793599986608.jpg';
const boardroomPath = 'C:/Users/HP/.gemini/antigravity-ide/brain/1124f1f4-d661-41ca-965d-6f32ccc3da6b/.user_uploaded/media_1793600181618.jpg';

async function run() {
  console.log('Reading input logo...');
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  console.log(`Logo dims: ${width}x${height}, channels: ${channels}`);

  // 1. Logo for dark background (White text, transparent BG)
  const darkBgBuffer = Buffer.alloc(width * height * 4);

  // 2. Logo for light background (Dark navy text for white parts, transparent BG)
  const lightBgBuffer = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const srcIdx = i * channels;
    const destIdx = i * 4;

    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];

    const maxVal = Math.max(r, g, b);

    let alpha = 0;
    if (maxVal > 15) {
      if (maxVal >= 50) {
        alpha = 255;
      } else {
        alpha = Math.round(((maxVal - 15) / 35) * 255);
      }
    }

    if (alpha === 0) {
      darkBgBuffer[destIdx] = 0;
      darkBgBuffer[destIdx + 1] = 0;
      darkBgBuffer[destIdx + 2] = 0;
      darkBgBuffer[destIdx + 3] = 0;

      lightBgBuffer[destIdx] = 0;
      lightBgBuffer[destIdx + 1] = 0;
      lightBgBuffer[destIdx + 2] = 0;
      lightBgBuffer[destIdx + 3] = 0;
    } else {
      // Un-premultiply to avoid dark halo
      const scale = 255 / Math.max(maxVal, 1);
      const ur = Math.min(255, Math.round(r * scale));
      const ug = Math.min(255, Math.round(g * scale));
      const ub = Math.min(255, Math.round(b * scale));

      // Dark BG version (White text & blue graphics)
      darkBgBuffer[destIdx] = ur;
      darkBgBuffer[destIdx + 1] = ug;
      darkBgBuffer[destIdx + 2] = ub;
      darkBgBuffer[destIdx + 3] = alpha;

      // Light BG version
      // Detect if this pixel is blue (swoosh, blue building accents, CLEANING GROUP)
      const isBlue = (ub > ur + 25 && ub > ug + 10);
      if (isBlue) {
        lightBgBuffer[destIdx] = ur;
        lightBgBuffer[destIdx + 1] = ug;
        lightBgBuffer[destIdx + 2] = ub;
      } else {
        // Change white text (PARKER) to deep slate navy #0A1D37 (10, 29, 55)
        const lum = (ur + ug + ub) / 3;
        const factor = lum / 255;
        lightBgBuffer[destIdx] = Math.round(10 * factor);
        lightBgBuffer[destIdx + 1] = Math.round(29 * factor);
        lightBgBuffer[destIdx + 2] = Math.round(55 * factor);
      }
      lightBgBuffer[destIdx + 3] = alpha;
    }
  }

  // Save white version
  await sharp(darkBgBuffer, { raw: { width, height, channels: 4 } })
    .trim()
    .png()
    .toFile('public/logo-white.png');
  console.log('Saved public/logo-white.png');

  // Save light background version
  await sharp(lightBgBuffer, { raw: { width, height, channels: 4 } })
    .trim()
    .png()
    .toFile('public/logo-dark.png');
  console.log('Saved public/logo-dark.png');

  // Copy boardroom photo to public/images/real-result-boardroom.jpg
  fs.copyFileSync(boardroomPath, 'public/images/real-result-boardroom.jpg');
  console.log('Saved public/images/real-result-boardroom.jpg');
}

run()
  .then(() => console.log('All image operations completed successfully.'))
  .catch(err => {
    console.error('Error processing:', err);
    process.exit(1);
  });
