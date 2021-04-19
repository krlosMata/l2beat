export function getDeploymentURL(): string {
  return process.env.VERCEL_URL || 'https://l2beat.com'
}
