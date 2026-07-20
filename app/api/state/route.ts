import { NextResponse } from "next/server";
import {
  captureWorkItem,
  ingestRecruiterMessage,
  loadCommandCenterState,
  resolveApproval,
  setBackgroundPause,
} from "../../../db/command-center";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json(await loadCommandCenterState());
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to load Command Center state" },
      { status: 503 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    switch (body.action) {
      case "set-background-pause":
        await setBackgroundPause(Boolean(body.paused));
        break;
      case "capture": {
        const text = String(body.text ?? "").trim();
        if (!text) return NextResponse.json({ error: "Capture text is required" }, { status: 400 });
        await captureWorkItem(text.slice(0, 1000));
        break;
      }
      case "resolve-approval":
        await resolveApproval(
          String(body.id ?? ""),
          String(body.payloadHash ?? ""),
          String(body.decision ?? "") as "approved" | "declined" | "deferred",
        );
        break;
      case "ingest-recruiter-message":
        await ingestRecruiterMessage({
          sourceId: String(body.sourceId ?? ""),
          channel: String(body.channel ?? "email"),
          sender: String(body.sender ?? "Unknown sender"),
          subject: String(body.subject ?? "Recruiter message"),
          receivedAt: String(body.receivedAt ?? new Date().toISOString()),
          summary: String(body.summary ?? ""),
          draftResponse: body.draftResponse ? String(body.draftResponse) : undefined,
        });
        break;
      default:
        return NextResponse.json({ error: "Unsupported action" }, { status: 400 });
    }
    return NextResponse.json(await loadCommandCenterState());
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to update Command Center state" },
      { status: 400 },
    );
  }
}
