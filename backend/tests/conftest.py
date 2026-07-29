import os

import pytest

# Ensure settings load in CI / fresh clones without a .env file
os.environ.setdefault("SECRET_KEY", "test-secret-key-for-pytest-only")
os.environ.setdefault(
    "DATABASE_URL",
    "postgresql+psycopg://postgres:postgres@localhost:5432/packedlight",
)


@pytest.fixture(scope="session")
def anyio_backend():
    return "asyncio"
