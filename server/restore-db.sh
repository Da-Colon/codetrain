#!/usr/bin/env bash
createdb codetrain
psql -f SQL/schema.sql codetrain
psql -f SQL/seed.sql codetrain