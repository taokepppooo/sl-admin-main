const map: Record<string, string> = {
  '//localhost:5171/': '//localhost:5171/',
  '//localhost:5172/': '//localhost:5172/'
}

export default function hostMap(host: string): string {
  if (process.env.NODE_ENV === 'production') {
    return map[host]
  }

  return host
}
