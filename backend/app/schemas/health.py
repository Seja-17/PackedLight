from pydantic import BaseModel, Field


class HealthResponse(BaseModel):
    status: str = Field(examples=["ok"])
    environment: str
    version: str = Field(examples=["0.1.0"])
