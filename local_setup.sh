# Start virtualenv and configure local environment variables
source ./env/bin/activate

# Local Postgresql database
export DATABASE_URL="postgres://mfaulk@localhost/flask-angular-d3-dev"

export APP_SETTINGS="config.DevelopmentConfig"
