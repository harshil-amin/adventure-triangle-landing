let betaUsers: any[] = [];

export async function POST(request: Request) {
  const data = await request.json();
  const entry = {
    id: `beta_${Date.now()}`,
    ...data,
    timestamp: new Date().toISOString(),
  };
  betaUsers.push(entry);
  return Response.json({ status: "success", data: entry });
}

export async function GET() {
  return Response.json({ count: betaUsers.length, data: betaUsers });
}
