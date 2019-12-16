#!/usr/bin/env bash
createdb codetrain
psql -f sql/schema.sql codetrain
psql -f sql/seed.sql codetrain