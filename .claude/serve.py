#!/usr/bin/env python3
import os, sys
from http.server import HTTPServer, SimpleHTTPRequestHandler

port = int(os.environ.get('PORT', 8080))
directory = '/Users/theultimatebeautykrisztian/Documents/Ultima Beauty Site'
os.chdir(directory)

handler = SimpleHTTPRequestHandler
httpd = HTTPServer(('', port), handler)
print(f'Serving on port {port}...')
httpd.serve_forever()
