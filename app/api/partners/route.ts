let partners: any[] = [];

export async function POST(request: Request) {
  const data = await request.json();
  const entry = {
    id: `partner_${Date.now()}`,
    ...data,
    timestamp: new Date().toISOString(),
  };
  partners.push(entry);
  return Response.json({ status: "success", data: entry });
}

export async function GET() {
  return Response.json({ count: partners.length, data: partners });
}
