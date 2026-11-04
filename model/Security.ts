export type CreateSessionResult = { sid: string; refreshToken: string };

export type RefreshResult =
  | { ok: true; sid: string; refreshToken: string }
  | { ok: false; reason: "unknown_session" | "key_mismatch" | "expired" | "invalid_token" | "reuse_detected" };

export type SessionRow = {
  sid: string;
  jkt: string;
  refresh_hash: string;
  prev_refresh_hash: string | null;
  device_label: string | null;
  created_at: number;
  last_seen: number;
  expires_abs: number;
};

export type VerifyResult =
  | { ok: true }
  | { ok: false; reason: "unknown_session" | "key_mismatch" | "expired" | "replay" };
