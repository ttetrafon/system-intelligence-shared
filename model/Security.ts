export type CreateSessionResult =
  | { ok: true; sid: string; refreshToken: string }
  | { ok: false; reason: "replay" };

export type RefreshResult =
  | { ok: true; sid: string; refreshToken: string }
  | { ok: false; reason: "unknown_session" | "key_mismatch" | "expired" | "invalid_token" | "reuse_detected" | "replay" };

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

export type AccessToken = {
  access_token: string;
  token_type: string;
  expires_in: number;
}
