import sharp from 'sharp';
import path from 'path';

const input = path.join(process.cwd(), 'artifacts', 'haq-enterprises', 'public', 'images', 'haq-logo.png');

async function inspect() {
  const img = sharp(input);
  const meta = await img.metadata();
  console.log('metadata:', { format: meta.format, width: meta.width, height: meta.height, channels: meta.channels });

  const small = await img.resize(20, 20, { fit: 'inside' }).greyscale().raw().toBuffer();
  // compute average and min/max
  let sum=0, min=255, max=0;
  for (let i=0;i<small.length;i++){
    const v=small[i]; sum+=v; if(v<min)min=v; if(v>max)max=v;
  }
  const avg = Math.round(sum/small.length);
  console.log('sample gray min/avg/max:', min, avg, max);
}

inspect().catch(e=>{ console.error(e); process.exit(1); });
