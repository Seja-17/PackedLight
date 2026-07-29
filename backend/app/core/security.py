"""
JWT and password utilities (prepared for Module 2 — no auth routes yet).

Tokens are created/decoded here so authentication routers stay thin later.
"""

from datetime import UTC, datetime, timedelta
from typing import Any

from jose import JWTError, jwt
from passlib.context import CryptContext

from app.core.config import Settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

TOKEN_TYPE_ACCESS = "access"
TOKEN_TYPE_REFRESH = "refresh"


def hash_password(plain_password: str) -> str:
    return pwd_context.hash(plain_password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


def _create_token(
    *,
    subject: str,
    settings: Settings,
    expires_delta: timedelta,
    token_type: str,
    extra_claims: dict[str, Any] | None = None,
) -> str:
    now = datetime.now(UTC)
    payload: dict[str, Any] = {
        "sub": subject,
        "type": token_type,
        "iat": now,
        "exp": now + expires_delta,
    }
    if extra_claims:
        payload.update(extra_claims)
    return jwt.encode(payload, settings.secret_key, algorithm=settings.jwt_algorithm)


def create_access_token(subject: str, settings: Settings) -> str:
    return _create_token(
        subject=subject,
        settings=settings,
        expires_delta=timedelta(minutes=settings.access_token_expire_minutes),
        token_type=TOKEN_TYPE_ACCESS,
    )


def create_refresh_token(subject: str, settings: Settings) -> str:
    return _create_token(
        subject=subject,
        settings=settings,
        expires_delta=timedelta(days=settings.refresh_token_expire_days),
        token_type=TOKEN_TYPE_REFRESH,
    )


def decode_token(token: str, settings: Settings) -> dict[str, Any]:
    """Decode and validate a JWT. Raises jose.JWTError on failure."""
    return jwt.decode(token, settings.secret_key, algorithms=[settings.jwt_algorithm])


def decode_token_safe(token: str, settings: Settings) -> dict[str, Any] | None:
    try:
        return decode_token(token, settings)
    except JWTError:
        return None
