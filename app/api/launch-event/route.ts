let launchEvents: any[] = [];

export async function POST(request: Request) {
  const data = await request.json();
  const entry = {
    id: `launch_${Date.now()}`,
    ...data,
    timestamp: new Date().toISOString(),
  };
  launchEvents.push(entry);
  return Response.json({ status: "success", data: entry });
}

export async function GET() {
  return Response.json({ count: launchEvents.length, data: launchEvents });
}
