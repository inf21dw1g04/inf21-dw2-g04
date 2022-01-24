#!/bin/bash
set -e
service mysql start
mysql < /app/biblioteca.sql
service mysql stop