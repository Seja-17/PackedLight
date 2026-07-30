import os

os.environ.setdefault("DATABASE_URL", "sqlite:///./test_auth.db")
os.environ.setdefault("SECRET_KEY", "test-secret-key")
os.environ.setdefault("JWT_ALGORITHM", "HS256")

from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_signup_creates_unverified_user_and_requires_verification():
    response = client.post(
        "/api/v1/auth/signup",
        json={
            "email": "new.user@example.com",
            "password": "StrongPass123!",
            "full_name": "New User",
        },
    )

    assert response.status_code == 201
    data = response.json()
    assert data["requires_verification"] is True
    assert data["email"] == "new.user@example.com"
    assert "verification_code" in data
    assert "access_token" not in data


def test_verify_email_issues_tokens():
    signup_response = client.post(
        "/api/v1/auth/signup",
        json={
            "email": "verify.user@example.com",
            "password": "StrongPass123!",
            "full_name": "Verify User",
        },
    )

    verification_code = signup_response.json()["verification_code"]

    response = client.post(
        "/api/v1/auth/verify-email",
        json={"email": "verify.user@example.com", "code": verification_code},
    )

    assert response.status_code == 200
    data = response.json()
    assert data["access_token"]
    assert data["refresh_token"]
    assert data["user"]["email"] == "verify.user@example.com"
