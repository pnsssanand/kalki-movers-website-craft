
import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance
export const cld = new Cloudinary({
  cloud: {
    cloudName: 'diiumf2qw'
  },
  url: {
    secure: true
  }
});

// Function to optimize image loading
export const getOptimizedImageUrl = (publicId: string, width: number, quality = 'auto') => {
  return `https://res.cloudinary.com/diiumf2qw/image/upload/q_${quality},w_${width}/${publicId}`;
};
