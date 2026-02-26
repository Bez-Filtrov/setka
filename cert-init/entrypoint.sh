#!/bin/sh

KEY_FILE="/certs/mask.key"
CERT_FILE="/certs/mask.crt"

if [ ! -f "$KEY_FILE" ]; then
    echo "Certificates not found. Generating self-signed certs..."
    
    openssl req -x509 -nodes -newkey rsa:2048 \
      -keyout "$KEY_FILE" \
      -out "$CERT_FILE" \
      -days 365 \
      -subj '/CN=localhost'
      
    echo "Done."
else
    echo "Certificates found. Skipping generation."
fi