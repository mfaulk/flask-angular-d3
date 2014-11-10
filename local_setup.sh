# Start virtualenv and configure local environment variables
source ./env/bin/activate

# Local Postgresql database
export DATABASE_URL="todo"

export APP_SETTINGS="config.DevelopmentConfig"
