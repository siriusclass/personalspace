// src/utils/hash-id.ts
export function createHashId(text: string): string {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = ((hash << 10) - hash) + text.charCodeAt(i);
    hash = hash & hash;
  }
  
  // Menggunakan karakter yang mudah dibaca (tanpa 0, O, I, l)
  const chars = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz';
  let result = '';
  let num = Math.abs(hash);
  
  // Generate 12 karakter
  for (let i = 0; i < 12; i++) {
    result += chars[num % chars.length];
    num = Math.floor(num / chars.length) || Math.abs(hash + i);
  }
  
  return result;
}