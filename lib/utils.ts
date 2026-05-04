// 1. Format số
export function formatNumber(num: number): string {
  return num.toLocaleString('vi-VN');
}

// 2. Format ngày tháng
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

// 3. Kiểm tra email
export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// 4. Delay function
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 5. Truncate text
export function truncateText(text: string, length: number): string {
  return text.length > length ? text.slice(0, length) + '...' : text;
}

// 6. Get video ID từ YouTube URL
export function getYoutubeId(url: string): string {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : '';
}

// 7. Merge class names
export function cn(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}