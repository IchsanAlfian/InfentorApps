FROM python:3.10.3-slim-buster

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

ENV PYTHONUNBUFFERED=1
ENV HOST 0.0.0.0

RUN apt-get update && apt-get install -y curl
RUN curl -sSL https://sdk.cloud.google.com | bash
RUN /root/google-cloud-sdk/bin/gcloud init --skip-diagnostics --console-only
RUN /root/google-cloud-sdk/bin/gsutil cp gs://infentorbucket/Machine\ Learning/model_kedua_new.h5 .

COPY . .

EXPOSE 8080

CMD ["python", "main.py"]