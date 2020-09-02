export function delay(ms: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export function getClientHash(clientId: string, clientSecret: string): string {
  const data = `${clientId}:${clientSecret}`;
  const buff = Buffer.from(data);

  return buff.toString('base64');
}
